// bg.js (MV3 service worker) — clean + no duplicate contextMenu ids
// Drop-in replacement

const BM_KEYS = {
  bookmarks: "bookmarks",
  groups: "groups",
  lastGroup: "bm.lastGroup",
};

const SEEDED_KEY = "bm.seeded.v1";

const DEFAULT_GROUPS = {
  "🔍 Search": { color: "#3b82f6" },
  "💼 Work":   { color: "#8b5cf6" },
  "💬 Social": { color: "#22c55e" },
  "🎧 Fun":    { color: "#f97316" },
};

const PRESET_BOOKMARKS = [
  { group: "🔍 Search", title: "Google", url: "https://www.google.com" },
  { group: "🔍 Search", title: "YouTube", url: "https://www.youtube.com" },
  { group: "🔍 Search", title: "Wikipedia", url: "https://www.wikipedia.org" },
  { group: "🔍 Search", title: "ChatGPT", url: "https://chat.openai.com" },

  { group: "💬 Social", title: "Telegram Web", url: "https://web.telegram.org" },
  { group: "💬 Social", title: "WhatsApp Web", url: "https://web.whatsapp.com" },
  { group: "💬 Social", title: "Instagram", url: "https://www.instagram.com" },
  { group: "💬 Social", title: "X (Twitter)", url: "https://x.com" },

  { group: "💼 Work", title: "GitHub", url: "https://github.com" },
  { group: "💼 Work", title: "Stack Overflow", url: "https://stackoverflow.com" },
  { group: "💼 Work", title: "Google Drive", url: "https://drive.google.com" },
  { group: "💼 Work", title: "Notion", url: "https://www.notion.so" },

  { group: "🎧 Fun", title: "Spotify", url: "https://open.spotify.com" },
  { group: "🎧 Fun", title: "Netflix", url: "https://www.netflix.com" },
  { group: "🎧 Fun", title: "Reddit", url: "https://www.reddit.com" },
  { group: "🎧 Fun", title: "Twitch", url: "https://www.twitch.tv" },

  { group: "💼 Work", title: "Gmail", url: "https://mail.google.com" },
  { group: "🔍 Search", title: "Google Maps", url: "https://maps.google.com" },
  { group: "🔍 Search", title: "Google Translate", url: "https://translate.google.com" },
  { group: "🎧 Fun", title: "Amazon", url: "https://www.amazon.com" },
];

const MENU = {
  ROOT: "bm_add_root",
  LAST: "bm_add_last",
  GROUP_PREFIX: "bm_add_group_", // + encodeURIComponent(name)
};

const MEDIA_LAST_KEY = "media.lastActiveUrl";
const MEDIA_LAST_TAB_ID_KEY = "media.lastActiveTabId";

console.log("[bg] loaded");

function isWebUrl(url) {
  return /^https?:\/\//i.test(url || "");
}

function isSupportedMediaUrl(url) {
  if (!isWebUrl(url)) return false;
  return /youtube\.com|youtu\.be|music\.youtube\.com|spotify\.com|soundcloud\.com/i.test(url);
}

async function rememberMediaTab(tab) {
  try {
    const url = tab?.url || "";
    if (!isSupportedMediaUrl(url)) return;
    const tabId = typeof tab?.id === "number" ? tab.id : null;
    await setStore({
      [MEDIA_LAST_KEY]: url,
      ...(tabId !== null ? { [MEDIA_LAST_TAB_ID_KEY]: tabId } : {}),
    });
  } catch {}
}

function faviconFor(url) {
  try {
    // Более стабильный вариант, чем t2.gstatic (у тебя там 404).
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`;
  } catch {
    return "";
  }
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.setUninstallURL(
    "https://docs.google.com/forms/d/e/1FAIpQLScXYS2B-OdHtKExyI9kryC0UG2QtHuBAudArEAKi64GQ6mmAA/viewform?usp=dialog"
  );
});

function getStore(keys) {
  return new Promise((resolve) => chrome.storage.local.get(keys, (r) => resolve(r || {})));
}

function setStore(obj) {
  return new Promise((resolve) => chrome.storage.local.set(obj, () => resolve()));
}

function groupIdFromName(name) {
  return MENU.GROUP_PREFIX + encodeURIComponent(name);
}

function groupNameFromId(id) {
  return decodeURIComponent(String(id).slice(MENU.GROUP_PREFIX.length));
}

async function ensureDefaults() {
  const data = await getStore([BM_KEYS.groups, BM_KEYS.bookmarks, BM_KEYS.lastGroup, SEEDED_KEY]);

  let groups =
    data[BM_KEYS.groups] && typeof data[BM_KEYS.groups] === "object"
      ? data[BM_KEYS.groups]
      : {};

  let bookmarks = Array.isArray(data[BM_KEYS.bookmarks]) ? data[BM_KEYS.bookmarks] : [];

  let lastGroup = typeof data[BM_KEYS.lastGroup] === "string" ? data[BM_KEYS.lastGroup] : "";

  const seeded = !!data[SEEDED_KEY];

  // groups
  if (!Object.keys(groups).length) {
    // structuredClone ок в MV3, но сделаем безопасно
    groups = JSON.parse(JSON.stringify(DEFAULT_GROUPS));
  }

  // lastGroup
  if (!lastGroup || !groups[lastGroup]) lastGroup = Object.keys(groups)[0];

  // seed bookmarks (only once)
  let didSeed = false;
  if (!seeded && bookmarks.length === 0) {
    const now = Date.now();
    bookmarks = PRESET_BOOKMARKS.map((b) => ({
      ...b,
      icon: faviconFor(b.url),
      addedAt: now,
    }));
    didSeed = true;
  }

  await setStore({
    [BM_KEYS.groups]: groups,
    [BM_KEYS.bookmarks]: bookmarks,
    [BM_KEYS.lastGroup]: lastGroup,
    ...(didSeed ? { [SEEDED_KEY]: true } : {}),
  });

  return { groups, bookmarks, lastGroup };
}

async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs?.[0] || null;
}

async function addTabToBookmarks(tab, groupOverride = "") {
  tab = tab || (await getActiveTab());
  if (!tab?.url || !isWebUrl(tab.url)) return;

  const { groups, bookmarks, lastGroup } = await ensureDefaults();

  const group = groupOverride && groups[groupOverride] ? groupOverride : lastGroup;

  const url = tab.url;
  const title = (tab.title || url).trim();

  const exists = bookmarks.some((b) => b.url === url && b.group === group);
  if (exists) {
    await setStore({ [BM_KEYS.lastGroup]: group });
    return;
  }

  bookmarks.unshift({
    title,
    url,
    group,
    icon: faviconFor(url),
    addedAt: Date.now(),
  });

  await setStore({
    [BM_KEYS.bookmarks]: bookmarks,
    [BM_KEYS.lastGroup]: group,
  });

  // badge feedback
  try {
    await chrome.action.setBadgeText({ text: "✓" });
    setTimeout(() => chrome.action.setBadgeText({ text: "" }), 900);
  } catch {}
}

// ----- Context Menus (no duplicates) -----

let menuBuildInFlight = null;

async function buildContextMenu() {
  // Делаем "lock", чтобы при onStartup + onChanged не строилось параллельно
  if (menuBuildInFlight) return menuBuildInFlight;

  menuBuildInFlight = (async () => {
    const { groups } = await ensureDefaults();

    await new Promise((resolve) => {
      chrome.contextMenus.removeAll(() => {
        // root
        chrome.contextMenus.create({
          id: MENU.ROOT,
          title: "Add to Bookmarks",
          contexts: ["page"],
        });

        // groups under root
        for (const groupName of Object.keys(groups)) {
          chrome.contextMenus.create({
            id: groupIdFromName(groupName),
            parentId: MENU.ROOT,
            title: groupName,
            contexts: ["page"],
          });
        }

        // quick add as separate item
        chrome.contextMenus.create({
          id: MENU.LAST,
          title: "Quick add (last group)",
          contexts: ["page"],
        });

        resolve();
      });
    });
  })();

  try {
    await menuBuildInFlight;
  } finally {
    menuBuildInFlight = null;
  }
}

// build menus on install/update
chrome.runtime.onInstalled.addListener(async () => {
  await ensureDefaults();
  await buildContextMenu();
});

// on browser start
chrome.runtime.onStartup?.addListener(async () => {
  await ensureDefaults();
  await buildContextMenu();
});

// rebuild when groups changed
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local") return;
  if (changes[BM_KEYS.groups]) buildContextMenu();
});

// handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const id = String(info.menuItemId || "");

  if (id === MENU.LAST) {
    await addTabToBookmarks(tab);
    return;
  }

  if (id.startsWith(MENU.GROUP_PREFIX)) {
    const groupName = groupNameFromId(id);
    await addTabToBookmarks(tab, groupName);
  }
});

// quick add by clicking extension icon
chrome.action.onClicked.addListener(async (tab) => {
  await addTabToBookmarks(tab);
});

// ----- Media tab tracking for New Tab music widget -----
chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  try {
    const tab = await chrome.tabs.get(tabId);
    await rememberMediaTab(tab);
  } catch {}
});

chrome.tabs.onUpdated.addListener(async (_tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" && typeof changeInfo.url !== "string") return;
  await rememberMediaTab(tab);
});

// ----- Search via Chrome Search API -----
chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "SEARCH" && typeof msg.query === "string") {
    try {
      chrome.search.query(
        { text: msg.query, disposition: "CURRENT_TAB" },
        () => {}
      );
    } catch {}
  }
});
