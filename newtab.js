document.addEventListener("DOMContentLoaded", async () => {

  /* ======================
     HELPERS
  ====================== */
  const $ = id => document.getElementById(id);

  /* ======================
     TRANSLATIONS
  ====================== */
  const translations = {
    en: {
      customize: {
        title: "Customize",
        subtitle: "Drag a widget to hide it. Drag from \"Hidden\" back onto the screen to restore.",
        done: "Done",
        widgetsButton: "Widgets",
        onScreen: "On screen",
        hidden: "Hidden",
        dropToHide: "Drop here to hide widget",
        resetLayout: "Reset layout",
        addPhotos: "+ Photos",
        actionAddPhotos: "Add photos widget",
        actionSidebarMode: "Switch sidebar mode",
        actionTheme: "Switch light/dark theme",
        actionWeatherUnit: "Toggle temperature unit",
        actionClockFormat: "Toggle time format",
        toggleTheme: "Toggle theme",
        sidebarDynamic: "Sidebar: Dynamic",
        sidebarStatic: "Sidebar: Static",
        actionsButton: "Actions",
        themeButton: "Theme",
        wallpapers: "Wallpapers",
        videoThemes: "Video Themes"
      },
      widgets: {
        search: "Search",
        searchPlaceholder: "Search or type a URL",
        welcome: "Welcome,",
        namePlaceholder: "Enter your nickname",
        todo: "To do",
        todoPlaceholder: "Add task...",
        weather: "Weather",
        enableLocation: "Click Enable location to show local weather.",
        cityPlaceholder: "Enter city",
        cityApply: "Set",
        cityLoading: "Loading weather...",
        citySearching: "Searching city...",
        cityNotFound: "City not found.",
        cityFailed: "Can't load this city.",
        notes: "Notes",
        noteLastEdit: "Last edit:",
        noteSaved: "Saved:",
        addNote: "Add note",
        noteTitle: "Note title",
        noteText: "Write something...",
        save: "Save",
        delete: "Delete",
        close: "Close",
        map: "Map",
        favorites: "Favorites",
        date: "Date",
        clock: "Clock",
        bookmarks: "Bookmarks",
        photos: "Photos",
        addPhotos: "Add photos",
        clearPhotos: "Clear all photos",
        mapOpen: "Open",
        useMyLocation: "Use my location",
        mapStatusRequesting: "Requesting location…",
        mapStatusReady: "Ready",
        mapStatusEnable: "Tap 📍 to enable your map.",
        mapStatusDenied: "Location denied. Tap 📍 to try again.",
        mapStatusFailed: "Can't get location. Tap 📍 to try again."
      },
      bookmarks: {
        title: "Bookmarks",
        search: "Search bookmarks...",
        name: "Name",
        url: "https://example.com",
        addGroup: "Add group",
        newGroupName: "Newgroupname",
        chooseIcon: "Choose icon"
      },
      background: {
        title: "Background settings",
        upload: "Upload from computer",
        uploadPhoto: "Upload photo",
        uploadVideo: "Upload video",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Apply",
        reset: "Reset to default",
        chooseArea: "Choose visible area",
        blur: "Blur",
        center: "Center",
        cancel: "Cancel",
        videoSoundOn: "Sound: On",
        videoSoundOff: "Sound: Off"
      },
      tutorial: {
        title: "Welcome to Your New Tab!",
        subtitle: "Watch this quick tutorial to get started",
        gotIt: "Got it, let's start!"
      },
      review: {
        title: "Enjoying the New Tab?",
        question: "Do you like our extension?",
        yes: "Yes",
        no: "No"
      }
    },
    ru: {
      customize: {
        title: "Настройки",
        subtitle: "Перетащите виджет, чтобы скрыть его. Перетащите из \"Скрытые\" обратно на экран, чтобы восстановить.",
        done: "Готово",
        widgetsButton: "Виджеты",
        onScreen: "На экране",
        hidden: "Скрытые",
        dropToHide: "Перетащите сюда, чтобы скрыть виджет",
        resetLayout: "Сбросить расположение",
        addPhotos: "+ Фото",
        actionAddPhotos: "Добавить виджет фото",
        actionSidebarMode: "Переключить режим сайдбара",
        actionTheme: "Переключить светлую/тёмную тему",
        actionWeatherUnit: "Переключить единицу температуры",
        actionClockFormat: "Переключить формат времени",
        toggleTheme: "Сменить тему",
        sidebarDynamic: "Сайдбар: динамический",
        sidebarStatic: "Сайдбар: статический",
        actionsButton: "Действия",
        themeButton: "Тема",
        wallpapers: "Обои",
        videoThemes: "Видео темы"
      },
      widgets: {
        search: "Поиск",
        searchPlaceholder: "Введите запрос или URL",
        welcome: "Добро пожаловать,",
        namePlaceholder: "Введите ваше имя",
        todo: "Задачи",
        todoPlaceholder: "Добавить задачу...",
        weather: "Погода",
        enableLocation: "Нажмите \"Включить геолокацию\", чтобы показать местную погоду.",
        cityPlaceholder: "Введите город",
        cityApply: "Применить",
        cityLoading: "Загрузка погоды...",
        citySearching: "Поиск города...",
        cityNotFound: "Город не найден.",
        cityFailed: "Не удалось загрузить город.",
        notes: "Заметки",
        noteLastEdit: "Последнее изменение:",
        noteSaved: "Сохранено:",
        addNote: "Добавить заметку",
        noteTitle: "Заголовок заметки",
        noteText: "Напишите что-нибудь...",
        save: "Сохранить",
        delete: "Удалить",
        close: "Закрыть",
        map: "Карта",
        favorites: "Избранное",
        date: "Дата",
        clock: "Часы",
        bookmarks: "Закладки",
        photos: "Фото",
        addPhotos: "Добавить фото",
        clearPhotos: "Очистить все фото",
        mapOpen: "Открыть",
        useMyLocation: "Использовать мою геопозицию",
        mapStatusRequesting: "Определяем местоположение…",
        mapStatusReady: "Готово",
        mapStatusEnable: "Нажмите 📍, чтобы включить карту.",
        mapStatusDenied: "Доступ к геопозиции запрещён. Нажмите 📍 и попробуйте снова.",
        mapStatusFailed: "Не удалось определить геопозицию. Нажмите 📍 и попробуйте снова."
      },
      bookmarks: {
        title: "Закладки",
        search: "Поиск закладок...",
        name: "Название",
        url: "https://example.com",
        addGroup: "Добавить группу",
        newGroupName: "Новаягруппа",
        chooseIcon: "Выбрать иконку"
      },
      background: {
        title: "Настройки фона",
        upload: "Загрузить с компьютера",
        uploadPhoto: "Загрузить фото",
        uploadVideo: "Загрузить видео",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Применить",
        reset: "Сбросить по умолчанию",
        chooseArea: "Выберите видимую область",
        blur: "Размытие",
        center: "Центр",
        cancel: "Отмена",
        videoSoundOn: "Звук: Вкл",
        videoSoundOff: "Звук: Выкл"
      },
      tutorial: {
        title: "Добро пожаловать в новую вкладку!",
        subtitle: "Посмотрите краткую инструкцию для начала работы",
        gotIt: "Понятно, начнём!"
      },
      review: {
        title: "Оцените обновление",
        question: "Нравится наше обновление?",
        yes: "Да",
        no: "Нет"
      }
    },
    uk: {
      customize: {
        title: "Налаштування",
        subtitle: "Перетягніть віджет, щоб сховати його. Перетягніть з \"Приховані\" назад на екран, щоб відновити.",
        done: "Готово",
        widgetsButton: "Віджети",
        onScreen: "На екрані",
        hidden: "Приховані",
        dropToHide: "Перетягніть сюди, щоб сховати віджет",
        resetLayout: "Скинути розташування",
        addPhotos: "+ Фото",
        sidebarDynamic: "Сайдбар: динамічний",
        sidebarStatic: "Сайдбар: статичний",
        actionsButton: "Дії",
        themeButton: "Тема",
        wallpapers: "Шпалери",
        videoThemes: "Відео теми"
      },
      widgets: {
        search: "Пошук",
        searchPlaceholder: "Введіть запит або URL",
        welcome: "Ласкаво просимо,",
        namePlaceholder: "Введіть ваше ім'я",
        todo: "Завдання",
        todoPlaceholder: "Додати завдання...",
        weather: "Погода",
        enableLocation: "Натисніть \"Увімкнути геолокацію\", щоб показати місцеву погоду.",
        cityPlaceholder: "Введіть місто",
        cityApply: "Застосувати",
        cityLoading: "Завантаження погоди...",
        citySearching: "Пошук міста...",
        cityNotFound: "Місто не знайдено.",
        cityFailed: "Не вдалося завантажити місто.",
        notes: "Нотатки",
        noteLastEdit: "Остання зміна:",
        noteSaved: "Збережено:",
        addNote: "Додати нотатку",
        noteTitle: "Заголовок нотатки",
        noteText: "Напишіть щось...",
        save: "Зберегти",
        delete: "Видалити",
        close: "Закрити",
        map: "Карта",
        favorites: "Обране",
        date: "Дата",
        clock: "Годинник",
        bookmarks: "Закладки",
        photos: "Фото",
        addPhotos: "Додати фото",
        clearPhotos: "Очистити всі фото"
      },
      bookmarks: {
        title: "Закладки",
        search: "Пошук закладок...",
        name: "Назва",
        url: "https://example.com",
        addGroup: "Додати групу",
        newGroupName: "Новагрупа",
        chooseIcon: "Вибрати іконку"
      },
      background: {
        title: "Налаштування фону",
        upload: "Завантажити з комп'ютера",
        uploadPhoto: "Завантажити фото",
        uploadVideo: "Завантажити відео",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Застосувати",
        reset: "Скинути за замовчуванням",
        chooseArea: "Виберіть видиму область",
        blur: "Розмиття",
        center: "Центр",
        cancel: "Скасувати",
        videoSoundOn: "Звук: Увімк.",
        videoSoundOff: "Звук: Вимк."
      },
      tutorial: {
        title: "Ласкаво просимо до нової вкладки!",
        subtitle: "Перегляньте короткий посібник для початку роботи",
        gotIt: "Зрозуміло, почнімо!"
      },
      review: {
        title: "Оцінка оновлення",
        question: "Вам подобається наше оновлення?",
        yes: "Так",
        no: "Ні"
      }
    },
    de: {
      customize: {
        title: "Anpassen",
        subtitle: "Ziehen Sie ein Widget, um es zu verstecken. Ziehen Sie es von \"Versteckt\" zurück auf den Bildschirm, um es wiederherzustellen.",
        done: "Fertig",
        widgetsButton: "Widgets",
        onScreen: "Auf dem Bildschirm",
        hidden: "Versteckt",
        dropToHide: "Hier ablegen, um Widget zu verstecken",
        resetLayout: "Layout zurücksetzen",
        addPhotos: "+ Fotos",
        sidebarDynamic: "Sidebar: Dynamisch",
        sidebarStatic: "Sidebar: Statisch",
        actionsButton: "Aktionen",
        themeButton: "Design",
        wallpapers: "Hintergründe",
        videoThemes: "Video-Themen"
      },
      widgets: {
        search: "Suche",
        searchPlaceholder: "Suchen oder URL eingeben",
        welcome: "Willkommen,",
        namePlaceholder: "Geben Sie Ihren Namen ein",
        todo: "Aufgaben",
        todoPlaceholder: "Aufgabe hinzufügen...",
        weather: "Wetter",
        enableLocation: "Klicken Sie auf \"Standort aktivieren\", um das lokale Wetter anzuzeigen.",
        cityPlaceholder: "Stadt eingeben",
        cityApply: "Anwenden",
        cityLoading: "Wetter wird geladen...",
        citySearching: "Stadt wird gesucht...",
        cityNotFound: "Stadt nicht gefunden.",
        cityFailed: "Stadt konnte nicht geladen werden.",
        notes: "Notizen",
        noteLastEdit: "Letzte Änderung:",
        noteSaved: "Gespeichert:",
        addNote: "Notiz hinzufügen",
        noteTitle: "Notiztitel",
        noteText: "Schreiben Sie etwas...",
        save: "Speichern",
        delete: "Löschen",
        close: "Schließen",
        map: "Karte",
        favorites: "Favoriten",
        date: "Datum",
        clock: "Uhr",
        bookmarks: "Lesezeichen",
        photos: "Fotos",
        addPhotos: "Fotos hinzufügen",
        clearPhotos: "Alle Fotos löschen"
      },
      bookmarks: {
        title: "Lesezeichen",
        search: "Lesezeichen suchen...",
        name: "Name",
        url: "https://example.com",
        addGroup: "Gruppe hinzufügen",
        newGroupName: "NeueGruppe",
        chooseIcon: "Symbol auswählen"
      },
      background: {
        title: "Hintergrundeinstellungen",
        upload: "Vom Computer hochladen",
        uploadPhoto: "Foto hochladen",
        uploadVideo: "Video hochladen",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Anwenden",
        reset: "Auf Standard zurücksetzen",
        chooseArea: "Sichtbaren Bereich wählen",
        blur: "Unschärfe",
        center: "Zentrieren",
        cancel: "Abbrechen",
        videoSoundOn: "Ton: An",
        videoSoundOff: "Ton: Aus"
      },
      tutorial: {
        title: "Willkommen auf Ihrer neuen Tab-Seite!",
        subtitle: "Schauen Sie sich diese kurze Anleitung an, um loszulegen",
        gotIt: "Verstanden, loslegen!"
      },
      review: {
        title: "Gefällt Ihnen das Update?",
        question: "Gefällt Ihnen unser Update?",
        yes: "Ja",
        no: "Nein"
      }
    },
    tr: {
      customize: {
        title: "Özelleştir",
        subtitle: "Bir widget'ı gizlemek için sürükleyin. Geri yüklemek için \"Gizli\" alanından ekrana sürükleyin.",
        done: "Tamam",
        widgetsButton: "Widget'lar",
        onScreen: "Ekranda",
        hidden: "Gizli",
        dropToHide: "Widget'ı gizlemek için buraya bırakın",
        resetLayout: "Düzeni sıfırla",
        addPhotos: "+ Fotoğraflar",
        sidebarDynamic: "Kenar çubuğu: Dinamik",
        sidebarStatic: "Kenar çubuğu: Sabit",
        actionsButton: "Eylemler",
        themeButton: "Tema",
        wallpapers: "Duvar kağıtları",
        videoThemes: "Video Temaları"
      },
      widgets: {
        search: "Ara",
        searchPlaceholder: "Arama yapın veya URL girin",
        welcome: "Hoş geldiniz,",
        namePlaceholder: "Adınızı girin",
        todo: "Yapılacaklar",
        todoPlaceholder: "Görev ekle...",
        weather: "Hava Durumu",
        enableLocation: "Yerel hava durumunu göstermek için \"Konumu etkinleştir\" düğmesine tıklayın.",
        cityPlaceholder: "Sehir girin",
        cityApply: "Uygula",
        cityLoading: "Hava durumu yukleniyor...",
        citySearching: "Sehir araniyor...",
        cityNotFound: "Sehir bulunamadi.",
        cityFailed: "Sehir yuklenemedi.",
        notes: "Notlar",
        noteLastEdit: "Son duzenleme:",
        noteSaved: "Kaydedildi:",
        addNote: "Not ekle",
        noteTitle: "Not başlığı",
        noteText: "Bir şeyler yazın...",
        save: "Kaydet",
        delete: "Sil",
        close: "Kapat",
        map: "Harita",
        favorites: "Favoriler",
        date: "Tarih",
        clock: "Saat",
        bookmarks: "Yer İmleri",
        photos: "Fotoğraflar",
        addPhotos: "Fotoğraf ekle",
        clearPhotos: "Tüm fotoğrafları temizle"
      },
      bookmarks: {
        title: "Yer İmleri",
        search: "Yer imlerinde ara...",
        name: "İsim",
        url: "https://example.com",
        addGroup: "Grup ekle",
        newGroupName: "Yenigrupadı",
        chooseIcon: "Simge seç"
      },
      background: {
        title: "Arka plan ayarları",
        upload: "Bilgisayardan yükle",
        uploadPhoto: "Fotograf yukle",
        uploadVideo: "Video yukle",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Uygula",
        reset: "Varsayılana sıfırla",
        chooseArea: "Görünür alanı seçin",
        blur: "Bulanıklık",
        center: "Ortala",
        cancel: "İptal",
        videoSoundOn: "Ses: Açık",
        videoSoundOff: "Ses: Kapalı"
      },
      tutorial: {
        title: "Yeni Sekmenize Hoş Geldiniz!",
        subtitle: "Başlamak için bu kısa öğreticiyi izleyin",
        gotIt: "Anladım, başlayalım!"
      },
      review: {
        title: "Güncelleme nasıl?",
        question: "Güncellememizi beğendiniz mi?",
        yes: "Evet",
        no: "Hayır"
      }
    },
    az: {
      customize: {
        title: "Fərdiləşdirmə",
        subtitle: "Vidceti gizlətmək üçün sürüşdürün. Bərpa etmək üçün \"Gizli\" bölməsindən ekrana sürüşdürün.",
        done: "Hazırdır",
        widgetsButton: "Vidcetlər",
        onScreen: "Ekranda",
        hidden: "Gizli",
        dropToHide: "Vidceti gizlətmək üçün buraya atın",
        resetLayout: "Düzülüşü sıfırla",
        addPhotos: "+ Fotolar",
        sidebarDynamic: "Yan panel: Dinamik",
        sidebarStatic: "Yan panel: Sabit",
        actionsButton: "Əməliyyatlar",
        themeButton: "Mövzu",
        wallpapers: "Divar kağızları",
        videoThemes: "Video mövzuları"
      },
      widgets: {
        search: "Axtarış",
        searchPlaceholder: "Axtarın və ya URL daxil edin",
        welcome: "Xoş gəldiniz,",
        namePlaceholder: "Adınızı daxil edin",
        todo: "Tapşırıqlar",
        todoPlaceholder: "Tapşırıq əlavə edin...",
        weather: "Hava",
        enableLocation: "Yerli hava məlumatını göstərmək üçün \"Yeri aktivləşdir\" düyməsinə basın.",
        cityPlaceholder: "Seher daxil edin",
        cityApply: "Tetbiq et",
        cityLoading: "Hava yuklenir...",
        citySearching: "Seher axtarilir...",
        cityNotFound: "Seher tapilmadi.",
        cityFailed: "Seher yuklenmedi.",
        notes: "Qeydlər",
        noteLastEdit: "Son duzelis:",
        noteSaved: "Yadda saxlandi:",
        addNote: "Qeyd əlavə et",
        noteTitle: "Qeyd başlığı",
        noteText: "Nəsə yazın...",
        save: "Yadda saxla",
        delete: "Sil",
        close: "Bağla",
        map: "Xəritə",
        favorites: "Sevimlilər",
        date: "Tarix",
        clock: "Saat",
        bookmarks: "Əlfəcinlər",
        photos: "Fotolar",
        addPhotos: "Foto əlavə et",
        clearPhotos: "Bütün fotoları təmizlə"
      },
      bookmarks: {
        title: "Əlfəcinlər",
        search: "Əlfəcinlərdə axtar...",
        name: "Ad",
        url: "https://example.com",
        addGroup: "Qrup əlavə et",
        newGroupName: "Yeniqrup",
        chooseIcon: "İkona seç"
      },
      background: {
        title: "Fon parametrləri",
        upload: "Kompüterdən yüklə",
        uploadPhoto: "Foto yukle",
        uploadVideo: "Video yukle",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Tətbiq et",
        reset: "Defolta sıfırla",
        chooseArea: "Görünən sahəni seçin",
        blur: "Bulanıqlıq",
        center: "Mərkəzləşdir",
        cancel: "Ləğv et",
        videoSoundOn: "Səs: Açıq",
        videoSoundOff: "Səs: Söndürülüb"
      },
      tutorial: {
        title: "Yeni Vərəqinizə Xoş Gəldiniz!",
        subtitle: "Başlamaq üçün bu qısa təlimatı izləyin",
        gotIt: "Başa düşdüm, başlayaq!"
      },
      review: {
        title: "Yeniləmə necədir?",
        question: "Yeniləməmizi bəyəndinizmi?",
        yes: "Bəli",
        no: "Xeyr"
      }
    },
    kk: {
      customize: {
        title: "Реттеу",
        subtitle: "Виджетті жасыру үшін сүйреңіз. Қалпына келтіру үшін \"Жасырын\" бөлімінен экранға сүйреңіз.",
        done: "Дайын",
        widgetsButton: "Виджеттер",
        onScreen: "Экранда",
        hidden: "Жасырын",
        dropToHide: "Виджетті жасыру үшін осы жерге апарыңыз",
        resetLayout: "Орналасуды қалпына келтіру",
        addPhotos: "+ Фотосуреттер",
        sidebarDynamic: "Бүйір панель: Динамикалық",
        sidebarStatic: "Бүйір панель: Тұрақты",
        actionsButton: "Әрекеттер",
        themeButton: "Тақырып",
        wallpapers: "Тұсқағаздар",
        videoThemes: "Бейне тақырыптар"
      },
      widgets: {
        search: "Іздеу",
        searchPlaceholder: "Іздеу немесе URL енгізіңіз",
        welcome: "Қош келдіңіз,",
        namePlaceholder: "Атыңызды енгізіңіз",
        todo: "Тапсырмалар",
        todoPlaceholder: "Тапсырма қосу...",
        weather: "Ауа райы",
        enableLocation: "Жергілікті ауа райын көрсету үшін \"Орынды қосу\" түймесін басыңыз.",
        cityPlaceholder: "Кала енгізіңіз",
        cityApply: "Kolдану",
        cityLoading: "Ауа райы жүктелуде...",
        citySearching: "Кала ізделуде...",
        cityNotFound: "Кала табылмады.",
        cityFailed: "Кала жүктелмеді.",
        notes: "Жазбалар",
        noteLastEdit: "Соңғы өзгеріс:",
        noteSaved: "Сақталды:",
        addNote: "Жазба қосу",
        noteTitle: "Жазба тақырыбы",
        noteText: "Бір нәрсе жазыңыз...",
        save: "Сақтау",
        delete: "Жою",
        close: "Жабу",
        map: "Карта",
        favorites: "Таңдаулылар",
        date: "Күн",
        clock: "Сағат",
        bookmarks: "Бетбелгілер",
        photos: "Фотосуреттер",
        addPhotos: "Фото қосу",
        clearPhotos: "Барлық фотосуреттерді тазалау"
      },
      bookmarks: {
        title: "Бетбелгілер",
        search: "Бетбелгілерден іздеу...",
        name: "Атауы",
        url: "https://example.com",
        addGroup: "Топ қосу",
        newGroupName: "Жаңатоп",
        chooseIcon: "Белгіше таңдау"
      },
      background: {
        title: "Фон параметрлері",
        upload: "Компьютерден жүктеу",
        uploadPhoto: "Фото жүктеу",
        uploadVideo: "Видео жүктеу",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Қолдану",
        reset: "Бастапқы күйге қайтару",
        chooseArea: "Көрінетін аймақты таңдаңыз",
        blur: "Бұлдырлау",
        center: "Ортасына",
        cancel: "Болдырмау",
        videoSoundOn: "Дыбыс: Қосу",
        videoSoundOff: "Дыбыс: Өшіру"
      },
      tutorial: {
        title: "Жаңа бетке қош келдіңіз!",
        subtitle: "Бастау үшін қысқаша нұсқаулықты көріңіз",
        gotIt: "Түсінікті, бастайық!"
      },
      review: {
        title: "Жаңарту ұнай ма?",
        question: "Біздің жаңартуды ұнаттыңыз ба?",
        yes: "Иә",
        no: "Жоқ"
      }
    },
    uz: {
      customize: {
        title: "Sozlash",
        subtitle: "Vidjetni yashirish uchun sudrab boring. Qayta tiklash uchun \"Yashirin\" bo'limidan ekranga sudrab olib keling.",
        done: "Tayyor",
        widgetsButton: "Vidjetlar",
        onScreen: "Ekranda",
        hidden: "Yashirin",
        dropToHide: "Vidjetni yashirish uchun bu yerga tashlang",
        resetLayout: "Joylashuvni qayta tiklash",
        addPhotos: "+ Rasmlar",
        sidebarDynamic: "Yon panel: Dinamik",
        sidebarStatic: "Yon panel: Statik",
        actionsButton: "Amallar",
        themeButton: "Mavzu",
        wallpapers: "Fon rasmlari",
        videoThemes: "Video mavzulari"
      },
      widgets: {
        search: "Qidiruv",
        searchPlaceholder: "Qidiring yoki URL kiriting",
        welcome: "Xush kelibsiz,",
        namePlaceholder: "Ismingizni kiriting",
        todo: "Vazifalar",
        todoPlaceholder: "Vazifa qo'shish...",
        weather: "Ob-havo",
        enableLocation: "Mahalliy ob-havo ma'lumotini ko'rsatish uchun \"Joylashuvni yoqish\" tugmasini bosing.",
        cityPlaceholder: "Shahar kiriting",
        cityApply: "Qollash",
        cityLoading: "Ob-havo yuklanmoqda...",
        citySearching: "Shahar qidirilmoqda...",
        cityNotFound: "Shahar topilmadi.",
        cityFailed: "Shahar yuklanmadi.",
        notes: "Eslatmalar",
        noteLastEdit: "Oxirgi o'zgartirish:",
        noteSaved: "Saqlangan:",
        addNote: "Eslatma qo'shish",
        noteTitle: "Eslatma sarlavhasi",
        noteText: "Nimadir yozing...",
        save: "Saqlash",
        delete: "O'chirish",
        close: "Yopish",
        map: "Xarita",
        favorites: "Sevimlilar",
        date: "Sana",
        clock: "Soat",
        bookmarks: "Xatcho'plar",
        photos: "Rasmlar",
        addPhotos: "Rasm qo'shish",
        clearPhotos: "Barcha rasmlarni tozalash"
      },
      bookmarks: {
        title: "Xatcho'plar",
        search: "Xatcho'plardan qidirish...",
        name: "Nomi",
        url: "https://example.com",
        addGroup: "Guruh qo'shish",
        newGroupName: "Yangiguruh",
        chooseIcon: "Belgini tanlash"
      },
      background: {
        title: "Fon sozlamalari",
        upload: "Kompyuterdan yuklash",
        uploadPhoto: "Foto yuklash",
        uploadVideo: "Video yuklash",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Qo'llash",
        reset: "Standart holatga qaytarish",
        chooseArea: "Ko'rinadigan joyni tanlang",
        blur: "Xira qilish",
        center: "Markazlashtirish",
        cancel: "Bekor qilish",
        videoSoundOn: "Ovoz: Yoqilgan",
        videoSoundOff: "Ovoz: O'chiq"
      },
      tutorial: {
        title: "Yangi varaqingizga xush kelibsiz!",
        subtitle: "Boshlash uchun qisqa yo'riqnomani ko'ring",
        gotIt: "Tushunarli, boshlaymiz!"
      },
      review: {
        title: "Yangilanish yoqdimi?",
        question: "Yangilanishimiz sizga yoqdimi?",
        yes: "Ha",
        no: "Yo'q"
      }
    },
    es: {
      customize: {
        title: "Personalizar",
        subtitle: "Arrastra un widget para ocultarlo. Arrástralo desde \"Ocultos\" de vuelta a la pantalla para restaurarlo.",
        done: "Listo",
        widgetsButton: "Widgets",
        onScreen: "En pantalla",
        hidden: "Ocultos",
        dropToHide: "Suelta aquí para ocultar el widget",
        resetLayout: "Restablecer diseño",
        addPhotos: "+ Fotos",
        sidebarDynamic: "Barra lateral: Dinámica",
        sidebarStatic: "Barra lateral: Estática",
        actionsButton: "Acciones",
        themeButton: "Tema",
        wallpapers: "Fondos",
        videoThemes: "Temas de video"
      },
      widgets: {
        search: "Buscar",
        searchPlaceholder: "Buscar o escribir una URL",
        welcome: "Bienvenido,",
        namePlaceholder: "Introduce tu nombre",
        todo: "Tareas",
        todoPlaceholder: "Agregar tarea...",
        weather: "Clima",
        enableLocation: "Haz clic en \"Activar ubicación\" para mostrar el clima local.",
        cityPlaceholder: "Introduce la ciudad",
        cityApply: "Aplicar",
        cityLoading: "Cargando el clima...",
        citySearching: "Buscando ciudad...",
        cityNotFound: "Ciudad no encontrada.",
        cityFailed: "No se puede cargar esta ciudad.",
        notes: "Notas",
        noteLastEdit: "Ultima edicion:",
        noteSaved: "Guardado:",
        addNote: "Agregar nota",
        noteTitle: "Título de la nota",
        noteText: "Escribe algo...",
        save: "Guardar",
        delete: "Eliminar",
        close: "Cerrar",
        map: "Mapa",
        favorites: "Favoritos",
        date: "Fecha",
        clock: "Reloj",
        bookmarks: "Marcadores",
        photos: "Fotos",
        addPhotos: "Agregar fotos",
        clearPhotos: "Borrar todas las fotos"
      },
      bookmarks: {
        title: "Marcadores",
        search: "Buscar en marcadores...",
        name: "Nombre",
        url: "https://example.com",
        addGroup: "Agregar grupo",
        newGroupName: "Nuevogrupo",
        chooseIcon: "Elegir icono"
      },
      background: {
        title: "Ajustes de fondo",
        upload: "Subir desde el ordenador",
        uploadPhoto: "Subir foto",
        uploadVideo: "Subir video",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Aplicar",
        reset: "Restablecer por defecto",
        chooseArea: "Elegir área visible",
        blur: "Desenfoque",
        center: "Centrar",
        cancel: "Cancelar",
        videoSoundOn: "Sonido: Activado",
        videoSoundOff: "Sonido: Desactivado"
      },
      tutorial: {
        title: "¡Bienvenido a tu nueva pestaña!",
        subtitle: "Mira este tutorial rápido para empezar",
        gotIt: "Entendido, empecemos!"
      },
      review: {
        title: "¿Te gusta la actualización?",
        question: "¿Te gusta nuestra extensión?",
        yes: "Sí",
        no: "No"
      }
    },
    fr: {
      customize: {
        title: "Personnaliser",
        subtitle: "Faites glisser un widget pour le masquer. Faites-le glisser de \"Masqué\" vers l'écran pour le restaurer.",
        done: "Terminé",
        widgetsButton: "Widgets",
        onScreen: "À l'écran",
        hidden: "Masqué",
        dropToHide: "Déposez ici pour masquer le widget",
        resetLayout: "Réinitialiser la disposition",
        addPhotos: "+ Photos",
        sidebarDynamic: "Barre latérale : Dynamique",
        sidebarStatic: "Barre latérale : Statique",
        actionsButton: "Actions",
        themeButton: "Thème",
        wallpapers: "Fonds d’écran",
        videoThemes: "Thèmes vidéo",
      },
      widgets: {
        search: "Recherche",
        searchPlaceholder: "Rechercher ou saisir une URL",
        welcome: "Bienvenue,",
        namePlaceholder: "Entrez votre nom",
        todo: "Tâches",
        todoPlaceholder: "Ajouter une tâche...",
        weather: "Météo",
        enableLocation: "Cliquez sur \"Activer la localisation\" pour afficher la météo locale.",
        cityPlaceholder: "Entrez la ville",
        cityApply: "Appliquer",
        cityLoading: "Chargement de la météo...",
        citySearching: "Recherche de la ville...",
        cityNotFound: "Ville introuvable.",
        cityFailed: "Impossible de charger cette ville.",
        notes: "Notes",
        noteLastEdit: "Derniere modification :",
        noteSaved: "Enregistre :",
        addNote: "Ajouter une note",
        noteTitle: "Titre de la note",
        noteText: "Écrivez quelque chose...",
        save: "Enregistrer",
        delete: "Supprimer",
        close: "Fermer",
        map: "Carte",
        favorites: "Favoris",
        date: "Date",
        clock: "Horloge",
        bookmarks: "Marque-pages",
        photos: "Photos",
        addPhotos: "Ajouter des photos",
        clearPhotos: "Effacer toutes les photos"
      },
      bookmarks: {
        title: "Marque-pages",
        search: "Rechercher dans les marque-pages...",
        name: "Nom",
        url: "https://example.com",
        addGroup: "Ajouter un groupe",
        newGroupName: "Nouveaugroupe",
        chooseIcon: "Choisir l'icône"
      },
      background: {
        title: "Paramètres d'arrière-plan",
        upload: "Télécharger depuis l'ordinateur",
        uploadPhoto: "Télécharger une photo",
        uploadVideo: "Télécharger une vidéo",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Appliquer",
        reset: "Réinitialiser par défaut",
        chooseArea: "Choisir la zone visible",
        blur: "Flou",
        center: "Centrer",
        cancel: "Annuler",
        videoSoundOn: "Son : Activé",
        videoSoundOff: "Son : Désactivé"
      },
      tutorial: {
        title: "Bienvenue sur votre nouvel onglet !",
        subtitle: "Regardez ce rapide tutoriel pour commencer",
        gotIt: "Compris, commençons !"
      },
      review: {
        title: "Vous aimez la mise à jour ?",
        question: "Vous aimez notre mise à jour ?",
        yes: "Oui",
        no: "Non"
      }
    },
    pt: {
      customize: {
        title: "Personalizar",
        subtitle: "Arraste um widget para ocultá-lo. Arraste de \"Oculto\" de volta para a tela para restaurá-lo.",
        done: "Pronto",
        widgetsButton: "Widgets",
        onScreen: "Na tela",
        hidden: "Oculto",
        dropToHide: "Solte aqui para ocultar o widget",
        resetLayout: "Redefinir layout",
        addPhotos: "+ Fotos",
        sidebarDynamic: "Barra lateral: Dinâmica",
        sidebarStatic: "Barra lateral: Estática",
        actionsButton: "Ações",
        themeButton: "Tema",
        wallpapers: "Papéis de parede",
        videoThemes: "Temas de vídeo"
      },
      widgets: {
        search: "Pesquisa",
        searchPlaceholder: "Pesquise ou digite uma URL",
        welcome: "Bem-vindo,",
        namePlaceholder: "Digite seu apelido",
        todo: "Tarefas",
        todoPlaceholder: "Adicionar tarefa...",
        weather: "Tempo",
        enableLocation: "Clique em \"Ativar localização\" para mostrar o tempo local.",
        cityPlaceholder: "Digite a cidade",
        cityApply: "Aplicar",
        cityLoading: "Carregando o tempo...",
        citySearching: "Procurando cidade...",
        cityNotFound: "Cidade não encontrada.",
        cityFailed: "Não é possível carregar esta cidade.",
        notes: "Notas",
        noteLastEdit: "Última edição:",
        noteSaved: "Salvo:",
        addNote: "Adicionar nota",
        noteTitle: "Título da nota",
        noteText: "Escreva algo...",
        save: "Salvar",
        delete: "Deletar",
        close: "Fechar",
        map: "Mapa",
        favorites: "Favoritos",
        date: "Data",
        clock: "Relógio",
        bookmarks: "Marcadores",
        photos: "Fotos",
        addPhotos: "Adicionar fotos",
        clearPhotos: "Limpar todas as fotos"
      },
      bookmarks: {
        title: "Marcadores",
        search: "Pesquisar marcadores...",
        name: "Nome",
        url: "https://example.com",
        addGroup: "Adicionar grupo",
        newGroupName: "Novogrupo",
        chooseIcon: "Escolher ícone"
      },
      background: {
        title: "Configurações de fundo",
        upload: "Fazer upload do computador",
        uploadPhoto: "Carregar foto",
        uploadVideo: "Carregar vídeo",
        urlPlaceholder: "https://... (jpg/png/mp4)",
        apply: "Aplicar",
        reset: "Redefinir para padrão",
        chooseArea: "Escolher área visível",
        blur: "Desfoque",
        center: "Centro",
        cancel: "Cancelar",
        videoSoundOn: "Som: Ativado",
        videoSoundOff: "Som: Desativado"
      },
      tutorial: {
        title: "Bem-vindo à sua nova aba!",
        subtitle: "Assista a este tutorial rápido para começar",
        gotIt: "Entendi, vamos começar!"
      },
      review: {
        title: "Gostando da atualização?",
        question: "Você gosta da nossa atualização?",
        yes: "Sim",
        no: "Não"
      }
    }
  };

  const LANGUAGE_KEY = "app.language";
  const hasChromeStorage = !!chrome?.storage?.local;
  let currentLanguage = "en";
  const SIDEBAR_MODE_KEY = "sidebar.mode";
  const SIDEBAR_MODE_STATIC = "static";
  const SIDEBAR_MODE_DYNAMIC = "dynamic";

  function normalizeLanguage(lang) {
    return translations[lang] ? lang : "en";
  }

  async function loadSavedLanguage() {
    const localLang = localStorage.getItem(LANGUAGE_KEY);

    if (!hasChromeStorage) {
      return normalizeLanguage(localLang || "en");
    }

    return new Promise((resolve) => {
      chrome.storage.local.get([LANGUAGE_KEY], (res) => {
        const storedLang = typeof res?.[LANGUAGE_KEY] === "string"
          ? res[LANGUAGE_KEY]
          : null;

        const resolved = normalizeLanguage(storedLang || localLang || "en");

        if (!storedLang && localLang) {
          chrome.storage.local.set({ [LANGUAGE_KEY]: resolved }, () => resolve(resolved));
          return;
        }

        resolve(resolved);
      });
    });
  }

  function persistLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);

    if (hasChromeStorage) {
      chrome.storage.local.set({ [LANGUAGE_KEY]: lang }, () => {});
    }
  }

  function t(key, fallback) {
    const lang = translations[currentLanguage] || translations.en;
    const keys = String(key || "").split(".");
    let value = lang;
    for (const k of keys) value = value?.[k];
    return value || fallback || "";
  }

  function getLocale() {
    return currentLanguage || "en";
  }

  function getSidebarMode() {
    return localStorage.getItem(SIDEBAR_MODE_KEY) || SIDEBAR_MODE_DYNAMIC;
  }

  function updateSidebarModeButton() {
    const btn = $("sidebarModeToggle");
    if (!btn) return;
    const mode = getSidebarMode();
    const key = mode === SIDEBAR_MODE_STATIC
      ? "customize.sidebarStatic"
      : "customize.sidebarDynamic";
    btn.setAttribute("data-i18n", key);
    btn.textContent = t(key, btn.textContent);
    btn.setAttribute("aria-pressed", mode === SIDEBAR_MODE_STATIC ? "true" : "false");
  }

  function applySidebarMode(mode) {
    const resolved = mode === SIDEBAR_MODE_STATIC
      ? SIDEBAR_MODE_STATIC
      : SIDEBAR_MODE_DYNAMIC;
    document.body.classList.toggle("sidebar-static", resolved === SIDEBAR_MODE_STATIC);
    localStorage.setItem(SIDEBAR_MODE_KEY, resolved);
    updateSidebarModeButton();
  }

  function applyTranslations() {
    const lang = translations[currentLanguage] || translations.en;
    
    // Apply translations to elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const keys = key.split(".");
      let value = lang;
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      if (value) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = value;
        } else if (el.hasAttribute("data-placeholder")) {
          el.setAttribute("data-placeholder", value);
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      const keys = String(key || "").split(".");
      let value = lang;

      for (const k of keys) {
        value = value?.[k];
      }

      if (value) {
        el.setAttribute("title", value);
      }
    });

    // Update language selector
    const langSelector = $("languageSelector");
    if (langSelector) {
      langSelector.value = currentLanguage;
    }

    updateSidebarModeButton();
    refreshMapStaticTexts();
  }

  function setLanguage(lang) {
    currentLanguage = normalizeLanguage(lang);
    persistLanguage(currentLanguage);
    applyTranslations();
    renderCustomizeList();
    renderThemeTab();
    refreshDateWidgetLocale();
    renderCalendar();
  }

  // Initialize language
  currentLanguage = await loadSavedLanguage();
  applyTranslations();
  applySidebarMode(getSidebarMode());

  // ======================
  // BOOKMARKS STORAGE (chrome.storage.local + fallback)
  // ======================
  document.getElementById("mapCard")?.setAttribute("hidden", "");

  function bmGet(keys) {
    return new Promise((resolve) => {
      if (hasChromeStorage) {
        chrome.storage.local.get(keys, (res) => resolve(res || {}));
      } else {
        const out = {};
        for (const k of keys) out[k] = lsGetJSON(k, null);
        resolve(out);
      }
    });
  }

  function bmSet(obj) {
    return new Promise((resolve) => {
      if (hasChromeStorage) {
        chrome.storage.local.set(obj, () => resolve());
      } else {
        for (const [k, v] of Object.entries(obj)) lsSetJSON(k, v);
        resolve();
      }
    });
  }

  // One-time migration from localStorage to chrome.storage.local (keep user data on update)
  async function migrateLocalToChrome(keys) {
    if (!hasChromeStorage) return;
    return new Promise((resolve) => {
      chrome.storage.local.get(keys, (res) => {
        const toSet = {};
        for (const key of keys) {
          if (res && res[key] !== undefined) continue;
          const raw = localStorage.getItem(key);
          if (raw == null) continue;
          try { toSet[key] = JSON.parse(raw); }
          catch { toSet[key] = raw; }
        }
        if (Object.keys(toSet).length === 0) return resolve();
        chrome.storage.local.set(toSet, () => resolve());
      });
    });
  }

  migrateLocalToChrome([
    "layout.config.v1",
    "widget.sizes.v1",
    "bookmarks",
    "groups",
    "bm.lastGroup",
    "bm.favorites.v1",
    "bm.favorites.size"
  ]);

  

  

/* ===============================
   GEO (gated by button click) — stable version
   Uses:
   Weather: #weatherCity #weatherSub #weatherEmoji #weatherTemp #btnEnableWeatherGeo
   Map: #mapStatus #mapCoords #mapIframe #mapOpen #btnEnableMapGeo #mapRefresh
================================ */

const GEO_STORE_KEY = "geo.lastCoords.v2";
const WEATHER_MANUAL_KEY = "weather.manual.v1";

function weatherManualGet() {
  try {
    const raw = localStorage.getItem(WEATHER_MANUAL_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function weatherManualSet(data) {
  localStorage.setItem(WEATHER_MANUAL_KEY, JSON.stringify(data || {}));
}

function weatherManualClear() {
  localStorage.removeItem(WEATHER_MANUAL_KEY);
}

function geoStoreGet() {
  return new Promise((resolve) => {
    if (chrome?.storage?.local) {
      chrome.storage.local.get([GEO_STORE_KEY], (r) => resolve(r?.[GEO_STORE_KEY] || null));
    } else {
      try { resolve(JSON.parse(localStorage.getItem(GEO_STORE_KEY) || "null")); }
      catch { resolve(null); }
    }
  });
}
function geoStoreSet(coords) {
  return new Promise((resolve) => {
    if (chrome?.storage?.local) {
      chrome.storage.local.set({ [GEO_STORE_KEY]: coords }, () => resolve());
    } else {
      localStorage.setItem(GEO_STORE_KEY, JSON.stringify(coords));
      resolve();
    }
  });
}

function geoRequestOnce({ timeoutMs = 9000 } = {}) {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) return reject(new Error("GEO_UNSUPPORTED"));
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        ts: Date.now()
      }),
      (err) => reject(err || new Error("GEO_ERROR")),
      { enableHighAccuracy: false, maximumAge: 10 * 60 * 1000, timeout: timeoutMs }
    );
  });
}

function weatherEmoji(code) {
  if (code === 0) return "☀️";
  if (code === 1) return "🌤️";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if ([51, 53, 55, 80, 81, 82].includes(code)) return "🌦️";
  if ([56, 57, 61, 63, 65].includes(code)) return "🌧️";
  if ([66, 67].includes(code)) return "🌧️❄️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
}

function weatherSetUI({ city, code, temp, wind, subText }) {
  const cityEl = document.getElementById("weatherCity");
  const subEl  = document.getElementById("weatherSub");
  const emoEl  = document.getElementById("weatherEmoji");
  const tmpEl  = document.getElementById("weatherTemp");
  const weatherWidget = document.getElementById("weather");

  if (cityEl) cityEl.textContent = city || "Your location";

  if (subEl) {
    if (subText != null) subEl.textContent = subText;
    else subEl.textContent = `${weatherCodeToText(code)} • Wind ${Math.round(wind)} km/h`;
  }

  if (emoEl && code != null) emoEl.textContent = weatherEmoji(code);
  if (tmpEl && temp != null) {
    // Store the original celsius temperature in data attribute
    if (weatherWidget) weatherWidget.dataset.tempC = temp;
    
    const unit = localStorage.getItem('weather.unit') || 'C';
    const displayTemp = unit === 'F' ? Math.round((temp * 9/5) + 32) : Math.round(temp);
    tmpEl.textContent = `${displayTemp}°${unit}`;
  }
}

async function fetchOpenMeteo(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${encodeURIComponent(lat)}` +
    `&longitude=${encodeURIComponent(lon)}` +
    `&current=temperature_2m,weather_code,wind_speed_10m` +
    `&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("OPEN_METEO_FAILED");
  const j = await res.json();
  const cur = j.current || {};
  return {
    temp: cur.temperature_2m,
    wind: cur.wind_speed_10m,
    code: cur.weather_code
  };
}

async function geocodeCity(query) {
  const url =
    `https://nominatim.openstreetmap.org/search?format=jsonv2` +
    `&q=${encodeURIComponent(query)}` +
    `&limit=1` +
    `&accept-language=en`;

  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error("GEOCODE_FAILED");
  const list = await res.json();
  const first = Array.isArray(list) ? list[0] : null;
  if (!first) return null;
  const nameRaw = first.name || first.display_name || "";
  const name = String(nameRaw).split(",")[0].trim() || nameRaw;
  return {
    city: name,
    lat: Number(first.lat),
    lon: Number(first.lon)
  };
}

async function applyManualWeather({ city, lat, lon }) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
  weatherSetUI({ city: city || "—", code: null, temp: null, wind: 0, subText: t("widgets.cityLoading", "Loading weather...") });
  const wx = await fetchOpenMeteo(lat, lon);
  weatherSetUI({ city: city || "—", code: wx.code, temp: wx.temp, wind: wx.wind });
}

// город через Nominatim (нужен host_permissions!)
async function reverseCity(lat, lon) {
  const url =
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2` +
    `&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}` +
    `&accept-language=en`;

  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error("REVERSE_FAILED");
  const j = await res.json();
  const a = j.address || {};
  return a.city || a.town || a.village || a.state || a.county || "";
}

function loadMapByCoords(lat, lon) {
  const iframe = document.getElementById("mapIframe");
  const coordsEl = document.getElementById("mapCoords");
  const openA = document.getElementById("mapOpen");
  const statusEl = document.getElementById("mapStatus");
  

  // bbox around point
  const dLat = 0.05, dLon = 0.08;
  const minLat = lat - dLat, maxLat = lat + dLat;
  const minLon = lon - dLon, maxLon = lon + dLon;

  const bbox = `${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}`;
  const marker = `${lat}%2C${lon}`;

  iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
  if (openA) openA.href = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`;
  if (coordsEl) coordsEl.textContent = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
  if (statusEl) {
    statusEl.setAttribute("data-i18n", "widgets.mapStatusReady");
    statusEl.textContent = t("widgets.mapStatusReady", "Ready");
  }
}

function setMapStatus(key, fallback) {
  const mapStatus = document.getElementById("mapStatus");
  if (!mapStatus) return;
  mapStatus.setAttribute("data-i18n", key);
  mapStatus.textContent = t(key, fallback);
}

function refreshMapStaticTexts() {
  const mapOpen = document.getElementById("mapOpen");
  if (mapOpen) {
    mapOpen.setAttribute("data-i18n", "widgets.mapOpen");
    mapOpen.textContent = t("widgets.mapOpen", "Open");
  }

  const btnEnableMapGeo = document.getElementById("btnEnableMapGeo");
  if (btnEnableMapGeo) {
    btnEnableMapGeo.setAttribute("data-i18n-title", "widgets.useMyLocation");
    btnEnableMapGeo.setAttribute("title", t("widgets.useMyLocation", "Use my location"));
  }
}

function showGeoButtons(show) {
  const wBtn = document.getElementById("btnEnableWeatherGeo");
  const mBtn = document.getElementById("btnEnableMapGeo");
  if (wBtn) wBtn.hidden = false;
  if (mBtn) mBtn.hidden = !show;
}

function setWeatherGeoVisible(show) {
  const wBtn = document.getElementById("btnEnableWeatherGeo");
  if (wBtn) wBtn.hidden = false;
}

async function enableGeoFlow() {
  // статус пишем в SUB строку погоды (не перетираем весь виджет!)
  weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: "Requesting location…" });
  setMapStatus("widgets.mapStatusRequesting", "Requesting location…");

  try {
    const coords = await geoRequestOnce({ timeoutMs: 9000 });
    await geoStoreSet(coords);
    showGeoButtons(true);

    // weather
    weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: "Loading weather…" });

    const [wx, city] = await Promise.all([
      fetchOpenMeteo(coords.lat, coords.lon),
      reverseCity(coords.lat, coords.lon).catch(() => "")
    ]);

    weatherSetUI({
      city: city || "Your location",
      code: wx.code,
      temp: wx.temp,
      wind: wx.wind
    });

    // map
    loadMapByCoords(coords.lat, coords.lon);
  } catch (e) {
    showGeoButtons(true);
    const denied = (e && e.code === 1); // PERMISSION_DENIED
    const key = denied ? "widgets.mapStatusDenied" : "widgets.mapStatusFailed";
    const msg = denied
      ? t("widgets.mapStatusDenied", "Location denied. Tap 📍 to try again.")
      : t("widgets.mapStatusFailed", "Can't get location. Tap 📍 to try again.");
    weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: msg });
    setMapStatus(key, msg);
  }
}

async function initGeoWidgetsGated() {
  // 1) повесим клики на кнопки
  const btnW = document.getElementById("btnEnableWeatherGeo");
  const btnM = document.getElementById("btnEnableMapGeo");
  const btnR = document.getElementById("mapRefresh");
  const cityInput = document.getElementById("weatherCityInput");
  const cityApply = document.getElementById("weatherCityApply");
  const weatherCard = document.getElementById("weather");

  function setWeatherManualSelected(hasManualCity) {
    weatherCard?.classList.toggle("weather-manual-selected", !!hasManualCity);
  }

  function updateCityApplyVisibility() {
    if (!cityApply) return;
    cityApply.hidden = false;
    cityApply.style.display = "";
  }

  const manual = weatherManualGet();
  if (manual?.lat != null && manual?.lon != null) {
    try {
      await applyManualWeather(manual);
      if (cityInput && !cityInput.value) cityInput.value = manual.city || "";
      setWeatherManualSelected(true);
      setWeatherGeoVisible(false);
    } catch {
      setWeatherManualSelected(false);
      weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: t("widgets.cityFailed", "Can't load this city.") });
    }
  } else {
    setWeatherManualSelected(false);
  }
  updateCityApplyVisibility();

  const handleGeoClick = () => {
    weatherManualClear();
    setWeatherManualSelected(false);
    updateCityApplyVisibility();
    setWeatherGeoVisible(true);
    enableGeoFlow();
  };

  btnW?.addEventListener("click", handleGeoClick);
  btnM?.addEventListener("click", handleGeoClick);

  async function applyCityQuery(query) {
    const q = String(query || "").trim();
    if (!q) return;
    weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: t("widgets.citySearching", "Searching city...") });
    try {
      const found = await geocodeCity(q);
      if (!found) {
        weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: t("widgets.cityNotFound", "City not found.") });
        return;
      }
      await applyManualWeather(found);
      weatherManualSet(found);
      if (cityInput) cityInput.value = found.city || q;
      setWeatherManualSelected(true);
      updateCityApplyVisibility();
      setWeatherGeoVisible(false);
    } catch {
      weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: t("widgets.cityFailed", "Can't load this city.") });
    }
  }

  cityApply?.addEventListener("click", () => applyCityQuery(cityInput?.value));
  cityInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") applyCityQuery(cityInput.value);
  });
  cityInput?.addEventListener("input", () => updateCityApplyVisibility());

  // refresh: если есть coords — перезагрузить, если нет — попросить
  btnR?.addEventListener("click", async () => {
    const saved = await geoStoreGet();
    if (saved?.lat && saved?.lon) {
      // просто перерисуем карту + обновим погоду
      try {
        const [wx, city] = await Promise.all([
          fetchOpenMeteo(saved.lat, saved.lon),
          reverseCity(saved.lat, saved.lon).catch(() => "")
        ]);
        weatherSetUI({ city: city || "Your location", code: wx.code, temp: wx.temp, wind: wx.wind });
      } catch {}
      loadMapByCoords(saved.lat, saved.lon);
    } else {
      enableGeoFlow();
    }
  });

  // 2) если already saved — грузим без запроса разрешения
  const saved = await geoStoreGet();
  if (saved?.lat && saved?.lon) {
    showGeoButtons(!(manual?.lat != null && manual?.lon != null));
    try {
      if (!manual?.lat || !manual?.lon) {
        const [wx, city] = await Promise.all([
          fetchOpenMeteo(saved.lat, saved.lon),
          reverseCity(saved.lat, saved.lon).catch(() => "")
        ]);
        weatherSetUI({ city: city || "Your location", code: wx.code, temp: wx.temp, wind: wx.wind });
      }
    } catch {
      // если API упало — покажем кнопку, но не просим гео сразу
      showGeoButtons(true);
      if (!manual?.lat || !manual?.lon) {
        weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: "Enter city or tap 📍 to use local weather." });
      }
    }
    loadMapByCoords(saved.lat, saved.lon);
    return;
  }

  if (manual?.lat != null && manual?.lon != null) {
    showGeoButtons(true);
    setMapStatus("widgets.mapStatusEnable", "Tap 📍 to enable your map.");
    return;
  }

  // 3) первый запуск — ничего не запрашиваем
  showGeoButtons(true);
  weatherSetUI({ city: "—", code: null, temp: null, wind: 0, subText: "Enter city or tap 📍 to use local weather." });
  setMapStatus("widgets.mapStatusEnable", "Tap 📍 to enable your map.");
}


  /* ======================
     THEME (light / dark)
  ====================== */
  const themeBtn = $("themeToggle");
  const layoutThemeToggleBtn = $("layoutThemeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  function toggleThemeMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }

  if (themeBtn) {
    themeBtn.onclick = toggleThemeMode;
  }

  if (layoutThemeToggleBtn) {
    layoutThemeToggleBtn.onclick = toggleThemeMode;
  }

  /* ======================
     BACKGROUND
  ====================== */
  async function fetchImageUrlAsDataUrl(url) {
  const res = await fetch(url, {
    method: "GET",
    // в расширении с host_permissions обычно читается нормально
    credentials: "omit",
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const blob = await res.blob();
  if (!blob.type.startsWith("image/")) throw new Error("Not an image");

  // Превращаем blob -> dataURL
  return await new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result || ""));
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

  function initBgPopover() {
    const btnChange = document.getElementById("changeBg");
    const pop = document.getElementById("bgPopover");
    const pickPhoto = document.getElementById("bgPickPhoto");
    const pickVideo = document.getElementById("bgPickVideo");
    const bgUpload = document.getElementById("bgUpload");
    bgUpload?.setAttribute("accept", "image/*,video/mp4,video/webm,video/ogg");

    const urlInput = document.getElementById("bgUrlInput");
    const urlApply = document.getElementById("bgUrlApply");
    const resetBtn = document.getElementById("bgResetDefault");

    if (!btnChange || !pop) return;

    function openPopoverNear(el) {
      const r = el.getBoundingClientRect();
      const left = Math.min(window.innerWidth - pop.offsetWidth - 12, r.right + 10);
      const top = Math.min(window.innerHeight - pop.offsetHeight - 12, r.top);

      pop.style.left = `${Math.max(12, left)}px`;
      pop.style.top = `${Math.max(12, top)}px`;
      pop.hidden = false;

      setTimeout(() => urlInput?.focus(), 0);
      
    }

    function closePopover() {
      pop.hidden = true;
    }

    btnChange.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!pop.hidden) { closePopover(); return; }
      openPopoverNear(btnChange);
    });

    document.addEventListener("click", (e) => {
      if (!pop.hidden && !pop.contains(e.target) && e.target !== btnChange) closePopover();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePopover();
    });

    function openBgPicker(accept) {
      if (!bgUpload) return;
      bgUpload.setAttribute("accept", accept);
      bgUpload.click();
    }

    pickPhoto?.addEventListener("click", () => openBgPicker("image/*"));
    pickVideo?.addEventListener("click", () => openBgPicker("video/mp4,video/webm,video/ogg"));

    

bgUpload?.addEventListener("change", async () => {
  const file = bgUpload.files?.[0];
  bgUpload.value = "";
  if (!file) return;

  
// VIDEO
if (file.type.startsWith("video/")) {
  const previewUrl = URL.createObjectURL(file);

  try {
    const dur = await getVideoDurationSeconds(file);
    if (dur > 25.0) {
      alert(`Video is ${dur.toFixed(1)}s. Please choose a video up to 25 seconds.`);
      return;
    }

    const r = await openBgFocusEditor({
      kind: "video",
      src: previewUrl,
      initialFocus: loadBgState()?.focus || null
    });

    if (!r) return; // cancel

    await idbPut(BG_VIDEO_KEY, file);
    saveBgState({ kind: "video", value: "idb:" + BG_VIDEO_KEY, focus: r.focus, rot: r.rot, blur: r.blur, sound: r.sound });

    await applySavedOrDefaultBackground();
    applyBgFocus(r.focus, r.rot);

    closePopover();
  } catch (e) {
    alert("Can't use this video. Try MP4/WebM and make sure it is not corrupted.");
  } finally {
    try { URL.revokeObjectURL(previewUrl); } catch {}
  }
  return;
}


  // IMAGE/GIF
const reader = new FileReader();
reader.onload = async () => {
  const dataUrl = String(reader.result || "");
  if (!dataUrl) return;

 const r = await openBgFocusEditor({ kind: "image", src: dataUrl, initialFocus: loadBgState()?.focus || null });
if (!r) return;
const finalSrc = r.src || url;

saveBgState({ kind: "image", value: finalSrc, focus: r.focus, rot: r.rot, blur: r.blur });
setImageBackground(finalSrc);
applyBgFocus(r.focus, r.rot);


  closePopover();
};
reader.readAsDataURL(file);

});

async function applyUrl(url) {
  url = (url || "").trim();
  if (!url) return;

  if (!/^https?:\/\//i.test(url)) {
    alert("URL must start with http:// or https://");
    return;
  }

  const isVideo = /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);

  // VIDEO
  if (isVideo) {
    const r = await openBgFocusEditor({ kind: "video", src: url, initialFocus: loadBgState()?.focus || null });
if (!r) return;

saveBgState({ kind: "video", value: url, focus: r.focus, rot: r.rot, blur: r.blur, sound: r.sound });
await setVideoBackgroundFromUrl(url);
applyBgFocus(r.focus, r.rot);

    closePopover();
    return;
  }

  // IMAGE
  const img = new Image();
  img.onload = async () => {
    const r = await openBgFocusEditor({ kind: "image", src: url, initialFocus: loadBgState()?.focus || null });
if (!r) return;

const finalSrc = r.src || url;

saveBgState({ kind: "image", value: finalSrc, focus: r.focus, rot: r.rot, blur: r.blur });
setImageBackground(finalSrc);
applyBgFocus(r.focus, r.rot);

    closePopover();
  };

  img.onerror = () => alert("Failed to load the image. Please use a direct image URL.");
  img.referrerPolicy = "no-referrer";
  img.src = url;
}


    urlApply?.addEventListener("click", () => void applyUrl(urlInput?.value));
    urlInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") applyUrl(urlInput.value);
    });

  resetBtn?.addEventListener("click", async () => {
  await resetBackgroundToDefault();
  closePopover();
});

  }

  function startClock() {
    const timeEl = document.getElementById("clockTime");
    const dateEl = document.getElementById("clockDate");
    const layoutClockFormatToggle = document.getElementById("layoutClockFormatToggle");
    const toggleBtn = document.querySelector(".clock-toggle");
    const clockCard = document.getElementById("clockCard");
    if (!timeEl || !dateEl) return;

    const TIME_FORMAT_KEY = "clock.timeformat";
    const CLOCK_MODE_KEY = "clock.mode";
    
    function getTimeFormat() {
      const stored = localStorage.getItem(TIME_FORMAT_KEY);
      // Default to AM/PM format for Bangladesh
      return stored === "24" ? "24" : "ampm";
    }
    function setTimeFormat(fmt) {
      localStorage.setItem(TIME_FORMAT_KEY, fmt === "ampm" ? "ampm" : "24");
    }
    
    function getClockMode() {
      return localStorage.getItem(CLOCK_MODE_KEY) || "digital";
    }
    function setClockMode(mode) {
      localStorage.setItem(CLOCK_MODE_KEY, mode);
    }

    // Обновление текста кнопки формата
    function updateFormatButton() {
      const txt = getTimeFormat() === "ampm" ? "12h" : "24h";
      if (layoutClockFormatToggle) layoutClockFormatToggle.textContent = txt;
    }

    function toggleClockTimeFormat(ev) {
      ev?.stopPropagation?.();
      setTimeFormat(getTimeFormat() === "ampm" ? "24" : "ampm");
      updateFormatButton();
      tick();
      syncWidgetPositionSize(clockCard);
      saveWidgetSizes();
    }
    
    // Инициализация аналоговых часов
    let analogClockInterval = null;
    function initAnalogClock() {
      const svg = document.getElementById('analogClockSvg');
      if (!svg) return;

      const ticksGroup = document.getElementById('analogTicks');
      // draw 60 ticks (longer for hours)
      if (ticksGroup && ticksGroup.children.length === 0) {
        for (let i = 0; i < 60; i++) {
          const angle = (i * 6) * Math.PI / 180;
          const r1 = (i % 5 === 0) ? 40 : 44;
          const r2 = 48;
          const x1 = Math.sin(angle) * r1;
          const y1 = -Math.cos(angle) * r1;
          const x2 = Math.sin(angle) * r2;
          const y2 = -Math.cos(angle) * r2;
          const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          ln.setAttribute('x1', String(x1));
          ln.setAttribute('y1', String(y1));
          ln.setAttribute('x2', String(x2));
          ln.setAttribute('y2', String(y2));
          ln.setAttribute('class', 'analog-tick');
          if (i % 5 === 0) ln.setAttribute('stroke-width', '1.6');
          ticksGroup.appendChild(ln);
        }
      }

      const hourHand = document.getElementById('hourHand');
      const minuteHand = document.getElementById('minuteHand');
      const secondHand = document.getElementById('secondHand');

      function setRotation(el, deg) {
        if (!el) return;
        el.setAttribute('transform', `rotate(${deg} 0 0)`);
      }

      function update() {
        const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
        const ms = now.getMilliseconds();
        const s = now.getSeconds() + ms / 1000;
        const m = now.getMinutes() + s / 60;
        const h = (now.getHours() % 12) + m / 60;

        setRotation(secondHand, s * 6);
        setRotation(minuteHand, m * 6);
        setRotation(hourHand, h * 30);
      }

      update();
      if (analogClockInterval) clearInterval(analogClockInterval);
      analogClockInterval = setInterval(update, 100);
    }

    // Применение режима часов
    function applyClockMode() {
      const mode = getClockMode();
      if (mode === "analog") {
        clockCard?.classList.add("is-analog");
        initAnalogClock();
      } else {
        clockCard?.classList.remove("is-analog");
        if (analogClockInterval) {
          clearInterval(analogClockInterval);
          analogClockInterval = null;
        }
      }
    }

    // Обработчик кнопки переключения режима
    if (toggleBtn) {
      toggleBtn.onclick = () => {
        const currentMode = getClockMode();
        const newMode = currentMode === "digital" ? "analog" : "digital";
        setClockMode(newMode);
        applyClockMode();
      };
    }

    if (layoutClockFormatToggle) {
      layoutClockFormatToggle.onclick = toggleClockTimeFormat;
    }

    // Инициализация состояния
    updateFormatButton();
    applyClockMode();

    const pad = (n) => String(n).padStart(2, "0");

    // Get Bangladesh time (GMT+6)
    function getBangladeshTime() {
      return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    }

    function tick() {
      const d = getBangladeshTime();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let timeStr = "";
      let ampm = "";

      if (getTimeFormat() === "ampm") {
        ampm = h >= 12 ? "PM" : "AM";
        h = h % 12;
        if (h === 0) h = 12;
        timeStr = `${pad(h)}:${pad(m)}:${pad(s)}`;
        timeEl.innerHTML = `${timeStr} <span class="clock-ampm">${ampm}</span>`;
      } else {
        timeStr = `${pad(h)}:${pad(m)}:${pad(s)}`;
        timeEl.textContent = timeStr;
      }

      clockCard?.classList.toggle(
        "is-ampm",
        getTimeFormat() === "ampm" && getClockMode() === "digital"
      );

      dateEl.textContent = d.toLocaleDateString(getLocale(), {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka"
      });
    }

    tick();
    setInterval(tick, 1000);
   
  }

  /* ======================
     TODO LIST
  ====================== */
  const todoInput = $("todoInput");
  const todoList = $("todoList");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    if (!todoList) return;
    todoList.innerHTML = "";

    todos.forEach((todo, i) => {
      const li = document.createElement("li");
      li.className = "todo-item" + (todo.done ? " done" : "");

      const del = document.createElement("button");
      del.className = "todo-del";
      del.type = "button";
      del.textContent = "×";

      const main = document.createElement("div");
      main.className = "todo-main";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!todo.done;

      const text = document.createElement("span");
      text.className = "todo-text";
      text.textContent = todo.text;

      main.append(cb, text);
      li.append(del, main);
      todoList.appendChild(li);

      cb.addEventListener("change", () => {
        todo.done = cb.checked;
        saveTodos();
        li.classList.toggle("done", cb.checked);
      });

      del.addEventListener("click", () => {
        todos.splice(i, 1);
        saveTodos();
        renderTodos();
      });
    });
  }

  if (todoInput) {
    todoInput.addEventListener("keydown", e => {
      if (e.key === "Enter" && todoInput.value.trim()) {
        todos.push({ text: todoInput.value.trim(), done: false });
        todoInput.value = "";
        saveTodos();
        renderTodos();
      }
    });
  }

  renderTodos();

  /* ======================
     TODO MODAL - SEE ALL
  ====================== */
  const todoSeeAll = $("todoSeeAll");
  const todoModal = $("todoModal");
  const todoModalClose = $("todoModalClose");
  const todoModalBackdrop = $("todoModalBackdrop");
  const todoModalList = $("todoModalList");

  function renderModalTodos() {
    if (!todoModalList) return;
    todoModalList.innerHTML = "";

    todos.forEach((todo, i) => {
      const li = document.createElement("li");
      li.className = "todo-item" + (todo.done ? " done" : "");

      const del = document.createElement("button");
      del.className = "todo-del";
      del.type = "button";
      del.textContent = "×";

      const label = document.createElement("label");
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!todo.done;

      const text = document.createElement("span");
      text.textContent = todo.text;

      label.append(cb, text);
      li.append(del, label);
      todoModalList.appendChild(li);

      cb.addEventListener("change", () => {
        todo.done = cb.checked;
        saveTodos();
        li.classList.toggle("done", cb.checked);
        renderTodos(); // Update main list
      });

      del.addEventListener("click", () => {
        todos.splice(i, 1);
        saveTodos();
        renderTodos();
        renderModalTodos();
      });
    });
  }

  function openTodoModal() {
    if (todoModal) {
      renderModalTodos();
      todoModal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
    }
  }

  function closeTodoModal() {
    if (todoModal) {
      todoModal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }
  }

  if (todoSeeAll) {
    todoSeeAll.addEventListener("click", openTodoModal);
  }

  if (todoModalClose) {
    todoModalClose.addEventListener("click", closeTodoModal);
  }

  if (todoModalBackdrop) {
    todoModalBackdrop.addEventListener("click", closeTodoModal);
  }

  // Close modal with Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && todoModal && !todoModal.hasAttribute("hidden")) {
      closeTodoModal();
    }
  });

  /* ======================
     CONTACT WIDGET & MODAL
  ====================== */
  const contactCard = $("contactCard");
  const contactAddBtn = $("contactAddBtn");
  const contactModal = $("contactModal");
  const contactModalClose = $("contactModalClose");
  const contactModalBackdrop = $("contactModalBackdrop");
  const contactList = $("contactList");
  const contactForm = $("contactForm");
  const contactName = $("contactName");
  const contactPhone = $("contactPhone");
  const contactEmail = $("contactEmail");
  const contactPhotoInput = $("contactPhotoInput");
  const contactPhotoBrowse = $("contactPhotoBrowse");
  const contactPhotoPreview = $("contactPhotoPreview");
  const contactFormCancel = $("contactFormCancel");
  const contactModalTitle = $("contactModalTitle");

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let currentContactId = null;

  function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  function renderContacts() {
    if (!contactList) return;
    contactList.innerHTML = "";

    if (contacts.length === 0) {
      contactList.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--muted);">No contacts yet</div>';
      return;
    }

    contacts.forEach((contact, i) => {
      const li = document.createElement("li");
      li.className = "contact-item";

      if (contact.photo) {
        const img = document.createElement("img");
        img.className = "contact-item-photo";
        img.src = contact.photo;
        img.alt = contact.name;
        li.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "contact-item-photo";
        placeholder.style.display = "flex";
        placeholder.style.alignItems = "center";
        placeholder.style.justifyContent = "center";
        placeholder.style.fontSize = "24px";
        placeholder.textContent = "👤";
        li.appendChild(placeholder);
      }

      const info = document.createElement("div");
      info.className = "contact-item-info";

      const name = document.createElement("div");
      name.className = "contact-item-name";
      name.textContent = contact.name;

      const phone = document.createElement("div");
      phone.className = "contact-item-phone";
      phone.textContent = contact.phone;

      info.appendChild(name);
      info.appendChild(phone);
      li.appendChild(info);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "contact-item-delete";
      deleteBtn.type = "button";
      deleteBtn.textContent = "×";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        contacts.splice(i, 1);
        saveContacts();
        renderContacts();
      });
      li.appendChild(deleteBtn);

      li.addEventListener("click", () => {
        editContact(i);
      });

      contactList.appendChild(li);
    });
  }

  function openContactModal(title = "Add Contact") {
    if (contactModal) {
      contactModalTitle.textContent = title;
      contactName.value = "";
      contactPhone.value = "";
      contactEmail.value = "";
      contactPhotoPreview.hidden = true;
      currentContactId = null;
      contactModal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      contactName.focus();
    }
  }

  function closeContactModal() {
    if (contactModal) {
      contactModal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }
  }

  function editContact(index) {
    const contact = contacts[index];
    contactModalTitle.textContent = "Edit Contact";
    contactName.value = contact.name;
    contactPhone.value = contact.phone;
    contactEmail.value = contact.email || "";
    if (contact.photo) {
      contactPhotoPreview.src = contact.photo;
      contactPhotoPreview.hidden = false;
    } else {
      contactPhotoPreview.hidden = true;
    }
    currentContactId = index;
    contactModal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }

  if (contactAddBtn) {
    contactAddBtn.addEventListener("click", () => openContactModal("Add Contact"));
  }

  if (contactPhotoBrowse) {
    contactPhotoBrowse.addEventListener("click", () => contactPhotoInput.click());
  }

  if (contactPhotoInput) {
    contactPhotoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          contactPhotoPreview.src = ev.target.result;
          contactPhotoPreview.hidden = false;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const contact = {
        name: contactName.value.trim(),
        phone: contactPhone.value.trim(),
        email: contactEmail.value.trim(),
        photo: contactPhotoPreview.hidden ? "" : contactPhotoPreview.src
      };

      if (!contact.name || !contact.phone) {
        alert("Please fill in name and phone number");
        return;
      }

      if (currentContactId !== null) {
        contacts[currentContactId] = contact;
      } else {
        contacts.push(contact);
      }

      saveContacts();
      renderContacts();
      closeContactModal();

      // Show contact card if hidden
      if (contactCard && contactCard.hasAttribute("hidden")) {
        contactCard.removeAttribute("hidden");
        localStorage.setItem("contact_widget_visible", "1");
      }
    });
  }

  if (contactModalClose) {
    contactModalClose.addEventListener("click", closeContactModal);
  }

  if (contactModalBackdrop) {
    contactModalBackdrop.addEventListener("click", closeContactModal);
  }

  if (contactFormCancel) {
    contactFormCancel.addEventListener("click", closeContactModal);
  }

  // Close modal with Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && contactModal && !contactModal.hasAttribute("hidden")) {
      closeContactModal();
    }
  });

  // Show/hide contact widget based on saved state
  function updateContactWidgetVisibility() {
    if (contactCard) {
      if (contacts.length > 0 || localStorage.getItem("contact_widget_visible") === "1") {
        contactCard.removeAttribute("hidden");
      }
    }
  }

  renderContacts();
  updateContactWidgetVisibility();

    /* "Add Contact Form" button in customize panel */
    const addContactFormBtn = $("addContactFormBtn");
    if (addContactFormBtn) {
      addContactFormBtn.addEventListener("click", () => {
        if (contactCard) {
          contactCard.removeAttribute("hidden");
          localStorage.setItem("contact_widget_visible", "1");
        }
        openContactModal("Add Contact");
      });
    }

  
  function enableKineticScroll(el) {
    if (!el) return;

    let isDown = false;
    let dragging = false;
    let startY = 0;
    let startScrollTop = 0;

    let v = 0;
    let lastY = 0;
    let lastT = 0;
    let raf = 0;
    let captured = false;

    const isInteractive = (target) =>
      !!target?.closest?.("button, a, input, textarea, select, label, [role='button'], [contenteditable='true'], .no-kinetic");

    function stop() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }

    function momentum() {
      v *= 0.95;
      if (Math.abs(v) < 0.1) return;
      el.scrollTop -= v;
      raf = requestAnimationFrame(momentum);
    }

    el.addEventListener("pointerdown", (e) => {
      if (isInteractive(e.target)) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;

      isDown = true;
      dragging = false;
      captured = false;
      stop();

      startY = e.clientY;
      lastY = e.clientY;
      startScrollTop = el.scrollTop;
      lastT = performance.now();
      v = 0;
    });

    el.addEventListener("pointermove", (e) => {
      if (!isDown) return;

      const y = e.clientY;
      const dy = y - startY;

      if (!dragging && Math.abs(dy) < 6) return;

      if (!dragging) dragging = true;

      if (!captured) {
        try { el.setPointerCapture?.(e.pointerId); } catch { }
        captured = true;
      }

      e.preventDefault?.();

      el.scrollTop = startScrollTop - dy;

      const now = performance.now();
      const dt = Math.max(16, now - lastT);
      v = ((y - lastY) / dt) * 16;

      lastY = y;
      lastT = now;
    }, { passive: false });

    function end() {
      if (!isDown) return;
      isDown = false;

      if (!dragging) return;

      raf = requestAnimationFrame(momentum);
    }

    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }

  /* ======================
     WEATHER (без API ключа)
  ====================== */
  const WEATHER_KEY = "weather.cache.v1";
  const WEATHER_GEO_KEY = "weather.geo.v1";








  function weatherCodeToText(code) {
    if (code === 0) return "Clear";
    if (code === 1) return "Mainly clear";
    if (code === 2) return "Partly cloudy";
    if (code === 3) return "Overcast";
    if (code === 45) return "Fog";
    if (code === 48) return "Rime fog";
    if (code === 51) return "Light drizzle";
    if (code === 53) return "Drizzle";
    if (code === 55) return "Dense drizzle";
    if (code === 56) return "Freezing drizzle";
    if (code === 57) return "Heavy freezing drizzle";
    if (code === 61) return "Light rain";
    if (code === 63) return "Rain";
    if (code === 65) return "Heavy rain";
    if (code === 66) return "Freezing rain";
    if (code === 67) return "Heavy freezing rain";
    if (code === 71) return "Light snow";
    if (code === 73) return "Snow";
    if (code === 75) return "Heavy snow";
    if (code === 77) return "Snow grains";
    if (code === 80) return "Light showers";
    if (code === 81) return "Showers";
    if (code === 82) return "Heavy showers";
    if (code === 85) return "Snow showers";
    if (code === 86) return "Heavy snow showers";
    if (code === 95) return "Thunderstorm";
    if (code === 96) return "Thunderstorm + hail";
    if (code === 99) return "Heavy thunder + hail";
    return "Weather";
  }

  function saveWeatherCache(obj) {
    localStorage.setItem(WEATHER_KEY, JSON.stringify(obj));
  }
  function loadWeatherCache() {
    try { return JSON.parse(localStorage.getItem(WEATHER_KEY) || "null"); }
    catch { return null; }
  }
  function saveLastGeo({ lat, lon }) {
    localStorage.setItem(WEATHER_GEO_KEY, JSON.stringify({ lat, lon }));
  }
  function loadLastGeo() {
    try { return JSON.parse(localStorage.getItem(WEATHER_GEO_KEY) || "null"); }
    catch { return null; }
  }

  function distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  /* ======================
   BACKGROUND (image/gif/video ≤ 25s) + focus + rotate (0/90/180/270)
====================== */

const BG_STATE_KEY = "bg.state.v2";   // { kind:'image'|'video', value:'...', focus:{x,y}, rot:0|90|180|270, blur:0-100, sound:true|false }
const BG_KEY_LEGACY = "bg.image.v1";

const BG_DB_NAME = "bg-db";
const BG_DB_VERSION = 1;          // ↑ если меняешь stores — увеличивай
const BG_DB_STORE = "kv";         
const BG_VIDEO_KEY = "bgVideo";
const BG_IMAGE_KEY = "bgImage";

let _bgObjectUrl = null;

function ensureBgVideoEl() {
  let v = document.getElementById("bgVideo");
  if (v) return v;

  const layer = document.getElementById("bgLayer") || document.body;

  v = document.createElement("video");
  v.id = "bgVideo";
  v.loop = true;
  v.playsInline = true;
  v.autoplay = true;

  // важно: чтобы было как у картинки (cover)
  v.style.position = "absolute";
  v.style.inset = "0";
  v.style.width = "100%";
  v.style.height = "100%";
  v.style.objectFit = "cover";
  v.style.zIndex = "0";

  applyBgVideoSound(v, loadBgState()?.sound);

  layer.appendChild(v);
  return v;
}

function applyBgVideoSound(videoEl, soundOn) {
  if (!videoEl) return;
  const enabled = !!soundOn;
  videoEl.muted = !enabled;
  videoEl.volume = enabled ? 1 : 0;
}


function ensureBgImgEl() {
  let im = document.getElementById("bgImg");
  if (!im) {
    im = document.createElement("img");
    im.id = "bgImg";
    im.alt = "";
    // apply blur from saved state
    try { const b = loadBgState()?.blur || 0; bgImg.style.filter = b ? `blur(${b}px)` : ""; } catch(e){}
    document.body.prepend(im);
  }
  return im;
}


    // apply blur from saved state
    try { const b = loadBgState()?.blur || 0; bgVid.style.filter = b ? `blur(${b}px)` : ""; } catch(e){}
function cleanupBgMedia({ revoke = true } = {}) {
  const v = document.getElementById("bgVideo");
  if (v) {
    try { v.pause(); } catch {}
    v.hidden = true;
    v.style.transform = "";

    // мягкий сброс
    v.src = "";
    try { v.load(); } catch {}
  }

  const im = document.getElementById("bgImg");
  if (im) {
    im.hidden = true;
    im.style.transform = "";
    im.src = "";
  }

  if (revoke && _bgObjectUrl) {
    try { URL.revokeObjectURL(_bgObjectUrl); } catch {}
    _bgObjectUrl = null;
  }
}

async function setVideoBackgroundFromUrl(url) {
  cleanupBgMedia({ revoke: true });

  const v = ensureBgVideoEl();
  v.hidden = false;

  const im = document.getElementById("bgImg");
  if (im) im.hidden = true;

  // атрибуты ДО src/load/play
  v.loop = true;
  v.playsInline = true;
  applyBgVideoSound(v, loadBgState()?.sound);

  v.src = url;
  v.load();
  try { await v.play(); } catch (e) { console.warn("play blocked", e); }
}

async function setVideoBackgroundFromBlob(blob) {
  // сохраним старый URL чтобы ревокнуть после назначения нового
  const oldUrl = _bgObjectUrl;

  // сначала чистим, но НЕ ревокаем сейчас (чтобы не убить, если где-то гонка)
  cleanupBgMedia({ revoke: false });

  const v = ensureBgVideoEl();
  v.hidden = false;

  const im = document.getElementById("bgImg");
  if (im) im.hidden = true;

  v.loop = true;
  v.playsInline = true;
  applyBgVideoSound(v, loadBgState()?.sound);

  _bgObjectUrl = URL.createObjectURL(blob);
  v.src = _bgObjectUrl;
  v.load();
  try { await v.play(); } catch (e) { console.warn("play blocked", e); }

  // теперь можно безопасно ревокнуть старый
  if (oldUrl) {
    try { URL.revokeObjectURL(oldUrl); } catch {}
  }
}


/* ---------- ROT helpers ---------- */
function normRot(rot){
  let r = Number(rot) || 0;
  r = ((r % 360) + 360) % 360;
  // фиксируем в 0/90/180/270
  const snaps = [0, 90, 180, 270];
  let best = 0, bestD = 999;  
  for (const s of snaps){
    const d = Math.abs(s - r);
    if (d < bestD){ bestD = d; best = s; }
  }
  return best;
}





/* ---------- Focus + Apply to actual background ---------- */
function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function normFocus(f){
  const x = clamp(Number(f?.x ?? 50), 0, 100);
  const y = clamp(Number(f?.y ?? 50), 0, 100);
  return { x, y };
}
function coverScaleForRotation(w, h, rotDeg) {
  const r = ((rotDeg % 360) + 360) % 360;
  if (r === 90 || r === 270) {
    // чтобы после поворота 90° картинка закрывала прямоугольник экрана
    return Math.max(w / h, h / w);
  }
  return 1; // 0° или 180°
}

function applyBgFocus(focus, rot) {
  const f = normFocus(focus);
  const r = normRot(rot ?? 0);

  const pos = `${f.x}% ${f.y}%`;

  // ⚠️ Поставь сюда ID/элементы РЕАЛЬНОГО фона (не из модалки)
  const bgImg = document.getElementById("bgImg");
  const bgVid = document.getElementById("bgVideo");

  // контейнер, который задаёт размер "экрана" (на что фон натянут)
  const box =
    document.getElementById("bgLayer") ||
    document.getElementById("bg") ||
    document.body;

  const rect = box.getBoundingClientRect();
  const sc = coverScaleForRotation(rect.width, rect.height, r);
  const b = loadBgState()?.blur || 0;
  const extraScale = 1 + Math.min(0.12, (b || 0) / 200);
  const finalScale = sc * extraScale;

  if (bgImg) {
    bgImg.style.objectPosition = pos;
    bgImg.style.transformOrigin = "50% 50%";
    bgImg.style.transform = `rotate(${r}deg) scale(${finalScale})`;
    try { bgImg.style.filter = b ? `blur(${b}px)` : ""; } catch(e){}
  }

  if (bgVid) {
    bgVid.style.objectPosition = pos;
    bgVid.style.transformOrigin = "50% 50%";
    bgVid.style.transform = `rotate(${r}deg) scale(${finalScale})`;
    try { bgVid.style.filter = b ? `blur(${b}px)` : ""; } catch(e){}
  }
}




/* ---------- State ---------- */
function saveBgState(state) {
  const prev = loadBgState() || {};
  const rawValue = String(state.value ?? prev.value ?? "");
  const isDataImage = rawValue.startsWith("data:image/");
  const shouldStoreInIdb = isDataImage && rawValue.length > 1_500_000;
  const finalValue = shouldStoreInIdb ? ("idb:" + BG_IMAGE_KEY) : rawValue;
  const st = {
    kind: state.kind || prev.kind || 'image',
    value: finalValue,
    focus: normFocus(state.focus ?? prev.focus),
    rot: normRot(state.rot ?? prev.rot ?? 0),
    blur: clamp(Number(state.blur ?? prev.blur ?? 0), 0, 100),
    sound: (typeof state.sound === "boolean") ? state.sound : (typeof prev.sound === "boolean" ? prev.sound : false)
  };
  try {
    localStorage.setItem(BG_STATE_KEY, JSON.stringify(st));
  } catch (e) {
    if (isDataImage) {
      const stIdb = { ...st, value: "idb:" + BG_IMAGE_KEY };
      try { localStorage.setItem(BG_STATE_KEY, JSON.stringify(stIdb)); } catch (e2) {
        console.warn("saveBgState failed", e2);
      }
    } else {
      console.warn("saveBgState failed", e);
    }
  }

  if (isDataImage && (shouldStoreInIdb || st.value === ("idb:" + BG_IMAGE_KEY))) {
    idbPut(BG_IMAGE_KEY, rawValue).catch(() => {});
  }
}

function loadBgState() {
  try {
    const s = JSON.parse(localStorage.getItem(BG_STATE_KEY) || "null");
    if (s && (s.kind === "image" || s.kind === "video") && typeof s.value === "string") {
      s.focus = normFocus(s.focus);
      s.rot = normRot(s.rot ?? 0);
      s.blur = clamp(Number(s.blur ?? 0), 0, 100);
      s.sound = (typeof s.sound === "boolean") ? s.sound : false;
      return s;
    }
  } catch {}

  const legacy = localStorage.getItem(BG_KEY_LEGACY);
  if (legacy && legacy.trim()) {
    const st = { kind: "image", value: legacy.trim(), focus: {x:50,y:50}, rot: 0 };
    saveBgState(st);
    return st;
  }
  return null;
}

/* ---------- Set background ---------- */
function setImageBackground(url) {
  cleanupBgMedia();
  const im = ensureBgImgEl();
  im.hidden = false;
  im.src = url;

  const v = document.getElementById("bgVideo");
  if (v) v.hidden = true;
}

async function setVideoBackgroundFromUrl(url) {
  cleanupBgMedia();
  const v = ensureBgVideoEl();
  v.hidden = false;

  const im = document.getElementById("bgImg");
  if (im) im.hidden = true;

  v.src = url;
  v.load();
  v.loop = true;
  v.playsInline = true;
  applyBgVideoSound(v, loadBgState()?.sound);
  try { await v.play(); } catch {}
}

async function setVideoBackgroundFromBlob(blob) {
  cleanupBgMedia();
  const v = ensureBgVideoEl();
  v.hidden = false;

  const im = document.getElementById("bgImg");
  if (im) im.hidden = true;

  _bgObjectUrl = URL.createObjectURL(blob);
  v.src = _bgObjectUrl;
   v.load();     
  v.loop = true;
  v.playsInline = true;
  applyBgVideoSound(v, loadBgState()?.sound);
  try { await v.play(); } catch {}
}

// Open (or create) IndexedDB used for background video storage
async function idbOpen() {
  return new Promise((resolve, reject) => {
    try {
      const req = indexedDB.open(BG_DB_NAME, BG_DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(BG_DB_STORE)) db.createObjectStore(BG_DB_STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error || new Error('IDB open error'));
    } catch (e) {
      reject(e);
    }
  });
}


async function idbPut(key, value) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BG_DB_STORE, "readwrite");
    tx.objectStore(BG_DB_STORE).put(value, key);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
}
async function idbGet(key) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BG_DB_STORE, "readonly");
    const req = tx.objectStore(BG_DB_STORE).get(key);
    req.onsuccess = () => { db.close(); resolve(req.result || null); };
    req.onerror = () => { db.close(); reject(req.error); };
  });
}

async function idbDel(key) {
  // 1) ключ должен быть валидным
  if (key === undefined || key === null || key === "") {
    console.warn("[idbDel] skip: invalid key =", key);
    return;
  }

  const db = await idbOpen();

  return new Promise((resolve, reject) => {
    let tx;

    try {
      // 2) транзакция по нужному store
      tx = db.transaction(BG_DB_STORE, "readwrite");
      tx.objectStore(BG_DB_STORE).delete(key);
    } catch (e) {
      db.close();
      reject(e);
      return;
    }

    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onabort = () => { const err = tx.error; db.close(); reject(err); };
    tx.onerror  = () => { const err = tx.error; db.close(); reject(err); };
  });
}

/* ---------- Apply on start ---------- */
async function applySavedOrDefaultBackground() {
  const st = loadBgState();

  if (!st) {
    const def = assetUrl("assets/1.jpeg");
    saveBgState({ kind: "image", value: def, focus:{x:50,y:50}, rot:0 });
    setImageBackground(def);
    applyBgFocus({x:50,y:50}, 0);
    return;
  }

  if (st.kind === "image") {
    if (st.value === "idb:" + BG_IMAGE_KEY) {
      const dataUrl = await idbGet(BG_IMAGE_KEY);
      if (dataUrl) {
        setImageBackground(dataUrl);
        applyBgFocus(st.focus, st.rot);
        return;
      }
      const def = assetUrl("assets/1.jpeg");
      saveBgState({ kind: "image", value: def, focus:{x:50,y:50}, rot:0 });
      setImageBackground(def);
      applyBgFocus({x:50,y:50}, 0);
      return;
    }
    setImageBackground(st.value);
    applyBgFocus(st.focus, st.rot);
    return;
  }

  // video
  if (st.value === "idb:" + BG_VIDEO_KEY) {
    const blob = await idbGet(BG_VIDEO_KEY);
    if (blob) {
      await setVideoBackgroundFromBlob(blob);
      applyBgFocus(st.focus, st.rot);
      return;
    }
    // если blob пропал — откат к дефолту
    const def = assetUrl("assets/1.jpeg");
    saveBgState({ kind: "image", value: def, focus:{x:50,y:50}, rot:0 });
    setImageBackground(def);
    applyBgFocus(st.focus, st.rot);
    return;
  }

  // URL-based video
  await setVideoBackgroundFromUrl(st.value);
  applyBgFocus(st.focus, st.rot);
}

/* ---------- Reset helper ---------- */
async function resetBackgroundToDefault() {
  cleanupBgMedia();
  await idbDel(BG_VIDEO_KEY).catch(() => {});
  await idbDel(BG_IMAGE_KEY).catch(() => {});
  const def = assetUrl("assets/1.jpeg");
  saveBgState({ kind: "image", value: def, focus:{x:50,y:50}, rot:0 });
  setImageBackground(def);
  applyBgFocus({x:50,y:50}, 0);
}
document.addEventListener("DOMContentLoaded", async () => {
  const card  = document.getElementById("onboardingCard");
  const close = document.getElementById("onboardingClose");
  const link  = document.getElementById("onboardingLink");

  if (!card || !close) return;

  // ТУТ твой туториал (YouTube / страница / любая ссылка)
  const TUTORIAL_URL = "https://www.youtube.com/watch?v=o-KzfjXjR1I";
  if (link) link.href = TUTORIAL_URL;

  const KEY = "onboardingDismissed.v1";

  const hasChromeStorage = !!chrome?.storage?.local;

  function getFlag() {
    return new Promise((resolve) => {
      if (!hasChromeStorage) return resolve(localStorage.getItem(KEY) === "1");
      chrome.storage.local.get([KEY], (res) => resolve(!!res?.[KEY]));
    });
  }

  function setFlag() {
    if (!hasChromeStorage) {
      localStorage.setItem(KEY, "1");
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      chrome.storage.local.set({ [KEY]: true }, resolve);
    });
  }

  // показать только если не закрывали раньше
  const dismissed = await getFlag();
  if (!dismissed) card.hidden = false;

  close.addEventListener("click", async () => {
    card.hidden = true;
    await setFlag();
  });
});

/* ======================
   SEARCH (NEW WIDGET)
====================== */
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function doSearch(query) {
  const q = (query || "").trim();
  if (!q) return;

  // твой текущий путь (как раньше)
  if (chrome?.runtime?.sendMessage) {
    chrome.runtime.sendMessage({ type: "SEARCH", query: q }, () => void chrome.runtime.lastError);
    return;
  }

  // fallback
  window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(q);
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    doSearch(searchInput.value);
  });

  // ESC очищает поле
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      searchInput.blur();
    }
  });
}





/**
 * Модалка фокуса/поворота.
 * Возвращает focus {x,y,rot} или null (cancel)
 *
 * Требуются элементы:
 * #bgFocus, #bgFocusBackdrop, #bgFocusClose, #bgFocusCancel, #bgFocusApply,
 * #bgFocusCenter, #bgFocusPreview, #bgFocusImg, #bgFocusVid
 *
 * Дополнительно (ОЧЕНЬ желательно) кнопки поворота:
 * #bgRotateLeft  (↺) и #bgRotateRight (↻)
 * Если их нет — поворот просто останется каким был.
 */
function openBgFocusEditor({ kind, src, initialFocus }) {
  const st0 = loadBgState();
  let rot = normRot(st0?.rot ?? 0);

  // текущий src для картинки (после “запекания” поворота)
  let currentSrc = src;

  // helpers
  const isDataUrl = (s) => typeof s === "string" && s.startsWith("data:");
  const isGifDataUrl = (s) => typeof s === "string" && s.startsWith("data:image/gif");

  // Повернуть пиксели на 90° (CW / CCW) и вернуть новый dataURL
  const rotateDataUrl90 = (dataUrl, dir /* +1 CW, -1 CCW */) => {
    return new Promise((resolve, reject) => {
      const im = new Image();
      im.onload = () => {
        try {
          const w = im.naturalWidth || im.width;
          const h = im.naturalHeight || im.height;

          const c = document.createElement("canvas");
          c.width = h;
          c.height = w;
          const ctx = c.getContext("2d");
          if (!ctx) return reject(new Error("no canvas ctx"));

          // центр
          ctx.translate(c.width / 2, c.height / 2);
          ctx.rotate((dir * Math.PI) / 2);

          // рисуем по центру
          ctx.drawImage(im, -w / 2, -h / 2);

          // mime из dataUrl (по умолчанию png)
          const m = /^data:(image\/[a-zA-Z0-9.+-]+);/i.exec(dataUrl)?.[1] || "image/png";

          // важно: у jpeg можно качество указать
          let out;
          if (m === "image/jpeg" || m === "image/jpg") out = c.toDataURL("image/jpeg", 0.92);
          else out = c.toDataURL(m);

          resolve(out);
        } catch (e) {
          reject(e);
        }
      };
      im.onerror = () => reject(new Error("image load failed"));
      im.src = dataUrl;
    });
  };

  // Попытаться повернуть URL-изображение через fetch -> dataURL -> canvas
  const rotateUrl90 = async (url, dir /* +1 CW, -1 CCW */) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result || ""));
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
    if (!dataUrl) throw new Error("dataUrl failed");
    return rotateDataUrl90(dataUrl, dir);
  };

  // Пересчитать focus при повороте пикселей (чтобы центр “смотрел” туда же)
  const remapFocusAfterBake = (f, dir /* +1 CW, -1 CCW */) => {
    const x = clamp(f.x, 0, 100);
    const y = clamp(f.y, 0, 100);

    // объект-позиция: x% y%
    // CW: (x,y) -> (y, 100-x)
    // CCW: (x,y) -> (100-y, x)
    if (dir === 1) return { x: y, y: 100 - x };
    return { x: 100 - y, y: x };
  };

  return new Promise((resolve) => {
    const wrap = document.getElementById("bgFocus");
    const backdrop = document.getElementById("bgFocusBackdrop");
    const btnClose = document.getElementById("bgFocusClose");
    const btnCancel = document.getElementById("bgFocusCancel");
    const btnApply = document.getElementById("bgFocusApply");
    const btnCenter = document.getElementById("bgFocusCenter");

    const btnRotL = document.getElementById("bgRotateLeft");
    const btnRotR = document.getElementById("bgRotateRight");

    const preview = document.getElementById("bgFocusPreview");
    const img = document.getElementById("bgFocusImg");
    const vid = document.getElementById("bgFocusVid");
    const blurToggle = document.getElementById('bgFocusBlurToggle');
    const soundToggle = document.getElementById("bgFocusSoundToggle");

    // если модалки нет — вернем как есть
    if (!wrap || !preview || !img || !vid) {
      resolve({ focus: normFocus(initialFocus), rot: normRot(loadBgState()?.rot ?? 0), src });
      return;
    }

    let focus = normFocus(initialFocus);
    let blur = loadBgState()?.blur || 0;
    let soundOn = !!loadBgState()?.sound;
    const FIXED_BLUR = 12; // fixed blur level for toggle (px)

const sync = () => {
  const pos = `${focus.x}% ${focus.y}%`;
  img.style.objectPosition = pos;
  vid.style.objectPosition = pos;

  const r = preview.getBoundingClientRect();
  const rotDeg = normRot(rot);

  const sc = coverScaleForRotation(r.width, r.height, rotDeg);
  // when blur is present, slightly increase scale to hide edge artifacts
  const extraScale = 1 + Math.min(0.12, (blur || 0) / 200);
  const finalScale = sc * extraScale;

  if (kind === "video") {
    vid.style.transformOrigin = "50% 50%";
    vid.style.transform = `rotate(${rotDeg}deg) scale(${finalScale})`;
    img.style.transform = "";
    // apply blur preview and ensure edges covered
    try { vid.style.filter = blur ? `blur(${blur}px)` : ""; } catch(e){}
  } else {
    // ✅ для URL/GIF крутим CSS-ом
    img.style.transformOrigin = "50% 50%";
    img.style.transform = `rotate(${rotDeg}deg) scale(${finalScale})`;
    vid.style.transform = "";
    try { img.style.filter = blur ? `blur(${blur}px)` : ""; } catch(e){}
  }
};


    // rotation handlers
    const onRotL = async (e) => {
      e.stopPropagation();

      // ✅ Если это IMAGE и не GIF — запекаем поворот (dataURL или URL через fetch)
      if (kind === "image" && !isGifDataUrl(currentSrc)) {
        try {
          btnRotL && (btnRotL.disabled = true);
          btnRotR && (btnRotR.disabled = true);

          if (isDataUrl(currentSrc)) {
            currentSrc = await rotateDataUrl90(currentSrc, -1);
          } else {
            try {
              currentSrc = await rotateUrl90(currentSrc, -1);
            } catch (e) {
              // CORS blocked: fallback to CSS rotate
              rot = normRot(rot - 90);
              sync();
              return;
            }
          }
          img.src = currentSrc;

          // пересчитать focus, чтобы точка интереса оставалась логичной
          focus = remapFocusAfterBake(focus, -1);

          // rot больше не нужен для картинки
          rot = 0;
          sync();
        } catch (err) {
          console.warn(err);
        } finally {
          btnRotL && (btnRotL.disabled = false);
          btnRotR && (btnRotR.disabled = false);
        }
        return;
      }

      // fallback (GIF или URL с CORS) — крутим как раньше
      rot = normRot(rot - 90);
      sync();
    };

    const onRotR = async (e) => {
      e.stopPropagation();

      if (kind === "image" && !isGifDataUrl(currentSrc)) {
        try {
          btnRotL && (btnRotL.disabled = true);
          btnRotR && (btnRotR.disabled = true);

          if (isDataUrl(currentSrc)) {
            currentSrc = await rotateDataUrl90(currentSrc, +1);
          } else {
            try {
              currentSrc = await rotateUrl90(currentSrc, +1);
            } catch (e) {
              // CORS blocked: fallback to CSS rotate
              rot = normRot(rot + 90);
              sync();
              return;
            }
          }
          img.src = currentSrc;

          focus = remapFocusAfterBake(focus, +1);

          rot = 0;
          sync();
        } catch (err) {
          console.warn(err);
        } finally {
          btnRotL && (btnRotL.disabled = false);
          btnRotR && (btnRotR.disabled = false);
        }
        return;
      }

      rot = normRot(rot + 90);
      sync();
    };

    btnRotL?.addEventListener("click", onRotL);
    btnRotR?.addEventListener("click", onRotR);

    const cleanup = () => {
      preview.onpointerdown = null;
      document.onpointermove = null;
      document.onpointerup = null;

      btnRotL?.removeEventListener("click", onRotL);
      btnRotR?.removeEventListener("click", onRotR);
      if (blurToggle) {
        try { blurToggle.onclick = null; } catch(e){}
      }
      if (soundToggle) {
        try { soundToggle.onclick = null; } catch(e){}
        soundToggle.hidden = true;
      }

      backdrop?.removeEventListener("click", onCancel);
      btnClose?.removeEventListener("click", onCancel);
      btnCancel?.removeEventListener("click", onCancel);
      btnApply?.removeEventListener("click", onApply);
      btnCenter?.removeEventListener("click", onCenter);

      wrap.hidden = true;
      img.hidden = true;
      vid.hidden = true;

      try { vid.pause(); } catch {}
      vid.removeAttribute("src");
      try { vid.load?.(); } catch {}
    };

    const onCancel = () => { cleanup(); resolve(null); };

    // ✅ возвращаем currentSrc для image — чтобы ты сохранил именно повернутую картинку
    const onApply = () => {
      // persist blur immediately to avoid losing it if caller doesn't
      try {
        const val = (kind === "image" ? currentSrc : src);
        saveBgState({ kind, value: val, focus, rot: normRot(rot), blur, sound: soundOn });
      } catch (e) { /* ignore */ }

      cleanup();
      resolve({
        focus,
        rot: normRot(rot),
        src: (kind === "image" ? currentSrc : src),
        blur,
        sound: soundOn
      });
    };

    const onCenter = () => { focus = { x: 50, y: 50 }; sync(); };

    // show correct media
    if (kind === "video") {
      img.hidden = true;
      vid.hidden = false;
      vid.src = src;
      vid.loop = true;
      vid.playsInline = true;
      applyBgVideoSound(vid, soundOn);
      vid.play?.().catch(()=>{});
    } else {
      vid.hidden = true;
      img.hidden = false;
      img.src = currentSrc;
    }

    sync();
    wrap.hidden = false;

    // init blur toggle
    try {
      if (blurToggle) {
        const updateToggleLabel = () => {
          const blurText = t("background.blur", "Blur");
          blurToggle.textContent = blur ? `${blurText}: ${blur}px` : `${blurText}: Off`;
          blurToggle.classList.toggle('active', !!blur);
        };
        updateToggleLabel();
        blurToggle.addEventListener('click', () => {
          blur = blur ? 0 : FIXED_BLUR;
          updateToggleLabel();
          sync();
        });
      }
    } catch(e){}

    try {
      if (soundToggle) {
        const updateSoundLabel = () => {
          soundToggle.textContent = soundOn
            ? t("background.videoSoundOn", "Sound: On")
            : t("background.videoSoundOff", "Sound: Off");
          soundToggle.setAttribute("aria-pressed", soundOn ? "true" : "false");
        };
        soundToggle.hidden = (kind !== "video");
        updateSoundLabel();
        soundToggle.onclick = () => {
          soundOn = !soundOn;
          applyBgVideoSound(vid, soundOn);
          updateSoundLabel();
        };
      }
    } catch(e){}

    // drag -> update focus (для image rot всегда 0, для video можно оставить как есть)
    let down = false;
    let lastX = 0, lastY = 0;

    preview.onpointerdown = (e) => {
      down = true;
      lastX = e.clientX;
      lastY = e.clientY;
      try { preview.setPointerCapture?.(e.pointerId); } catch {}
    };

    document.onpointermove = (e) => {
      if (!down) return;

      const r = preview.getBoundingClientRect();
      const dx = (e.clientX - lastX) / Math.max(1, r.width);
      const dy = (e.clientY - lastY) / Math.max(1, r.height);

      let ux = dx, uy = dy;

      // только для видео учитываем rot
      const rotDeg = (kind === "video") ? normRot(rot) : 0;
      if (rotDeg === 90)  { ux = dy;  uy = -dx; }
      if (rotDeg === 180) { ux = -dx; uy = -dy; }
      if (rotDeg === 270) { ux = -dy; uy = dx; }

      focus.x = clamp(focus.x - ux * 100, 0, 100);
      focus.y = clamp(focus.y - uy * 100, 0, 100);

      lastX = e.clientX;
      lastY = e.clientY;
      sync();
    };

    document.onpointerup = () => { down = false; };

    backdrop?.addEventListener("click", onCancel);
    btnClose?.addEventListener("click", onCancel);
    btnCancel?.addEventListener("click", onCancel);
    btnApply?.addEventListener("click", onApply);
    btnCenter?.addEventListener("click", onCenter);
  });
};


/* ---------- Duration check (для upload) ---------- */
function getVideoDurationSeconds(fileOrBlob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(fileOrBlob);
    const v = document.createElement("video");
    v.preload = "metadata";
    v.onloadedmetadata = () => {
      const d = Number(v.duration || 0);
      URL.revokeObjectURL(url);
      resolve(d);
    };
    v.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Cannot read video metadata"));
    };
    v.src = url;
  });
}




  /* ======================
     BOOKMARKS + GROUPS
  ====================== */
  let selectedBmIcon = "";

  function assetUrl(path) {
    try {
      return (chrome?.runtime?.getURL) ? chrome.runtime.getURL(path) : path;
    } catch {
      return path;
    }
  }

  async function loadIconPack() {
    try {
      const res = await fetch(assetUrl("icons/icons.json"));
      const arr = await res.json();
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  function setIconPreview(iconStr) {
    const img = document.getElementById("bmIconPreview");
    if (!img) return;

    if (!iconStr) {
      img.style.display = "none";
      img.src = "";
      return;
    }

    img.style.display = "block";
    if (iconStr.startsWith("pack:")) img.src = assetUrl("icons/" + iconStr.slice(5));
    else img.src = iconStr;
  }

  function resolveBookmarkIcon(bm) {
    if (bm.icon) {
      if (bm.icon.startsWith("pack:")) return assetUrl("icons/" + bm.icon.slice(5));
      if (bm.icon.startsWith("data:")) return bm.icon;
      if (bm.icon.startsWith("url:")) return bm.icon.slice(4);
    }
    if (bm.icon && !bm.icon.startsWith("pack:") && !bm.icon.startsWith("data:")) {
      return bm.icon;
    }
    const parsedUrl = normalizeUrl(bm.url);
    const domain = parsedUrl ? parsedUrl.hostname : "unknown";
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  }

  async function openIconPicker(onPick) {
    const modal = document.getElementById("iconModal");
    const grid = document.getElementById("iconGrid");
    const close = document.getElementById("iconModalClose");
    const upBtn = document.getElementById("iconUploadBtn");
    const clrBtn = document.getElementById("iconClearBtn");
    const file = document.getElementById("bmIconUpload");

    if (!modal || !grid) return;

    modal.hidden = false;
    grid.innerHTML = "<div style='opacity:.8;color:#fff'>Loading…</div>";

    const icons = await loadIconPack();
    grid.innerHTML = "";

    icons.forEach((fname) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "icon-tile";
      tile.innerHTML = `<img alt="" src="${assetUrl("icons/" + fname)}">`;
      tile.onclick = () => {
        modal.hidden = true;
        onPick("pack:" + fname);
      };
      grid.appendChild(tile);
    });

    close?.addEventListener("click", () => (modal.hidden = true));
    modal.onclick = (e) => { if (e.target === modal) modal.hidden = true; };

    clrBtn?.addEventListener("click", () => { modal.hidden = true; onPick(""); });
    upBtn?.addEventListener("click", () => file?.click());

    file && (file.onchange = async () => {
      const f = file.files?.[0];
      file.value = "";
      if (!f) return;

      const dataUrl = await new Promise((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result || ""));
        r.readAsDataURL(f);
      });

      modal.hidden = true;
      onPick(dataUrl);
    });
  }

  const bmForm = $("bookmarkForm");
  const bmList = $("bookmarkList");
  const bmGroupSelect = $("bmGroup");
  const addGroupBtn = $("addGroupBtn");

  const BM_KEYS = {
    bookmarks: "bookmarks",
    groups: "groups",
    lastGroup: "bm.lastGroup",
  };

  const HAS_STORAGE = !!chrome?.storage?.local;

  let bookmarks = [];
  let groups = {};
  let lastGroup = "";

// ======================
// FAVORITES
// ======================
const FAV_KEY = "bm.favorites.v1";
const FAV_SIZE_KEY = "bm.favorites.size"; // "small" | "large"
const FAV_COUNT_KEY = "bm.favorites.count";
const FAV_MIN_SLOTS = 9;
const FAV_MAX_SLOTS = 60;
const FAV_ADD_STEP = 3;
let favSize = "small";
let favSlotCount = FAV_MIN_SLOTS;

let favorites = Array.from({ length: FAV_MIN_SLOTS }, () => null);
const favSlotsEl = document.getElementById("favSlots");
const favAddMoreBtn = document.getElementById("favAddMoreBtn");
let favPicker = null;
let favPickerBm = null;
let favPickerCleanup = null;

function getFavSlotCount() {
  return favSlotCount;
}

function clampFavSlotCount(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return FAV_MIN_SLOTS;
  return Math.max(FAV_MIN_SLOTS, Math.min(FAV_MAX_SLOTS, Math.round(n)));
}

function ensureFavoriteCapacity(targetCount) {
  const need = clampFavSlotCount(targetCount);
  while (favorites.length < need) favorites.push(null);
  if (favorites.length > FAV_MAX_SLOTS) favorites = favorites.slice(0, FAV_MAX_SLOTS);
}

function applyFavSizeClass() {
  const card = document.getElementById("favCard");
  if (!card) return;
  card.classList.toggle("is-large", favSize === "large");
}

  function lsGetJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }
  function lsSetJSON(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  function storeGet(keys) {
    return new Promise((resolve) => {
      if (HAS_STORAGE) {
        chrome.storage.local.get(keys, (res) => resolve(res || {}));
      } else {
        const out = {};
        for (const k of keys) out[k] = lsGetJSON(k, null);
        resolve(out);
      }
    });
  }
async function setFavorite(slotIdx, bm) {
  const maxSlot = favorites.length - 1; // 5
  const slot = Math.max(0, Math.min(maxSlot, Number(slotIdx)));

  if (!bm) {
    favorites[slot] = null;
    await saveFavorites();
    renderFavoritesWidget();
    return;
  }

  favorites[slot] = {
    title: String(bm.title || "").trim() || canonUrl(bm.url),
    url: canonUrl(bm.url),
    icon: String(bm.icon || ""),
  };

  await saveFavorites();
  renderFavoritesWidget();
  renderBookmarks();
}

  function storeSet(obj) {
    return new Promise((resolve) => {
      if (HAS_STORAGE) {
        chrome.storage.local.set(obj, () => resolve());
      } else {
        for (const [k, v] of Object.entries(obj)) lsSetJSON(k, v);
        resolve();
      }
    });
  }
async function saveFavSize() {
  await bmSet({ [FAV_SIZE_KEY]: favSize });
}
async function saveFavSlotCount() {
  await bmSet({ [FAV_COUNT_KEY]: favSlotCount });
}
async function addMoreFavoriteSlots(step = FAV_ADD_STEP) {
  const nextCount = clampFavSlotCount(getFavSlotCount() + Math.max(1, Number(step) || FAV_ADD_STEP));
  if (nextCount === getFavSlotCount()) return;

  favSlotCount = nextCount;
  ensureFavoriteCapacity(favSlotCount);
  await Promise.all([saveFavSlotCount(), saveFavorites()]);
  renderFavoritesWidget();
}
function normalizeFavorites(v) {
  const arr = Array.isArray(v) ? v.slice(0, FAV_MAX_SLOTS) : [];

  return arr.map((x) => {
    if (!x || typeof x !== "object") return null;
    const title = String(x.title || "").trim();
    const url = canonUrl(x.url);
    const icon = String(x.icon || "");
    if (!url) return null;
    return { title: title || url, url, icon };
  });
}

bmGet([BM_KEYS.bookmarks, BM_KEYS.groups, BM_KEYS.lastGroup, FAV_KEY, FAV_SIZE_KEY, FAV_COUNT_KEY]).then((data) => {

    bookmarks = Array.isArray(data[BM_KEYS.bookmarks]) ? data[BM_KEYS.bookmarks] : [];
    groups = (data[BM_KEYS.groups] && typeof data[BM_KEYS.groups] === "object") ? data[BM_KEYS.groups] : {};
    lastGroup = typeof data[BM_KEYS.lastGroup] === "string" ? data[BM_KEYS.lastGroup] : "";
    // ensure every bookmark has stable id (needed for drag&drop)
    let changed = false;
    for (const b of bookmarks) {
      if (!b.id) { b.id = genBmId(); changed = true; }
    }
    if (changed) bmSet({ [BM_KEYS.bookmarks]: bookmarks });

    favorites = normalizeFavorites(data[FAV_KEY]);
    const storedCount = clampFavSlotCount(data[FAV_COUNT_KEY]);
    const usedSlots = favorites.reduce((last, item, idx) => (item ? idx + 1 : last), 0);
    favSlotCount = Math.max(storedCount, Math.min(FAV_MAX_SLOTS, Math.max(FAV_MIN_SLOTS, usedSlots)));
    ensureFavoriteCapacity(favSlotCount);
    renderFavoritesWidget();

    renderGroupSelect();
    renderBookmarks();
favSize = (data[FAV_SIZE_KEY] === "large") ? "large" : "small";

applyFavSizeClass();
renderFavoritesWidget();

    if (chrome?.storage?.onChanged) {
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== "local") return;

        if (changes[BM_KEYS.groups]) {
          groups = changes[BM_KEYS.groups].newValue || {};
          renderGroupSelect();
        }
        if (changes[BM_KEYS.bookmarks]) {
          bookmarks = changes[BM_KEYS.bookmarks].newValue || [];
          renderBookmarks();
        }
        if (changes[FAV_KEY]) {
          favorites = normalizeFavorites(changes[FAV_KEY].newValue);
          ensureFavoriteCapacity(favSlotCount);
          renderFavoritesWidget();
          renderBookmarks();
        }
        if (changes[FAV_COUNT_KEY]) {
          favSlotCount = clampFavSlotCount(changes[FAV_COUNT_KEY].newValue);
          ensureFavoriteCapacity(favSlotCount);
          renderFavoritesWidget();
        }
        if (changes[BM_KEYS.lastGroup]) {
          lastGroup = changes[BM_KEYS.lastGroup].newValue || "";
          if (bmGroupSelect && lastGroup && groups[lastGroup]) bmGroupSelect.value = lastGroup;
        }
      });
    }
  });
  // ===== Bookmark ID helper (needed for drag & drop / favorites) =====
  function genBmId(){
    try{
      if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    }catch(e){}
    return "bm_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
  }

  function saveBookmarks() {
    bmSet({ [BM_KEYS.bookmarks]: bookmarks });
  }
  function saveGroups() {
    bmSet({ [BM_KEYS.groups]: groups });
  }

  function normalizeUrl(url) {
    if (!url) return null;

    try {
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
      }
      return new URL(url);
    } catch {
      return null;
    }
  }

  // ======================
  // FAVORITES helpers
  // ======================
  const canonUrl = (u) => (normalizeUrl(u)?.href || String(u || "")).trim();




  async function loadFavorites() {
    const d = await bmGet([FAV_KEY]);
    favorites = normalizeFavorites(d[FAV_KEY]);
  }

  async function saveFavorites() {
    await bmSet({ [FAV_KEY]: favorites });
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slotOfUrl(url) {
    const u = canonUrl(url);
    for (let i = 0; i < favorites.length; i++) {
      const f = favorites[i];
      if (f && canonUrl(f.url) === u) return i;
    }
    return -1;
  }

function renderFavoritesWidget() {
  if (!favSlotsEl) return;
  favSlotsEl.innerHTML = "";

  applyFavSizeClass();

  const slots = getFavSlotCount();
  ensureFavoriteCapacity(slots);

  for (let i = 0; i < slots; i++) {
    const f = favorites[i];
    const row = document.createElement("div");
    row.className = "fav-slot" + (f ? "" : " fav-empty");

    if (f) {
      row.innerHTML = `
        <img class="fav-ico" alt="${escapeHtml(f.title || '')}" src="${resolveBookmarkIcon(f)}" title="${escapeHtml(f.title || '')}">
        <button class="fav-clear" type="button" title="Remove">✕</button>
      `;
      row.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        openUrl(f.url);
      });
      row.querySelector(".fav-clear").addEventListener("click", async (e) => {
        e.stopPropagation();
        await setFavorite(i, null);
        renderBookmarks();
      });
    } else {
      row.innerHTML = `
        <div class="fav-num">+</div>
        <button class="fav-add" type="button" title="Add bookmark">+</button>
      `;
      row.querySelector(".fav-add").addEventListener("click", (e) => {
        e.stopPropagation();
        document.getElementById("workspace")?.classList.add("show-bookmarks");
      });
    }

    favSlotsEl.appendChild(row);
  }
}


  function openUrl(url) {
    const href = canonUrl(url);
    if (!href) return;
    if (chrome?.tabs?.create) chrome.tabs.create({ url: href });
    else window.open(href, "_blank");
  }


  function ensureFavPicker() {
    if (favPicker) return favPicker;
    favPicker = document.createElement("div");
    favPicker.id = "favPicker";
    favPicker.hidden = true;
    document.body.appendChild(favPicker);
    return favPicker;
  }

  function hideFavPicker() {
    if (!favPicker) return;
    favPicker.hidden = true;
    favPicker.innerHTML = "";
    favPickerBm = null;
    if (favPickerCleanup) {
      favPickerCleanup();
      favPickerCleanup = null;
    }
  }

  function showFavPicker(bm, anchorEl) {
    const picker = ensureFavPicker();
    favPickerBm = bm;

   const slots = getFavSlotCount();
const slotBtns = Array.from({ length: slots }, (_, i) => i)
  .map((i) => {
    const cur = favorites[i];
    const name = cur ? (cur.title || cur.url) : "Empty";
    const active = cur && canonUrl(cur.url) === canonUrl(bm.url);
    return `
      <button class="fav-pick-slot ${active ? "is-active" : ""}" type="button" data-slot="${i}">
        <span class="fav-pick-num">${i + 1}</span>
        <span class="fav-pick-name">${escapeHtml(name)}</span>
      </button>
    `;
  })
  .join("");


    picker.innerHTML = `
      <div class="fav-picker-card">
        <div class="fav-picker-title">Pin to Favorites</div>
        <div class="fav-picker-slots">${slotBtns}</div>
        <button class="fav-picker-more" type="button">Add more slots</button>
        <button class="fav-picker-cancel" type="button">Cancel</button>
      </div>
    `;

    picker.hidden = false;

    // position
    const r = anchorEl.getBoundingClientRect();
    const pr = picker.getBoundingClientRect();
    const pad = 10;
    let left = r.right + 10;
    let top = r.top - 6;
    if (left + pr.width > window.innerWidth - pad) left = window.innerWidth - pr.width - pad;
    if (top + pr.height > window.innerHeight - pad) top = window.innerHeight - pr.height - pad;
    if (top < pad) top = pad;
    if (left < pad) left = pad;
    picker.style.left = Math.round(left) + "px";
    picker.style.top = Math.round(top) + "px";

    picker.querySelectorAll(".fav-pick-slot").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const slot = Number(btn.dataset.slot);
        // toggle if already same
        const cur = favorites[slot];
        if (cur && canonUrl(cur.url) === canonUrl(bm.url)) {
          await setFavorite(slot, null);
        } else {
          await setFavorite(slot, bm);
        }
        hideFavPicker();
      });
    });

    picker.querySelector(".fav-picker-more")?.addEventListener("click", async (e) => {
      e.stopPropagation();
      await addMoreFavoriteSlots();
      showFavPicker(bm, anchorEl);
    });

    picker.querySelector(".fav-picker-cancel").addEventListener("click", (e) => {
      e.stopPropagation();
      hideFavPicker();
    });

    const onDocDown = (e) => {
      if (e.target.closest("#favPicker")) return;
      hideFavPicker();
    };
    const onKey = (e) => {
      if (e.key === "Escape") hideFavPicker();
    };

    document.addEventListener("pointerdown", onDocDown);
    document.addEventListener("keydown", onKey);
    favPickerCleanup = () => {
      document.removeEventListener("pointerdown", onDocDown);
      document.removeEventListener("keydown", onKey);
    };
  }

  // Esc закрывает help (старое поведение — оставляю)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("workspace")?.classList.remove("help-open");
      document.getElementById("helpView")?.setAttribute("aria-hidden", "true");
    }
  });

  favAddMoreBtn?.addEventListener("click", async () => {
    await addMoreFavoriteSlots();
  });

  function initHelpPanel() {
    const ws = document.getElementById("workspace");
    const btn = document.getElementById("donateBg");
    const help = document.getElementById("helpView");
    const close = document.getElementById("closeHelp");

    if (!ws || !btn || !help) return;

    const open = () => {
      ws.classList.add("help-open");
      help.setAttribute("aria-hidden", "false");
    };

    const hide = () => {
      ws.classList.remove("help-open");
      help.setAttribute("aria-hidden", "true");
    };

btn.addEventListener("click", open);

    close?.addEventListener("click", hide);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hide();
    });
  }

  // Handle donate button
  const donateBtn = document.getElementById("donateBtn");
  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      window.open("https://www.facebook.com/md.pranto.islam.140", "_blank");
    });
  }

  function renderGroupSelect() {
    if (!bmGroupSelect) return;
    bmGroupSelect.innerHTML = "";

    const names = Object.keys(groups);
    if (names.length === 0) {
      const opt = document.createElement("option");
      opt.textContent = "Create group first";
      opt.disabled = true;
      opt.selected = true;
      bmGroupSelect.appendChild(opt);
      return;
    }

    names.forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      bmGroupSelect.appendChild(opt);
    });

    if (lastGroup && groups[lastGroup]) bmGroupSelect.value = lastGroup;
    else bmGroupSelect.value = names[0];

    lastGroup = bmGroupSelect.value;
    bmSet({ [BM_KEYS.lastGroup]: lastGroup });
  }

  bmGroupSelect?.addEventListener("change", () => {
    bmSet({ [BM_KEYS.lastGroup]: bmGroupSelect.value });
  });

  function getSelectedGroupColor() {
    return document.getElementById("newGroupColor")?.value || "#4f46e5";
  }

  document.getElementById("bmPickIcon")?.addEventListener("click", () => {
    openIconPicker((iconStr) => {
      selectedBmIcon = iconStr || "";
      setIconPreview(selectedBmIcon);
    });
  });
function clampWidgetsBelowSearch() {
  const dashArea = document.getElementById("dashArea");
  const search = document.getElementById("searchCard");
  if (!dashArea || !search) return;

  const gap = 18; // небольшой отступ
  const dashRect = dashArea.getBoundingClientRect();
  const searchRect = search.getBoundingClientRect();

  // нижняя граница search относительно dashArea
  const minTop = (searchRect.bottom - dashRect.top) + gap;

  const widgets = [...dashArea.querySelectorAll(".widget")]
    .filter(el => el.id !== "searchCard");

  for (const w of widgets) {
    // если нет inline top (grid режим) — пропускаем
    const t = parseFloat(w.style.top);
    if (!Number.isFinite(t)) continue;

    if (t < minTop) w.style.top = `${minTop}px`;
  }
}

  function renderBookmarks() {
    if (!bmList) return;
    bmList.innerHTML = "";

    const grouped = {};
    bookmarks.forEach(bm => {
      if (!grouped[bm.group]) grouped[bm.group] = [];
      grouped[bm.group].push(bm);
    });

    const groupNames = Object.keys(groups);
    const namesToRender = groupNames.length ? groupNames : Object.keys(grouped);

    namesToRender.forEach(groupName => {
      const color = groups[groupName]?.color || "#4f46e5";
      const items = grouped[groupName] || [];

      const block = document.createElement("div");
      block.className = "bookmark-group";
      block.dataset.group = groupName;

      block.innerHTML = `
        <h3 class="bookmark-group-title" style="color:${color}">
          <span class="bm-gtxt">${groupName}</span>
          <span class="bm-actions">
            <button class="bm-openall" type="button" title="Open all">⇑</button>
            <button class="del-group" type="button" title="Delete group">×</button>
          </span>
        </h3>
        <ul class="bm-items"></ul>
      `;

      block.querySelector(".bm-openall").onclick = async () => {
        const urls = bookmarks
          .filter(b => b.group === groupName)
          .map(b => {
            const p = normalizeUrl(b.url);
            return p ? p.href : b.url;
          })
          .filter(Boolean);

        if (chrome?.tabs?.create) {
          for (let i = 0; i < urls.length; i++) {
            chrome.tabs.create({ url: urls[i], active: i === 0 });
          }
          return;
        }

        window.open(urls[0], "_blank", "noopener,noreferrer");
        alert("Браузер блокирует Massive opening of tabs. Please start as an extension or enable popups for this page.");
      };

      block.querySelector(".del-group").onclick = () => {
        delete groups[groupName];
        bookmarks = bookmarks.filter(b => b.group !== groupName);
        saveGroups();
        saveBookmarks();
        renderGroupSelect();
        renderBookmarks();
      };

      const ul = block.querySelector(".bm-items");
      // drop zone for moving bookmarks into this group
      const allowDrop = (e) => { e.preventDefault(); block.classList.add("bm-drop"); };
      const clearDrop = () => block.classList.remove("bm-drop");

      block.addEventListener("dragover", allowDrop);
      block.addEventListener("dragleave", clearDrop);
      block.addEventListener("drop", (e) => {
        e.preventDefault();
        clearDrop();

        const bmId = e.dataTransfer.getData("text/bm-id") || e.dataTransfer.getData("text/plain");
        if (!bmId) return;

        // если бросили на конкретный элемент — вставим перед ним (приятно)
        const before = e.target.closest(".bm-item")?.dataset?.bmId || null;
        moveBookmarkToGroup(bmId, groupName, before);
      });

      items.forEach(bm => {
        const li = document.createElement("li");

        const href = normalizeUrl(bm.url)?.href || bm.url;
        const favSlot = slotOfUrl(href);
        const isFav = favSlot !== -1;

        li.classList.add("bm-item");
        li.dataset.url = href;
        // draggable
        li.dataset.bmId = bm.id;
        li.draggable = true;

        li.addEventListener("dragstart", (e) => {
          // не стартуем drag с кнопок (звезда/удаление/и т.п.)
          if (e.target.closest("button, input, textarea, select, a")) {
            e.preventDefault();
            return;
          }
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/bm-id", bm.id);
          li.classList.add("bm-dragging");
        });

        li.addEventListener("dragend", () => {
          li.classList.remove("bm-dragging");
        });

        li.innerHTML = `
          <div class="bm-left">
            <img class="bm-icon" src="${resolveBookmarkIcon(bm)}">
            <div class="bm-title">${bm.title}</div>
          </div>

          <button class="bm-fav ${isFav ? "is-on" : ""}" type="button" title="Favorite">${isFav ? "★" : "☆"}</button>
          <button class="bm-del" type="button" title="Delete">×</button>
        `;

        li.addEventListener("click", (e) => {
          if (e.target.closest("button, a, input, textarea, select, .no-open")) return;

          const url = li.dataset.url;
          if (!url) return;

          if (chrome?.tabs?.create) chrome.tabs.create({ url });
          else window.open(url, "_blank");
        });

        li.querySelector(".bm-icon").onclick = () => {
          openIconPicker((iconStr) => {
            bm.icon = iconStr || "";
            saveBookmarks();
            renderBookmarks();
          });
        };

        li.querySelector(".bm-fav").onclick = async (e) => {
          e.stopPropagation();
          e.preventDefault();

          const entry = {
            title: String(bm.title || "").trim() || href,
            url: href,
            icon: String(bm.icon || ""),
          };

          if (isFav) {
            await setFavorite(favSlot, null);
            return;
          }

          showFavPicker(entry, li.querySelector(".bm-fav"));
        };

        li.querySelector(".bm-del").onclick = async (e) => {
          e.stopPropagation();

          const s = slotOfUrl(href);
          if (s !== -1) await setFavorite(s, null);

          bookmarks = bookmarks.filter(x => x !== bm);
          saveBookmarks();
          renderBookmarks();
        };

        ul.appendChild(li);
      });

      bmList.appendChild(block);
    });
  }
  function moveBookmarkToGroup(bmId, toGroup, beforeId = null) {
    if (!bmId || !toGroup || !groups[toGroup]) return;

    const fromIndex = bookmarks.findIndex(b => b.id === bmId);
    if (fromIndex < 0) return;

    const bm = bookmarks[fromIndex];

    // если бросили в ту же группу и без reorder — ничего не делаем
    if (bm.group === toGroup && !beforeId) return;

    // remove
    bookmarks.splice(fromIndex, 1);

    // change group
    bm.group = toGroup;

    // insert position
    let insertAt = bookmarks.length;

    if (beforeId) {
      const beforeIndex = bookmarks.findIndex(b => b.id === beforeId);
      if (beforeIndex >= 0) insertAt = beforeIndex;
    } else {
      // вставляем в конец целевой группы (после последнего элемента этой группы)
      const lastIdx = [...bookmarks]
        .map((b, i) => ({ b, i }))
        .filter(x => x.b.group === toGroup)
        .map(x => x.i)
        .pop();
      if (typeof lastIdx === "number") insertAt = lastIdx + 1;
    }

    bookmarks.splice(insertAt, 0, bm);

    saveBookmarks();
    renderBookmarks();
  }

  if (addGroupBtn) {
    addGroupBtn.onclick = () => {
      const name = $("newGroupName").value.trim();
      const color = getSelectedGroupColor();
      if (!name || groups[name]) return;

      groups[name] = { color };
      saveGroups();
      renderGroupSelect();
      renderBookmarks();
      $("newGroupName").value = "";
    };
  }

  if (bmForm) {
    bmForm.onsubmit = e => {
      e.preventDefault();
      const group = bmGroupSelect.value;
      if (!groups[group]) return;

      bookmarks.push({
        id: genBmId(),
        title: $("bmTitle").value.trim(),
        url: $("bmUrl").value.trim(),
        group,
        icon: selectedBmIcon || ""
      });

      selectedBmIcon = "";
      setIconPreview("");

      bmForm.reset();
      saveBookmarks();
      renderBookmarks();
    };
  }

  // ======================
  // WELCOME
  // ======================
  const KEY = "user.nickname";
  const bar = document.getElementById("welcomeBar");
  const nameBtn = document.getElementById("welcomeName");
  const input = document.getElementById("welcomeInput");

  if (bar && nameBtn && input) {
    function setName(nick) {
      const clean = (nick || "").trim();
      const finalNick = clean ? clean : "Friend";
      nameBtn.textContent = finalNick;
      localStorage.setItem(KEY, finalNick);
    }

    const saved = localStorage.getItem(KEY);
    if (saved && saved.trim()) nameBtn.textContent = saved.trim();

    function startEdit() {
      bar.classList.add("editing");
      input.value = (localStorage.getItem(KEY) || "").trim() === "Friend" ? "" : (localStorage.getItem(KEY) || "");
      input.focus();
      input.select();
    }

    function finishEdit(save) {
      if (save) setName(input.value);
      bar.classList.remove("editing");
    }

    nameBtn.addEventListener("click", startEdit);

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") finishEdit(true);
      if (e.key === "Escape") finishEdit(false);
    });

    input.addEventListener("blur", () => finishEdit(true));
  }
  /* =========================
     BOOKMARKS SEARCH
  ========================= */

  function initBookmarksSearch() {
    const input = document.getElementById("bmSearch");
    const clearBtn = document.getElementById("bmSearchClear");
    const view = document.getElementById("bookmarksView");

    if (!input || !view) return;

    const getItems = () =>
      Array.from(view.querySelectorAll(".bm-item, .bookmark-item"));

    const getGroups = () =>
      Array.from(view.querySelectorAll(".bm-group, .bookmark-group"));

    function normalize(s) {
      return (s || "").toLowerCase().trim();
    }

    function applySearch(q) {
      const query = normalize(q);
      const items = getItems();
      const groups = getGroups();

      if (!query) {
        // показать всё
        items.forEach(el => (el.style.display = ""));
        groups.forEach(g => (g.style.display = ""));
        return;
      }

      // сначала скрываем всё
      items.forEach(el => (el.style.display = "none"));
      groups.forEach(g => (g.style.display = "none"));

      // показываем совпадения
      items.forEach(el => {
        const title =
          el.dataset.title ||
          el.querySelector(".bm-title")?.textContent ||
          "";

        const url =
          el.dataset.url ||
          el.querySelector(".bm-url")?.textContent ||
          "";

        if (
          normalize(title).includes(query) ||
          normalize(url).includes(query)
        ) {
          el.style.display = "";
          const group = el.closest(".bm-group, .bookmark-group");
          if (group) group.style.display = "";
        }
      });
    }

    // input
    input.addEventListener("input", e => {
      applySearch(e.target.value);
    });

    // Enter → открыть первую найденную
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const first = getItems().find(
          el => el.style.display !== "none"
        );
        if (first) {
          const link = first.querySelector("a");
          if (link) link.click();
        }
      }

      // Esc → очистить
      if (e.key === "Escape") {
        input.value = "";
        applySearch("");
        input.blur();
      }
    });

    // кнопка ×
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        applySearch("");
        input.focus();
      });
    }
  }

  /* ======================
     SIDEBAR / BOOKMARKS PANEL
  ====================== */
  const app = document.getElementById("workspace");
  const openBookmarks = document.getElementById("openBookmarks");
  const closeBookmarks = document.getElementById("closeBookmarks");

  function toggleBookmarks(force) {
    if (!app) return;

    if (force === true) app.classList.add("show-bookmarks");
    else if (force === false) app.classList.remove("show-bookmarks");
    else app.classList.toggle("show-bookmarks");
  }

  openBookmarks?.addEventListener("click", () => toggleBookmarks());
  closeBookmarks?.addEventListener("click", () => toggleBookmarks(false));

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleBookmarks(true);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleBookmarks(false);
  });

  function setupScrollShadow(el) {
    function update() {
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - el.clientHeight;

      el.classList.toggle("shadow-top", scrollTop > 4);
      el.classList.toggle("shadow-bottom", scrollTop < maxScroll - 4);
    }

    el.addEventListener("scroll", update);
    update();
  }

  const bookmarksCard = document.querySelector(".card.bookmarks");
  if (bookmarksCard) setupScrollShadow(bookmarksCard);

  // ======================
  // DATE WIDGET
  // ======================
  let currentCalendarDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));

  function refreshDateWidgetLocale() {
    const w = document.getElementById("dateWeekday");
    const d = document.getElementById("dateDay");
    const m = document.getElementById("dateMonth");
    if (!w || !d || !m) return;

    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    w.textContent = now.toLocaleDateString(getLocale(), { weekday: "long", timeZone: "Asia/Dhaka" }).toUpperCase();
    d.textContent = String(now.getDate());
    m.textContent = now.toLocaleDateString(getLocale(), { month: "short", timeZone: "Asia/Dhaka" }).toUpperCase();
  }

  function updateCalendarWeekdayHeaders() {
    const weekdayEls = document.querySelectorAll(".cal-weekdays > div");
    if (weekdayEls.length !== 7) return;

    const monday = new Date(Date.UTC(2026, 0, 5));
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setUTCDate(monday.getUTCDate() + i);
      weekdayEls[i].textContent = date.toLocaleDateString(getLocale(), { weekday: "short" });
    }
  }

  function startDateWidget() {
    const w = document.getElementById("dateWeekday");
    const d = document.getElementById("dateDay");
    const m = document.getElementById("dateMonth");
    if (!w || !d || !m) return;

    const update = () => {
      refreshDateWidgetLocale();
    };

    update();
    setInterval(update, 60 * 1000);
  }

  function renderCalendar() {
    const grid = document.getElementById("calGrid");
    const title = document.getElementById("calTitle");
    if (!grid || !title) return;

    updateCalendarWeekdayHeaders();

    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));

    title.textContent = currentCalendarDate.toLocaleDateString(getLocale(), { month: "long", year: "numeric" });

    const firstDay = new Date(year, month, 1);
    let dayOfWeek = firstDay.getDay();
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    grid.innerHTML = "";

    for (let i = dayOfWeek - 1; i >= 0; i--) {
      const day = document.createElement("div");
      day.className = "cal-day is-out";
      day.textContent = prevMonthDays - i;
      grid.appendChild(day);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const day = document.createElement("div");
      day.className = "cal-day";
      day.textContent = d;
      
      if (year === today.getFullYear() && month === today.getMonth() && d === today.getDate()) {
        day.classList.add("is-today");
      }
      
      grid.appendChild(day);
    }

    const totalCells = dayOfWeek + daysInMonth;
    const remainingCells = 42 - totalCells;
    for (let d = 1; d <= remainingCells; d++) {
      const day = document.createElement("div");
      day.className = "cal-day is-out";
      day.textContent = d;
      grid.appendChild(day);
    }
  }

  const calPrev = document.getElementById("calPrev");
  const calNext = document.getElementById("calNext");

  calPrev?.addEventListener("click", () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
  });

  calNext?.addEventListener("click", () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
  });

  /* =========================================================
     CUSTOMIZE MODE (НОВОЕ) — drag/resize/hide/save
  ========================================================= */

  function syncLayoutItemStates(){
  document
    .querySelectorAll('#layoutPanel .layout-item input[type="checkbox"]')
    .forEach(cb => {
      const item = cb.closest('.layout-item');
      if (!item) return;

      const sync = () => item.classList.toggle('is-on', cb.checked);
      cb.removeEventListener('change', sync); // можно не надо, но ок
      cb.addEventListener('change', sync);
      sync();
    });
}

// ======================
// PHOTOS WIDGETS (MULTI, persistent, deletable)
// ======================
const PHOTOS_INDEX_KEY = "photos.widgets.v1";          // список инстансов
const PHOTOS_DATA_KEY  = (id) => `photos.data.${id}`; // данные одного инстанса
const PHOTOS_SELECTED_KEY = (id) => `photos.selected.${id}`; // instanceId -> number

const addPhotosBtn = document.getElementById("addPhotosBtn");
const dashArea = document.getElementById("dashArea");
const tpl = document.getElementById("photosWidgetTpl");



function pGet(keys) {
  return new Promise((resolve) => {
    if (hasChromeStorage) chrome.storage.local.get(keys, (res) => resolve(res || {}));
    else {
      const out = {};
      for (const k of keys) {
        try { out[k] = JSON.parse(localStorage.getItem(k)); } catch { out[k] = null; }
      }
      resolve(out);
    }
  });
}

function pSet(obj) {
  return new Promise((resolve) => {
    if (hasChromeStorage) chrome.storage.local.set(obj, () => resolve());
    else {
      for (const [k, v] of Object.entries(obj)) localStorage.setItem(k, JSON.stringify(v));
      resolve();
    }
  });
}
async function getSelectedPhotoIndex(instanceId) {
  const res = await pGet([PHOTOS_SELECTED_KEY(instanceId)]);
  const n = Number(res[PHOTOS_SELECTED_KEY(instanceId)]);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

async function setSelectedPhotoIndex(instanceId, idx) {
  await pSet({ [PHOTOS_SELECTED_KEY(instanceId)]: Number(idx) || 0 });
}


function pRemove(keys) {
  return new Promise((resolve) => {
    if (hasChromeStorage) chrome.storage.local.remove(keys, () => resolve());
    else {
      for (const k of keys) localStorage.removeItem(k);
      resolve();
    }
  });
}

function uid(prefix = "photos") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

async function savePhotosIndex(list) {
  await pSet({ [PHOTOS_INDEX_KEY]: list });
}

async function loadPhotosIndex() {
  const res = await pGet([PHOTOS_INDEX_KEY]);
  return Array.isArray(res[PHOTOS_INDEX_KEY]) ? res[PHOTOS_INDEX_KEY] : [];
}

async function savePhotosData(instanceId, data) {
  await pSet({ [PHOTOS_DATA_KEY(instanceId)]: data });
}

async function loadPhotosData(instanceId) {
  const res = await pGet([PHOTOS_DATA_KEY(instanceId)]);
  const raw = res[PHOTOS_DATA_KEY(instanceId)] || {};
  const images = Array.isArray(raw.images) ? raw.images : [];
  const featured = typeof raw.featured === "string" ? raw.featured : "";
  const positions = raw.positions && typeof raw.positions === "object" ? raw.positions : {};
  return { images, featured, positions };
}

function clampPhotosOffsetY(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 50;
  return Math.max(0, Math.min(100, n));
}

function getFeaturedOffsetY(data) {
  const featured = data?.featured || "";
  if (!featured) return 50;
  return clampPhotosOffsetY(data?.positions?.[featured]);
}

// Get all bundled photos from assets folder
async function getBundledPhotos() {
  const bundledPhotos = [
    'assets/1.jpeg',
    'assets/2.jpeg',
    'assets/wallpaper-aurora.svg',
    'assets/wallpaper-sunset.svg',
    'assets/wallpaper-ocean.svg',
    'assets/wallpaper-night.svg'
  ];

  const pushRange = (start, end, ext) => {
    for (let i = start; i <= end; i += 1) {
      bundledPhotos.push(`assets/${i}.${ext}`);
    }
  };

  pushRange(3, 64, 'jpg');
  pushRange(65, 66, 'png');
  pushRange(67, 77, 'jpg');
  pushRange(78, 80, 'png');
  pushRange(81, 87, 'jpg');
  
  return bundledPhotos;
}

function renderPhotosGrid(widgetEl, data) {
  const grid = widgetEl.querySelector(".photos-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const featured = data?.featured || "";

  for (const src of (data?.images || [])) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    // Store original path for click handling
    img.dataset.photoPath = src;

    if (featured && src === featured) img.classList.add("is-featured");
    grid.appendChild(img);
  }
}
function applyPhotosCover(widgetEl, data) {
  const src = data?.featured || data?.images?.[0] || "";
  if (src) {
    widgetEl.style.setProperty("--photos-bg", `url("${src}")`);
    widgetEl.style.setProperty("--photos-bg-pos-y", `${getFeaturedOffsetY(data)}%`);
  } else {
    widgetEl.style.removeProperty("--photos-bg");
    widgetEl.style.removeProperty("--photos-bg-pos-y");
  }
}

// Widget sizes functions (save and load widget size preferences globally)
function saveWidgetSizes() {
  const sizes = {};
  const dashboard = document.querySelector(".widgets .dashboard");
  if (dashboard) {
    dashboard.querySelectorAll('[data-widget]').forEach(w => {
      if (w.classList.contains('widget-compact')) {
        sizes[w.id] = 'compact';
      }
      if (w.classList.contains('photos-wide')) {
        sizes[w.id] = 'wide';
      }
      if (w.classList.contains('wx-compact')) {
        sizes[w.id] = 'wx-compact';
      }
      if (w.classList.contains('date-wide')) {
        sizes[w.id] = 'date-wide';
      }
      if (w.classList.contains('is-calendar')) {
        sizes[w.id] = 'date-calendar';
      }
      if (w.id === 'searchCard') {
        if (w.classList.contains('search-small')) {
          sizes[w.id] = 'search-small';
        } else if (w.classList.contains('search-medium')) {
          sizes[w.id] = 'search-medium';
        }
      }
    });
  }
  localStorage.setItem('widget.sizes.v1', JSON.stringify(sizes));
}

function loadWidgetSizes() {
  try {
    const sizes = JSON.parse(localStorage.getItem('widget.sizes.v1') || '{}');
    const dashboard = document.querySelector(".widgets .dashboard");
    if (dashboard) {
      dashboard.querySelectorAll('[data-widget]').forEach(w => {
        if (sizes[w.id] === 'compact') {
          w.classList.add('widget-compact');
        }
        if (sizes[w.id] === 'wide') {
          w.classList.add('photos-wide');
        }
        if (sizes[w.id] === 'wx-compact') {
          w.classList.add('wx-compact');
        }
        if (sizes[w.id] === 'date-wide') {
          w.classList.add('date-wide');
        }
        if (sizes[w.id] === 'date-calendar') {
          w.classList.add('date-wide');
          w.classList.add('is-calendar');
          // Render calendar after a small delay to ensure DOM is ready
          setTimeout(() => {
            currentCalendarDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
            renderCalendar();
          }, 100);
        }
        if (w.id === 'searchCard') {
          if (sizes[w.id] === 'search-small' || sizes[w.id] === 'search-compact') {
            w.classList.add('search-small');
            w.classList.remove('search-medium');
          } else if (sizes[w.id] === 'search-medium') {
            w.classList.add('search-medium');
            w.classList.remove('search-small');
          }
        }
      });
    }
  } catch (e) {}
}

async function createPhotosWidget({ mountEl, instanceId, initialData }) {
  if (!tpl?.content) return;

  // клонируем из template
  const node = tpl.content.firstElementChild.cloneNode(true);

  node.dataset.instance = instanceId;
  node.id = instanceId; // чтобы в консоли было видно
  // на всякий случай
  node.classList.add("widget", "photos");

  const input = node.querySelector(".photos-input");
  const btnUpload = node.querySelector('[data-act="upload"]');
  const btnShuffle = node.querySelector('[data-act="shuffle"]');
const btnClose = node.querySelector('[data-act="close"]'); 


  let data = initialData || { images: [], featured: "", positions: {} };
  if (!data.positions || typeof data.positions !== "object") data.positions = {};

  // первичный рендер
  applyPhotosCover(node, data);

  renderPhotosGrid(node, data);
const grid = node.querySelector(".photos-grid");

grid?.addEventListener("click", async (e) => {
  // Allow selection in both edit and normal mode
  const img = e.target.closest("img");
  if (!img) return;

  // Use stored path instead of resolved src URL
  const src = img.dataset.photoPath || img.src;
  if (!src) return;

  // сохраняем featured
  data.featured = src;
  if (!Number.isFinite(Number(data.positions[src]))) data.positions[src] = 50;

  // (опционально) делаем выбранную первой
  data.images = [src, ...data.images.filter(x => x !== src)];
  applyPhotosCover(node, data);
  renderPhotosGrid(node, data);
  await savePhotosData(instanceId, data);
});

  // Upload
 btnUpload?.addEventListener("click", () => {
  if (!document.body.classList.contains("layout-editing")) return;
  input?.click();
});

  input?.addEventListener("change", async () => {
    const files = Array.from(input.files || []);
    if (!files.length) return;
// если "главная" ещё не выбрана — назначаем первую
if (!data.featured && data.images.length) {
  data.featured = data.images[0];
  if (!Number.isFinite(Number(data.positions[data.featured]))) data.positions[data.featured] = 50;
}

    // Читаем в base64 (dataURL) -> сохраняется в storage
    const toDataUrl = (file) =>
      new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result || ""));
        r.onerror = reject;
        r.readAsDataURL(file);
      });

    const newImgs = [];
    for (const f of files) {
      // можно ограничить размер, чтобы storage не раздувался
      // if (f.size > 2_000_000) continue; // пример: игнор > 2MB
      newImgs.push(await toDataUrl(f));
    }

    data.images = [...data.images, ...newImgs];
      // ✅ если главная не выбрана — ставим первую
  if (!data.featured && data.images.length) data.featured = data.images[0];
  if (data.featured && !Number.isFinite(Number(data.positions[data.featured]))) {
    data.positions[data.featured] = 50;
  }
   applyPhotosCover(node, data);
  renderPhotosGrid(node, data);
    await savePhotosData(instanceId, data);

    // сброс input, чтобы можно было загрузить те же файлы снова
    input.value = "";
  });

  // Shuffle (перемешать порядок)
btnShuffle?.addEventListener("click", async () => {
  if (!document.body.classList.contains("layout-editing")) return;

  if (!data.images?.length) return;
  data.images = [...data.images].sort(() => Math.random() - 0.5);

  // если featured пропал (редко) — восстановим
  if (!data.featured && data.images.length) data.featured = data.images[0];
  if (data.featured && !Number.isFinite(Number(data.positions[data.featured]))) {
    data.positions[data.featured] = 50;
  }

  applyPhotosCover(node, data);
  renderPhotosGrid(node, data);
  await savePhotosData(instanceId, data);
});

  // Clear (очистить все фото)
  const btnClear = node.querySelector('[data-act="clear"]');
  btnClear?.addEventListener("click", async () => {
    if (!document.body.classList.contains("layout-editing")) return;
    
    if (!confirm("Delete all photos from this widget?")) return;
    
    data.images = [];
    data.featured = "";
    data.positions = {};
    
    applyPhotosCover(node, data);
    renderPhotosGrid(node, data);
    await savePhotosData(instanceId, data);
  });

  // Size toggle (переключить размер)
  const btnSizeToggle = node.querySelector('[data-act="size-toggle"]');
  btnSizeToggle?.addEventListener("click", (ev) => {
    ev.stopPropagation();
    node.classList.toggle("photos-wide");
    btnSizeToggle.textContent = "⤢";
    syncWidgetPositionSize(node);
    saveWidgetSizes();
  });

  const btnMoveUp = node.querySelector('[data-act="move-up"]');
  const btnMoveDown = node.querySelector('[data-act="move-down"]');
  const OFFSET_STEP = 5;

  async function moveFeaturedPhoto(direction) {
    if (!document.body.classList.contains("layout-editing")) return;
    if (!data?.featured) return;

    const current = getFeaturedOffsetY(data);
    const next = clampPhotosOffsetY(current + (direction * OFFSET_STEP));
    if (!data.positions || typeof data.positions !== "object") data.positions = {};
    data.positions[data.featured] = next;

    applyPhotosCover(node, data);
    await savePhotosData(instanceId, data);
  }

  btnMoveUp?.addEventListener("click", async (ev) => {
    ev.stopPropagation();
    await moveFeaturedPhoto(-1);
  });

  btnMoveDown?.addEventListener("click", async (ev) => {
    ev.stopPropagation();
    await moveFeaturedPhoto(1);
  });





  mountEl.appendChild(node);
  return node;
}

async function addPhotosWidget({ mountEl }) {
  const instanceId = uid("photos");
  const idx = await loadPhotosIndex();
  idx.push(instanceId);
  await savePhotosIndex(idx);

  // Auto-load bundled photos for new widgets
  const bundledPhotos = await getBundledPhotos();
  const data = { 
    images: bundledPhotos, 
    featured: bundledPhotos.length > 0 ? bundledPhotos[0] : "", 
    positions: bundledPhotos.length > 0 ? { [bundledPhotos[0]]: 50 } : {}
  };
  await savePhotosData(instanceId, data);

  return createPhotosWidget({ mountEl, instanceId, initialData: data });
}

async function restorePhotosWidgets({ mountEl }) {
  // 1) удаляем ЛЮБЫЕ старые одиночные photos без instance (например photosCard)
  document.querySelectorAll(".widget.photos").forEach((w) => {
    if (!w.dataset.instance) w.remove();
  });

  // 2) восстанавливаем сохранённые multi-инстансы
  const idx = await loadPhotosIndex();
  for (const instanceId of idx) {
    // если уже есть в DOM — не дублируем
    if (document.getElementById(instanceId)) continue;

    let data = await loadPhotosData(instanceId);
    
    // If widget has no images, auto-load bundled photos
    if (!data.images || data.images.length === 0) {
      const bundledPhotos = await getBundledPhotos();
      data = {
        images: bundledPhotos,
        featured: bundledPhotos.length > 0 ? bundledPhotos[0] : "",
        positions: bundledPhotos.length > 0 ? { [bundledPhotos[0]]: 50 } : {}
      };
      await savePhotosData(instanceId, data);
    }
    
    await createPhotosWidget({ mountEl, instanceId, initialData: data });
  }
}

// ====== STARTUP ======
(async () => {
  if (dashArea) {
    await restorePhotosWidgets({ mountEl: dashArea });
  }

  // Now load and apply layout configuration AFTER widgets are restored
  loadLayoutConfig();
  loadWidgetSizes();
  applyHiddenWidgetsState();
  
  initLayoutCustomizer();
})();

addPhotosBtn?.addEventListener("click", async () => {
  if (!dashArea) return;

  const node = await addPhotosWidget({ mountEl: dashArea });
  if (!node?.id) return;

  // ✅ сказать кастомайзеру: "виджет добавлен"
  document.dispatchEvent(new CustomEvent("layout:widget-added", {
    detail: { id: node.id }
  }));
});



  /* ======================
   NOTES
===================== */
function initNotesWidget() {
  const LIST_KEY = "notes.items.v3"; // [{id,title,text,updatedAt}]
  const uid = () => "n_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);

  const listEl = document.getElementById("notesList");
  const btnAdd = document.getElementById("notesAdd");

  // modal elements
  const modal = document.getElementById("notesModal");
  const modalTitle = document.getElementById("notesModalTitle");
  const modalText = document.getElementById("notesModalText");
  const notesToolbar = document.getElementById("notesToolbar");
  const notesFormatBlock = document.getElementById("notesFormatBlock");
  const notesImageInput = document.getElementById("notesImageInput");
  const modalHint = document.getElementById("notesModalHint");
  const btnSave = document.getElementById("notesModalSave");
  const btnClose = document.getElementById("notesModalClose");
  const btnDelete = document.getElementById("notesModalDelete");

  if (!listEl || !btnAdd || !modal || !modalTitle || !modalText) return;

  let activeId = null; // какой note сейчас открыт в модалке
  const MAX_TITLE_LEN = 60;

  function normalizeNote(raw) {
    const title = typeof raw?.title === "string" ? raw.title : "";
    const text = typeof raw?.text === "string" ? raw.text : "";
    const html = typeof raw?.html === "string" ? raw.html : "";
    const updatedAt = Number(raw?.updatedAt) || Date.now();
    return { id: raw?.id || uid(), title, text, html, updatedAt };
  }

  function textToHtml(text) {
    return String(text || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replace(/\r?\n/g, "<br>");
  }

  function htmlToText(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = String(html || "");
    return (tmp.textContent || "").replace(/\u00A0/g, " ").trim();
  }

  function sanitizeNoteHtml(html) {
    const wrap = document.createElement("div");
    wrap.innerHTML = String(html || "");

    wrap.querySelectorAll("script,style,iframe,object,embed,link,meta").forEach(el => el.remove());
    wrap.querySelectorAll("*").forEach(el => {
      [...el.attributes].forEach(attr => {
        const name = attr.name.toLowerCase();
        const value = String(attr.value || "").trim().toLowerCase();
        if (name.startsWith("on")) el.removeAttribute(attr.name);
        if ((name === "href" || name === "src") && value.startsWith("javascript:")) {
          el.removeAttribute(attr.name);
        }
      });
    });

    return wrap.innerHTML;
  }

  function deriveTitleFromText(text) {
    const firstLine = String(text || "")
      .split(/\r?\n/)
      .map(line => line.trim())
      .find(Boolean) || "";
    return firstLine.slice(0, MAX_TITLE_LEN);
  }

  function effectiveTitle(note) {
    const explicit = String(note?.title || "").trim();
    if (explicit) return explicit.slice(0, MAX_TITLE_LEN);
    const sourceText = note?.text || htmlToText(note?.html || "");
    const derived = deriveTitleFromText(sourceText);
    return derived || "New note";
  }

  function notePreview(text) {
    const cleaned = String(text || "").replace(/\s+/g, " ").trim();
    return cleaned || "No additional text";
  }

  function isSameCalendarDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function humanizeNoteDate(ts) {
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return "";
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (isSameCalendarDay(d, now)) {
      return d.toLocaleTimeString(getLocale(), { hour: "2-digit", minute: "2-digit" });
    }
    if (isSameCalendarDay(d, yesterday)) {
      return "Yesterday";
    }
    return d.toLocaleDateString(getLocale(), { month: "short", day: "numeric" });
  }

function formatDate(ts){
  if (!ts) return "";
  const d = new Date(ts);
  if (Number.isNaN(d.getTime())) return "";

  const date = d.toLocaleDateString(getLocale(), { day:"2-digit", month:"short" });
  const time = d.toLocaleTimeString(getLocale(), { hour:"2-digit", minute:"2-digit" });
  return `${date} · ${time}`;
}

  const loadItems = () => {
    try {
      const arr = JSON.parse(localStorage.getItem(LIST_KEY) || "[]");
      return Array.isArray(arr) ? arr.map(normalizeNote) : [];
    } catch {
      return [];
    }
  };

  const saveItems = (items) => {
    localStorage.setItem(LIST_KEY, JSON.stringify(items));
  };

const upsertItem = (id, patch) => {
  const items = loadItems();
  const idx = items.findIndex(x => x.id === id);
  if (idx >= 0) items[idx] = { ...items[idx], ...patch, updatedAt: Date.now() };
  else items.unshift({ id, title:"", text:"", html:"", ...patch, updatedAt: Date.now() });
  saveItems(items);
};


  const deleteItem = (id) => {
    const items = loadItems().filter(x => x.id !== id);
    saveItems(items);
  };

  const formatTime = (ts) => {
    try {
      const d = new Date(ts);
      return d.toLocaleDateString(undefined, { month: "short", day: "2-digit" });
    } catch {
      return "";
    }
  };
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const renderList = () => {
  const items = loadItems().sort((a,b) => (b.updatedAt||0) - (a.updatedAt||0));
  listEl.innerHTML = "";

  const card = document.getElementById("noteCard");
  if (card) card.style.height = ""; // не трогаем inline высоту виджета

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "notes-item";
    empty.innerHTML = `<div class="notes-item-title">No notes yet</div><div class="notes-item-meta">＋</div>`;
    empty.addEventListener("click", () => createAndOpen());
    listEl.appendChild(empty);
    return;
  }

  for (const it of items) {
    const previewSource = (it.text && it.text.trim()) ? it.text : htmlToText(it.html || "");
    const row = document.createElement("div");
    row.className = "notes-item note-row";
    row.innerHTML = `
      <div class="note-main">
        <div class="note-title">${escapeHtml(effectiveTitle(it))}</div>
        <div class="note-preview">${escapeHtml(notePreview(previewSource))}</div>
      </div>
      <div class="note-date">${escapeHtml(humanizeNoteDate(it.updatedAt) || formatDate(it.updatedAt))}</div>
      <button class="note-del" type="button" title="Delete note" aria-label="Delete note" data-id="${it.id}">✕</button>
    `;

    // клик по строке — открыть заметку
    row.addEventListener("click", () => openModal(it.id));

    // клик по крестику — удалить и НЕ открывать заметку
    const delBtn = row.querySelector(".note-del");
    delBtn.addEventListener("pointerdown", (e) => e.stopPropagation());
    delBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const id = e.currentTarget.dataset.id;
      await deleteItem(id);   // <-- твоя функция удаления
      renderList();
    });

    listEl.appendChild(row);
  }
};


  const openModal = (id) => {
    const items = loadItems();
    const note = items.find(x => x.id === id);
    if (!note) return;

    activeId = id;
    modalTitle.value = note.title || "";
    modalText.innerHTML = sanitizeNoteHtml(note.html || textToHtml(note.text || ""));
    modalHint.textContent = note.updatedAt
      ? `${t("widgets.noteLastEdit", "Last edit:")} ${new Date(note.updatedAt).toLocaleString(getLocale())}`
      : "";
    modal.hidden = false;

    // запретить прокрутку фона
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    setTimeout(() => modalText.focus(), 0);
  };

  const closeModal = () => {
    modal.hidden = true;
    activeId = null;

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  const createAndOpen = () => {
    const items = loadItems();
    const note = { id: uid(), title: "", text: "", html: "", updatedAt: Date.now() };
    saveItems([note, ...items]);
    renderList();
    openModal(note.id);
  };

  const saveActive = () => {
    if (!activeId) return;
    const typedTitle = String(modalTitle.value || "").trim().slice(0, MAX_TITLE_LEN);
    const htmlValue = sanitizeNoteHtml(modalText.innerHTML || "");
    const textValue = htmlToText(htmlValue);
    const resolvedTitle = typedTitle || deriveTitleFromText(textValue);
    upsertItem(activeId, {
      title: resolvedTitle,
      text: textValue,
      html: htmlValue
    });
    // обновим hint
    modalHint.textContent = `${t("widgets.noteSaved", "Saved:")} ${new Date().toLocaleString(getLocale())}`;
    renderList();
  };

  // кнопки
  btnAdd.addEventListener("click", (e) => { e.stopPropagation(); createAndOpen(); });
  btnSave.addEventListener("click", (e) => { e.stopPropagation(); saveActive(); });
  btnClose.addEventListener("click", (e) => { e.stopPropagation(); closeModal(); });

  notesToolbar?.querySelectorAll(".notes-tool-btn").forEach(btn => {
    btn.addEventListener("mousedown", (e) => e.preventDefault());
  });

  function runToolbarCommand(cmd) {
    modalText.focus();

    if (cmd === "link") {
      const url = prompt("Enter URL", "https://");
      if (url) document.execCommand("createLink", false, url.trim());
      return;
    }

    if (cmd === "image") {
      notesImageInput?.click();
      return;
    }

    if (cmd === "table") {
      document.execCommand(
        "insertHTML",
        false,
        "<table><tr><th>Title</th><th>Value</th></tr><tr><td></td><td></td></tr></table><p></p>"
      );
      return;
    }

    if (cmd === "checklist") {
      document.execCommand("insertHTML", false, "<ul><li>☐ </li></ul><p></p>");
      return;
    }

    if (cmd === "blockquote") {
      document.execCommand("formatBlock", false, "blockquote");
      return;
    }

    document.execCommand(cmd, false, null);
  }

  notesToolbar?.addEventListener("click", (e) => {
    const btn = e.target.closest(".notes-tool-btn");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const cmd = btn.dataset.cmd;
    if (cmd) runToolbarCommand(cmd);
    saveActive();
  });

  notesFormatBlock?.addEventListener("change", (e) => {
    const tag = String(e.target.value || "p").toLowerCase();
    modalText.focus();
    document.execCommand("formatBlock", false, tag);
    saveActive();
  });

  notesImageInput?.addEventListener("change", async () => {
    const file = notesImageInput.files?.[0];
    if (!file) return;
    const dataUrl = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result || ""));
      r.onerror = reject;
      r.readAsDataURL(file);
    }).catch(() => "");
    if (dataUrl) {
      modalText.focus();
      document.execCommand("insertImage", false, dataUrl);
      saveActive();
    }
    notesImageInput.value = "";
  });

  btnDelete.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!activeId) return;
    deleteItem(activeId);
    closeModal();
    renderList();
  });

  // закрытие по клику на backdrop
  modal.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.dataset && t.dataset.close === "1") closeModal();
  });

  // Esc = close
  window.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeModal();
    // Ctrl/Cmd+S = save
    if (!modal.hidden && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveActive();
    }
  });

  // автосейв при печати (мягкий debounce)
  let typingTimer = 0;
  modalText.addEventListener("input", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => saveActive(), 350);
  });
  modalTitle.addEventListener("input", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => saveActive(), 350);
  });

  // init
  renderList();
}

  /* ======================
     MUSIC WIDGET
  ====================== */
  function initMusicWidget() {
    const card = document.getElementById("audioCard");
    const statusEl = document.getElementById("audioStatus");
    const useTabBtn = document.getElementById("audioUseTab");
    const embedEl = document.getElementById("audioEmbed");
    const emptyEl = document.getElementById("audioEmpty");

    if (!card || !embedEl || !emptyEl) return;

    const MUSIC_URL_KEY = "music.url";
    const MEDIA_LAST_KEY = "media.lastActiveUrl";
    const MEDIA_LAST_TAB_ID_KEY = "media.lastActiveTabId";
    let currentUrl = "";
    let currentType = "";
    let iframeEl = null;
    let mediaTabId = null;

    function setStatus(key, fallback) {
      if (!statusEl) return;
      statusEl.setAttribute("data-i18n", key);
      statusEl.textContent = t(key, fallback);
    }

    function setUnsupportedState(unsupported) {
      card.classList.toggle("is-unsupported", unsupported);
    }

    function clearEmbed() {
      embedEl.innerHTML = "";
      emptyEl.hidden = false;
      embedEl.appendChild(emptyEl);
      iframeEl = null;
      currentType = "";
      currentUrl = "";
      mediaTabId = null;
      setUnsupportedState(true);
      setStatus("widgets.musicEmpty", "No supported tab found.");
    }

    function buildYouTubeEmbed(urlObj) {
      const host = urlObj.hostname.replace("www.", "");
      let videoId = "";
      let listId = "";

      if (host === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.pathname.startsWith("/shorts/")) {
        videoId = urlObj.pathname.split("/")[2] || "";
      } else if (urlObj.pathname === "/watch") {
        videoId = urlObj.searchParams.get("v") || "";
        listId = urlObj.searchParams.get("list") || "";
      } else if (urlObj.pathname === "/playlist") {
        listId = urlObj.searchParams.get("list") || "";
      }

      const ytBase = "https://www.youtube.com";

      if (listId) {
        return {
          type: "youtube",
          embedUrl: `${ytBase}/embed/videoseries?list=${encodeURIComponent(listId)}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1&fs=1`
        };
      }

      if (!videoId) return null;
      return {
        type: "youtube",
        embedUrl: `${ytBase}/embed/${encodeURIComponent(videoId)}?enablejsapi=1&playsinline=1&rel=0&modestbranding=1&fs=1`
      };
    }

    function buildSpotifyEmbed(urlObj) {
      if (!urlObj.pathname || urlObj.pathname === "/") {
        return {
          type: "spotify",
          embedUrl: "https://open.spotify.com/embed/genre/0JQ5DAqbMKFEC4WFtoNRpw"
        };
      }

      const uriParam = urlObj.searchParams.get("uri") || "";
      if (uriParam.startsWith("spotify:")) {
        const parts = uriParam.split(":");
        if (parts.length >= 3) {
          const type = parts[1];
          const id = parts[2];
          return {
            type: "spotify",
            embedUrl: `https://open.spotify.com/embed/${encodeURIComponent(type)}/${encodeURIComponent(id)}?utm_source=generator`
          };
        }
      }

      const segments = urlObj.pathname.split("/").filter(Boolean);
      if (!segments.length) return null;

      let cleaned = [...segments];

      // Примеры locale-префиксов: /intl-ru/track/... или /ru/track/...
      if (/^intl-[a-z]{2}$/i.test(cleaned[0]) || /^[a-z]{2}(-[a-z]{2})?$/i.test(cleaned[0])) {
        cleaned = cleaned.slice(1);
      }

      // Уже embed-ссылка
      if (cleaned[0] === "embed" && cleaned[1] && cleaned[2]) {
        return {
          type: "spotify",
          embedUrl: `https://open.spotify.com/${cleaned.map(encodeURIComponent).join("/")}`
        };
      }

      let contentType = "";
      let contentId = "";
      let mediaMode = "";

      // user/{userId}/playlist/{playlistId}
      if (cleaned[0] === "user" && cleaned[2] === "playlist" && cleaned[3]) {
        contentType = "playlist";
        contentId = cleaned[3];
      } else if (cleaned[0] === "collection" && cleaned[1] === "playlist" && cleaned[2]) {
        contentType = "playlist";
        contentId = cleaned[2];
      } else if (cleaned[0] && cleaned[1]) {
        contentType = cleaned[0];
        contentId = cleaned[1];
        if ((contentType === "show" || contentType === "episode") && cleaned[2] === "video") {
          mediaMode = "/video";
        }
      }

      const supportedTypes = new Set(["track", "album", "playlist", "artist", "show", "episode", "audiobook"]);
      if (!supportedTypes.has(contentType) || !contentId) {
        return {
          type: "spotify",
          embedUrl: "https://open.spotify.com/embed/genre/0JQ5DAqbMKFEC4WFtoNRpw"
        };
      }

      return {
        type: "spotify",
        embedUrl: `https://open.spotify.com/embed/${encodeURIComponent(contentType)}/${encodeURIComponent(contentId)}${mediaMode}?utm_source=generator`
      };
    }

    function buildSoundCloudEmbed(urlObj) {
      const host = urlObj.hostname.replace("www.", "");
      if (!host.endsWith("soundcloud.com") && host !== "on.soundcloud.com") return null;

      let normalizedUrl = "";
      let pathForCheck = urlObj.pathname || "";
      const blockedRoots = new Set(["/discover", "/home", "/stream", "/you", "/search", "/upload", "/charts"]);

      if (blockedRoots.has(pathForCheck)) return null;

      if (host === "on.soundcloud.com") {
        // Short link: pass through as-is so SoundCloud can resolve it
        normalizedUrl = urlObj.href;
      } else {
        // Use canonical SoundCloud origin + pathname, strip query/hash to avoid invalid URL errors
        const base = "https://soundcloud.com";
        normalizedUrl = `${base}${urlObj.pathname}`;
      }

      // Require at least /user/track or /user/sets/playlist
      const segments = urlObj.pathname.split("/").filter(Boolean);
      if (segments.length < 2) return null;

      return {
        type: "soundcloud",
        embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(normalizedUrl)}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`
      };
    }

    function buildEmbed(url) {
      try {
        const u = new URL(url);
        const host = u.hostname.replace("www.", "");
        if (host.includes("youtube.com") || host === "youtu.be" || host.includes("music.youtube.com")) {
          return buildYouTubeEmbed(u);
        }
        if (host.includes("spotify.com")) {
          return buildSpotifyEmbed(u);
        }
        if (host.includes("soundcloud.com")) {
          return buildSoundCloudEmbed(u);
        }
        if (host === "on.soundcloud.com") {
          return buildSoundCloudEmbed(u);
        }
        return null;
      } catch {
        return null;
      }
    }

    function setEmbed(embedUrl, type, url) {
      embedEl.innerHTML = "";
      emptyEl.hidden = true;

      const frame = document.createElement("iframe");
      frame.id = "audioIframe";
      frame.src = embedUrl;
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      frame.setAttribute("style", "width: 100%; height: 100%; border: none;");
      
      
      embedEl.appendChild(frame);
      iframeEl = frame;
      currentType = type;
      currentUrl = url;
      // Помечаем как unsupported только если это не YouTube, Spotify или SoundCloud
      setUnsupportedState(type !== "youtube" && type !== "spotify" && type !== "soundcloud");
      setStatus("widgets.musicHint", "Using last active tab");
    }

    function setFromUrl(url) {
      const embed = buildEmbed(url || "");
      if (!embed) {
        return false;
      }

      setEmbed(embed.embedUrl, embed.type, url);
      localStorage.setItem(MUSIC_URL_KEY, url);
      return true;
    }

    function isSpotifyEntityUrl(url) {
      if (!url) return false;
      return /open\.spotify\.com\/(intl-[a-z]{2}\/)?(track|album|playlist|artist|show|episode|audiobook)\//i.test(url)
        || /open\.spotify\.com\/[a-z]{2}(?:-[a-z]{2})?\/(track|album|playlist|artist|show|episode|audiobook)\//i.test(url)
        || /open\.spotify\.com\/embed\//i.test(url);
    }

    async function resolveSpotifyNowPlayingUrl(tabId, fallbackUrl = "") {
      if (!chrome?.scripting || typeof tabId !== "number") return fallbackUrl;

      try {
        const results = await chrome.scripting.executeScript({
          target: { tabId },
          func: () => {
            try {
              const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
              if (/open\.spotify\.com\/(track|album|playlist|artist|show|episode|audiobook)\//i.test(canonical)) {
                return canonical;
              }

              const selectors = [
                'a[href*="/playlist/"]',
                '[data-testid="now-playing-widget"] a[href*="/track/"]',
                '[data-testid="now-playing-bar"] a[href*="/track/"]',
                '[data-testid="now-playing-widget"] a[href*="/episode/"]',
                '[data-testid="now-playing-bar"] a[href*="/episode/"]',
                'a[data-testid="context-item-link"][href*="/track/"]',
                'a[data-testid="context-item-link"][href*="/episode/"]',
                'a[href*="open.spotify.com/track/"]',
                'a[href*="open.spotify.com/episode/"]',
                'a[href*="/track/"]'
              ];

              for (const sel of selectors) {
                const node = document.querySelector(sel);
                if (node?.href) return node.href;
              }

              const paramsSearch = new URLSearchParams(location.search || "");
              const uriParam = paramsSearch.get("uri") || "";
              if (uriParam.startsWith("spotify:")) {
                const parts = uriParam.split(":");
                if (parts.length >= 3) {
                  return `https://open.spotify.com/${parts[1]}/${parts[2]}`;
                }
              }

              const href = location.href || "";
              const direct = href.match(/open\.spotify\.com\/(?:intl-[a-z]{2}\/)?track\/([a-zA-Z0-9]+)/i)
                || href.match(/open\.spotify\.com\/[a-z]{2}(?:-[a-z]{2})?\/track\/([a-zA-Z0-9]+)/i)
                || href.match(/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/i);
              if (direct?.[1]) return `https://open.spotify.com/track/${direct[1]}`;

              const paramsHash = new URLSearchParams((location.hash || "").replace(/^#/, ""));
              const uriFromHash = paramsHash.get("uri");
              if (uriFromHash?.startsWith("spotify:track:")) {
                const id = uriFromHash.split(":")[2] || "";
                if (id) return `https://open.spotify.com/track/${id}`;
              }

              return "";
            } catch {
              return "";
            }
          }
        });

        const extracted = results?.[0]?.result;
        if (typeof extracted === "string" && extracted) return extracted;
      } catch {}

      return fallbackUrl;
    }


    async function pickLastMediaTab() {
      if (!chrome?.tabs?.query) {
        clearEmbed();
        return;
      }

      try {
        const mediaFromBg = await new Promise((resolve) => {
          try {
            chrome.storage.local.get([MEDIA_LAST_KEY, MEDIA_LAST_TAB_ID_KEY], (res) => {
              resolve({
                url: res?.[MEDIA_LAST_KEY] || "",
                tabId: typeof res?.[MEDIA_LAST_TAB_ID_KEY] === "number" ? res[MEDIA_LAST_TAB_ID_KEY] : null,
              });
            });
          } catch {
            resolve({ url: "", tabId: null });
          }
        });

        if (mediaFromBg?.url) {
          if (typeof mediaFromBg.tabId === "number") {
            mediaTabId = mediaFromBg.tabId;
          }
          let candidateUrl = mediaFromBg.url;
          if (/spotify\.com/i.test(candidateUrl) && mediaFromBg.tabId !== null) {
            candidateUrl = await resolveSpotifyNowPlayingUrl(mediaFromBg.tabId, candidateUrl);
          }

          const ok = setFromUrl(candidateUrl);
          if (ok) return true;
        }

        const tabs = await chrome.tabs.query({});
        const candidates = Array.isArray(tabs) ? tabs.filter((t) => {
          const u = t.url || "";
          if (!u || u.startsWith("chrome://") || u.startsWith("chrome-extension://")) return false;
          return /youtube\.com|youtu\.be|music\.youtube\.com|spotify\.com|soundcloud\.com/.test(u);
        }) : [];

        candidates.sort((a, b) => (b.lastAccessed || 0) - (a.lastAccessed || 0));

        for (const candidate of candidates) {
          if (!candidate?.url || !candidate?.id) continue;
          mediaTabId = candidate.id;
          let urlToUse = candidate.url;
          if (/spotify\.com/i.test(urlToUse)) {
            urlToUse = await resolveSpotifyNowPlayingUrl(candidate.id, urlToUse);
          }
          if (setFromUrl(urlToUse)) return true;
        }

        clearEmbed();
        return false;
      } catch (err) {
        console.error("Error picking media tab:", err);
        clearEmbed();
        return false;
      }
    }

    // Event listeners
    useTabBtn?.addEventListener("click", () => pickLastMediaTab());
    
    (async () => {
      const ok = await pickLastMediaTab();
      if (ok) return;

      const saved = localStorage.getItem(MUSIC_URL_KEY);
      if (saved && setFromUrl(saved)) return;

      clearEmbed();
    })();
  }



  /* ======================
     INIT CALLS
  ====================== */
  
  // ======================
  // CUSTOMIZE LAYOUT
  // ======================
  const LAYOUT_KEY = "layout.config.v1";
  let hiddenWidgets = new Set();
  let widgetOrder = [];
  let widgetPositions = {};

  function getSearchSizeMode(searchCard) {
    if (!searchCard) return "full";
    if (searchCard.classList.contains("search-small") || searchCard.classList.contains("search-compact")) return "small";
    if (searchCard.classList.contains("search-medium")) return "medium";
    return "full";
  }

  function applySearchSizeMode(searchCard, mode) {
    if (!searchCard) return;
    const normalized = ["full", "medium", "small"].includes(mode) ? mode : "full";
    searchCard.classList.remove("search-compact", "search-medium", "search-small");
    if (normalized === "medium") searchCard.classList.add("search-medium");
    if (normalized === "small") searchCard.classList.add("search-small");
  }

  function updateSearchSizeToggleButton(searchCard, btn) {
    if (!btn) return;
    const mode = getSearchSizeMode(searchCard);
    if (mode === "full") btn.textContent = "F";
    if (mode === "medium") btn.textContent = "M";
    if (mode === "small") btn.textContent = "S";
    btn.title = `Search size: ${mode}`;
  }
  
  function loadLayoutConfig() {
    try {
      const cfg = JSON.parse(localStorage.getItem(LAYOUT_KEY) || "{}");
      hiddenWidgets = new Set(cfg.hidden || []);
      widgetOrder = cfg.order || [];
      widgetPositions = cfg.positions || {};
      
      // Ensure mapCard is hidden by default
      if (!localStorage.getItem(LAYOUT_KEY)) {
        // First time user - hide some widgets by default
        hiddenWidgets.add('mapCard');
        hiddenWidgets.add('audioCard');
      }
    } catch (e) {}
  }
  
  function saveLayoutConfig() {
    const cfg = {
      hidden: Array.from(hiddenWidgets),
      order: widgetOrder,
      positions: widgetPositions
    };
    localStorage.setItem(LAYOUT_KEY, JSON.stringify(cfg));
  }

  function applyHiddenWidgetsState() {
    document.querySelectorAll("[data-widget]").forEach((widget) => {
      const id = widget.id || widget.dataset.widget;
      if (!id) return;

      if (hiddenWidgets.has(id)) {
        widget.classList.add("hidden");
      } else {
        widget.classList.remove("hidden");
      }
    });
  }

  function applyResponsiveWidgetLayout(widget, width, height) {
    if (!widget) return;
    const w = Math.max(120, Number(width) || widget.offsetWidth || 120);
    const h = Math.max(100, Number(height) || widget.offsetHeight || 100);

    const cols = Math.max(1, Math.min(48, Math.floor((w - 24) / 92)));
    const rows = Math.max(1, Math.min(64, Math.floor((h - 64) / 84)));

    widget.style.setProperty("--widget-cols", String(cols));
    widget.style.setProperty("--widget-rows", String(rows));

    const favSlots = widget.querySelector(".fav-slots");
    if (favSlots) {
      const favCols = Math.max(1, Math.min(36, Math.floor((w - 28) / 78)));
      widget.style.setProperty("--fav-cols", String(favCols));
    }

    const photosGrid = widget.querySelector(".photos-grid");
    if (photosGrid) {
      const photoCols = Math.max(2, Math.min(8, Math.floor((w - 30) / 112)));
      widget.style.setProperty("--photos-cols", String(photoCols));
      widget.style.setProperty("--photos-rows", String(rows));
    }
  }

  function syncWidgetPositionSize(widget) {
    if (!widget) return;
    const id = widget.id || widget.dataset.widget;
    if (!id) return;

    const dashArea = document.querySelector(".widgets .dash-area") || document.querySelector(".dash-area");
    if (!dashArea || !dashArea.classList.contains("free-layout")) return;

    const prev = widgetPositions[id] || {};
    const dashRect = dashArea.getBoundingClientRect();

    widget.style.width = "";
    widget.style.height = "";

    requestAnimationFrame(() => {
      const rect = widget.getBoundingClientRect();
      let x = Number.isFinite(prev.x) ? prev.x : rect.left - dashRect.left + dashArea.scrollLeft;
      let y = Number.isFinite(prev.y) ? prev.y : rect.top - dashRect.top + dashArea.scrollTop;

      // Коррекция позиции, чтобы виджет не вылезал за границы экрана
      const dashWidth = dashArea.clientWidth;
      const dashHeight = dashArea.clientHeight;
      let widgetWidth = rect.width;
      let widgetHeight = rect.height;

      // Не поднимаем виджет вверх при увеличении — лучше расширить область
      if (y < 0) {
        y = 0;
      }

      widgetPositions[id] = { x, y, w: widgetWidth, h: widgetHeight };

      if (widget.style.position === "absolute") {
        widget.style.left = `${x}px`;
        widget.style.top = `${y}px`;
        widget.style.setProperty("width", `${widgetWidth}px`, "important");
        widget.style.setProperty("height", `${widgetHeight}px`, "important");
      }

      applyResponsiveWidgetLayout(widget, widgetWidth, widgetHeight);

      // Обновляем минимальную высоту контейнера, чтобы большие виджеты не "улетали" вверх
      let maxBottom = 0;
      dashArea.querySelectorAll(":scope > [data-widget]").forEach(w => {
        const wid = w.id || w.dataset.widget;
        const pos = widgetPositions[wid];
        if (!pos) return;
        const h = Number.isFinite(pos.h) ? pos.h : w.offsetHeight;
        maxBottom = Math.max(maxBottom, pos.y + h);
      });
      if (maxBottom > 0) {
        dashArea.style.minHeight = `${Math.ceil(maxBottom + 40)}px`;
      }

      saveLayoutConfig();
    });
  }
  
  function renderCustomizeList() {
    const list = $("layoutList");
    const menu = $("layoutMenu");
    if (!list || !menu) return;
    
    list.innerHTML = "";
    menu.innerHTML = "";
    
    const widgets = document.querySelectorAll("[data-widget]");
    const widgetIds = Array.from(widgets).map(w => w.id);

    // Create menu items in left sidebar
    const menuItem = document.createElement("button");
    menuItem.className = "layout-menu-item active";
    menuItem.setAttribute("data-i18n", "customize.widgetsButton");
    menuItem.textContent = t("customize.widgetsButton", "Widgets");
    menuItem.dataset.tab = "widgets";
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchLayoutTab("widgets");
    });
    menu.appendChild(menuItem);

    // Actions menu item
    const actionsItem = document.createElement("button");
    actionsItem.className = "layout-menu-item";
    actionsItem.setAttribute("data-i18n", "customize.actionsButton");
    actionsItem.textContent = t("customize.actionsButton", "Actions");
    actionsItem.dataset.tab = "actions";
    actionsItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchLayoutTab("actions");
    });
    menu.appendChild(actionsItem);

    // Theme menu item
    const themeItem = document.createElement("button");
    themeItem.className = "layout-menu-item";
    themeItem.setAttribute("data-i18n", "customize.themeButton");
    themeItem.textContent = t("customize.themeButton", "Theme");
    themeItem.dataset.tab = "theme";
    themeItem.addEventListener("click", (e) => {
      e.preventDefault();
      switchLayoutTab("theme");
    });
    menu.appendChild(themeItem);

    renderThemeTab();

    // Render widgets list
    widgetIds.forEach(id => {
      if (!id) return;
      
      const w = $(id);
      if (!w) return;
      
      const title = w.getAttribute('data-title') || w.querySelector("h2")?.textContent || id;
      const hidden = hiddenWidgets.has(id);
      
      const item = document.createElement("div");
      item.className = "layout-item";
      item.draggable = true;
      item.dataset.id = id;
      
      const name = document.createElement("span");
      name.className = "layout-item-name";
      name.textContent = title;
      
      const toggle = document.createElement("label");
      toggle.className = "layout-item-toggle";

      const toggleInput = document.createElement("input");
      toggleInput.type = "checkbox";
      toggleInput.checked = !hidden;

      const toggleSlider = document.createElement("span");
      toggleSlider.className = "layout-toggle-slider";

      toggleInput.addEventListener("change", (e) => {
        e.stopPropagation();
        if (toggleInput.checked) {
          hiddenWidgets.delete(id);
          w.classList.remove("hidden");
          if (document.body.classList.contains("layout-editing")) {
            document.dispatchEvent(new CustomEvent("layout:widget-shown", {
              detail: { id }
            }));
          }
        } else {
          hiddenWidgets.add(id);
          w.classList.add("hidden");
        }
        saveLayoutConfig();
        renderCustomizeList();
      });

      toggle.addEventListener("pointerdown", (e) => e.stopPropagation());
      toggle.addEventListener("click", (e) => e.stopPropagation());

      toggle.appendChild(toggleInput);
      toggle.appendChild(toggleSlider);
      
      item.appendChild(name);
      item.appendChild(toggle);
      list.appendChild(item);
    });
  }

  const THEME_WALLPAPERS = [
    { id: "default", name: "Default", path: "assets/1.jpeg" },
    { id: "aurora", name: "Aurora", path: "assets/wallpaper-aurora.svg" },
    { id: "sunset", name: "Sunset", path: "assets/wallpaper-sunset.svg" },
    { id: "ocean", name: "Ocean", path: "assets/wallpaper-ocean.svg" },
    { id: "night", name: "Night", path: "assets/wallpaper-night.svg" }
  ];

  const VIDEO_THEMES = [
    { id: "rainy-city", name: "Rainy City", path: "assets/video themes/Cybernetic Assassin In A Rainy City Live Wallpaper - MoeWalls.mp4" },
    { id: "macos-ventura", name: "MacOS Ventura", path: "assets/video themes/MacOS Ventura Live Wallpaper - MoeWalls.mp4" },
    { id: "anime-purple-water", name: "Purple Water", path: "assets/video themes/anime-girl-purple-water-moewalls-com.mp4" }
  ];

  let showAllThemeWallpapers = false;

  function applyThemeWallpaper(path) {
    const src = assetUrl(path);
    applyThemeWallpaperUrl(src);
  }

  function applyThemeWallpaperUrl(src) {
    const prev = loadBgState() || {};
    const focus = prev.focus || { x: 50, y: 50 };

    saveBgState({
      kind: "image",
      value: src,
      focus,
      rot: 0,
      blur: 0,
      sound: false
    });

    setImageBackground(src);
    applyBgFocus(focus, 0);
    renderThemeTab();
  }

  async function applyThemeVideo(path) {
    const src = assetUrl(path);
    await applyThemeVideoUrl(src);
  }

  async function applyThemeVideoUrl(src) {
    const prev = loadBgState() || {};
    const focus = prev.focus || { x: 50, y: 50 };

    saveBgState({
      kind: "video",
      value: src,
      focus,
      rot: 0,
      blur: 0,
      sound: false
    });

    await setVideoBackgroundFromUrl(src);
    applyBgFocus(focus, 0);
    renderThemeTab();
  }

  async function renderThemeTab() {
    const themeTab = $("layoutTabTheme");
    if (!themeTab) return;

    themeTab.innerHTML = "";

    const current = loadBgState();

    // Wallpapers Section
    const title = document.createElement("div");
    title.className = "theme-wallpapers-title";
    title.setAttribute("data-i18n", "customize.wallpapers");
    title.textContent = t("customize.wallpapers", "Wallpapers");

    const grid = document.createElement("div");
    grid.className = "theme-wallpapers-grid";

    const allImages = await getBundledPhotos();
    const allThemeWallpapers = allImages
      .filter((path) => /\.(png|jpe?g|webp|gif|svg)$/i.test(path))
      .map((path, idx) => ({
        id: `asset-${idx + 1}`,
        name: path.split("/").pop() || `Wallpaper ${idx + 1}`,
        path
      }));

    const wallpapersToRender = showAllThemeWallpapers ? allThemeWallpapers : THEME_WALLPAPERS;

    wallpapersToRender.forEach((wallpaper) => {
      const src = assetUrl(wallpaper.path);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "theme-wallpaper-card";
      card.setAttribute("aria-label", wallpaper.name);

      if (current?.kind === "image" && current.value === src) {
        card.classList.add("active");
      }

      const preview = document.createElement("span");
      preview.className = "theme-wallpaper-preview";
      preview.style.backgroundImage = `url(${src})`;

      const label = document.createElement("span");
      label.className = "theme-wallpaper-name";
      label.textContent = wallpaper.name;

      card.appendChild(preview);
      card.appendChild(label);
      card.addEventListener("click", () => applyThemeWallpaper(wallpaper.path));
      grid.appendChild(card);
    });

    const showMoreBtn = document.createElement("button");
    showMoreBtn.type = "button";
    showMoreBtn.className = "theme-show-more-btn";
    showMoreBtn.textContent = showAllThemeWallpapers ? "Show less wallpapers" : "Show more wallpapers";
    showMoreBtn.addEventListener("click", () => {
      showAllThemeWallpapers = !showAllThemeWallpapers;
      renderThemeTab();
    });

    themeTab.appendChild(title);
    themeTab.appendChild(grid);
    themeTab.appendChild(showMoreBtn);

    // Video Themes Section
    const videoTitle = document.createElement("div");
    videoTitle.className = "theme-wallpapers-title";
    videoTitle.style.marginTop = "24px";
    videoTitle.setAttribute("data-i18n", "customize.videoThemes");
    videoTitle.textContent = t("customize.videoThemes", "Video Themes");

    const videoGrid = document.createElement("div");
    videoGrid.className = "theme-wallpapers-grid";

    VIDEO_THEMES.forEach((video) => {
      const src = assetUrl(video.path);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "theme-wallpaper-card";
      card.setAttribute("aria-label", video.name);

      if (current?.kind === "video" && current.value === src) {
        card.classList.add("active");
      }

      const preview = document.createElement("span");
      preview.className = "theme-wallpaper-preview theme-video-preview";
      
      // Use thumbnail if available, otherwise show a placeholder
      if (video.thumbnail) {
        preview.style.backgroundImage = `url(${assetUrl(video.thumbnail)})`;
      } else {
        preview.style.backgroundImage = `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))`;
      }
      
      // Add play icon overlay
      const playIcon = document.createElement("span");
      playIcon.className = "theme-video-play-icon";
      playIcon.textContent = "▶";
      preview.appendChild(playIcon);

      const label = document.createElement("span");
      label.className = "theme-wallpaper-name";
      label.textContent = video.name;

      card.appendChild(preview);
      card.appendChild(label);
      card.addEventListener("click", () => applyThemeVideo(video.path));
      videoGrid.appendChild(card);
    });

    themeTab.appendChild(videoTitle);
    themeTab.appendChild(videoGrid);
  }

  function switchLayoutTab(tabName) {
    const tabs = document.querySelectorAll(".layout-tab");
    const menuItems = document.querySelectorAll(".layout-menu-item");
    
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
    
    menuItems.forEach(item => {
      if (item.dataset.tab === tabName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (tabName === "theme") {
      renderThemeTab();
    }
  }
  
  
  function initLayoutCustomizer() {
    const toggle = $("layoutToggle");
    const done = $("layoutDone");
    const reset = $("layoutReset");
    const panel = $("layoutPanel");
    const dashboard = document.querySelector(".widgets .dashboard");
    const dashArea = dashboard?.querySelector(".dash-area") || document.querySelector(".widgets .dash-area");
    
    loadLayoutConfig();
    
    // Load widget size preferences (after all widgets are loaded)
    loadWidgetSizes();
    
    // Apply saved config on load
    applyHiddenWidgetsState();

    document.addEventListener("layout:widget-shown", (e) => {
      const widgetId = e.detail?.id;
      if (!widgetId) return;
      const widget = document.getElementById(widgetId);
      if (!widget) return;
      if (dashArea?.classList.contains("free-layout")) {
        requestAnimationFrame(() => {
          const dashRect = dashArea?.getBoundingClientRect();
          const containerWidth = dashRect?.width || dashboard?.clientWidth || window.innerWidth;
          const containerHeight = dashRect?.height || dashboard?.clientHeight || window.innerHeight;
          const widgetWidth = widget.offsetWidth || widget.getBoundingClientRect().width || 400;
          const widgetHeight = widget.offsetHeight || widget.getBoundingClientRect().height || 300;
          const centerX = dashArea ? (dashArea.scrollLeft + (containerWidth - widgetWidth) / 2) : (window.innerWidth - widgetWidth) / 2;
          const centerY = dashArea ? (dashArea.scrollTop + (containerHeight - widgetHeight) / 2) : (window.innerHeight - widgetHeight) / 2;

          widgetPositions[widgetId] = {
            x: Math.max(0, centerX),
            y: Math.max(0, centerY),
            w: widgetWidth,
            h: widgetHeight
          };

          applyFreeLayoutPositions();
          saveLayoutConfig();
        });
      }
      setupWidgetControls(widget);
      attachDragHandlers();
    });
    
    function applyWidgetOrder() {
      // Применить сохранённый порядок виджетов
      if (!dashArea || widgetOrder.length === 0) return;
      
      const widgets = Array.from(dashArea.querySelectorAll(":scope > [data-widget]")).filter(w => !w.classList.contains("hidden"));
      const orderedWidgets = [];
      
      // Сначала добавим виджеты в порядке из widgetOrder
      widgetOrder.forEach(id => {
        const w = Array.from(widgets).find(el => el.id === id);
        if (w && !orderedWidgets.includes(w)) orderedWidgets.push(w);
      });
      
      // Потом остальные виджеты в исходном порядке
      widgets.forEach(w => {
        if (!orderedWidgets.includes(w)) orderedWidgets.push(w);
      });
      
      // Применить CSS order для визуального порядка
      orderedWidgets.forEach((w, index) => {
        w.style.order = index;
      });
    }
    
    function setupWidgetControls(widget) {
      if (!widget || widget.classList.contains("hidden")) return;
      
      // Add drag handle
      if (!widget.querySelector(".widget-drag-handle")) {
        const handle = document.createElement("div");
        handle.className = "widget-drag-handle";
        handle.title = "Drag to move";
        handle.textContent = "⋮⋮";
        handle.style.cssText = `
          position: absolute;
          top: 10px;
          right: 48px;
          cursor: grab;
          font-size: 16px;
          font-weight: bold;
          color: rgba(255,255,255,0.85);
          user-select: none;
          padding: 4px 6px;
          border-radius: 8px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.04);
          z-index: 10;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
        const pos = window.getComputedStyle(widget).position;
        if (pos === "static" || !pos) {
          widget.style.position = "relative";
        }
        widget.appendChild(handle);
      }
      
      widget.style.cursor = "grab";

      if (!widget.querySelector('.widget-resize-grip')) {
        const grip = document.createElement('div');
        grip.className = 'widget-resize-grip';
        grip.title = 'Drag to resize';
        grip.textContent = '◢';
        widget.appendChild(grip);
      }

      applyResponsiveWidgetLayout(widget, widget.offsetWidth, widget.offsetHeight);
      
      // Add hide button
      if (!widget.querySelector('.widget-hide-btn')) {
        const hideBtn = document.createElement('button');
        hideBtn.className = 'widget-hide-btn';
        hideBtn.type = 'button';
        hideBtn.title = 'Hide widget';
        hideBtn.innerHTML = '✕';
        hideBtn.addEventListener('click', async (ev) => {
          ev.stopPropagation();
          const id = widget.id || widget.dataset.widget;
          if (!id) return;
          
          if (widget.classList.contains('photos') || widget.dataset.widget === 'photos') {
            try {
              await pRemove([PHOTOS_DATA_KEY(id), PHOTOS_SELECTED_KEY(id)]);
              const idx = await loadPhotosIndex();
              const newIdx = Array.isArray(idx) ? idx.filter(x => x !== id) : [];
              await savePhotosIndex(newIdx);
              widget.remove();
              widgetOrder = widgetOrder.filter(x => x !== id);
              hiddenWidgets.delete(id);
              saveLayoutConfig();
              renderCustomizeList();
            } catch (err) {
              console.error('Failed to remove photos widget', err);
            }
          } else {
            if (hiddenWidgets.has(id)) {
              hiddenWidgets.delete(id);
              widget.classList.remove('hidden');
            } else {
              hiddenWidgets.add(id);
              widget.classList.add('hidden');
            }
            saveLayoutConfig();
            renderCustomizeList();
          }
        });
        widget.appendChild(hideBtn);
      }
      
      // Add resize button for weather
      if (widget.id === 'weather' && !widget.querySelector('.widget-resize-btn')) {
        const resizeBtn = document.createElement('button');
        resizeBtn.className = 'widget-resize-btn';
        resizeBtn.type = 'button';
        resizeBtn.title = 'Toggle compact view';
        resizeBtn.textContent = '⤢';
        resizeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          widget.classList.toggle('widget-compact');
          resizeBtn.textContent = '⤢';
          syncWidgetPositionSize(widget);
          saveWidgetSizes();
        });
        widget.appendChild(resizeBtn);
      }

      // Show size toggle button for date widget
      if (widget.id === 'dateCard') {
        const sizeToggleBtn = widget.querySelector('#btnDateSizeToggle');
        if (sizeToggleBtn) {
          sizeToggleBtn.removeAttribute('hidden');
          sizeToggleBtn.textContent = '⤢';
        }
      }

      // Show size toggle button for weather widget
      if (widget.id === 'weather') {
        const sizeToggleBtn = widget.querySelector('#btnWeatherSizeToggle');
        if (sizeToggleBtn) {
          sizeToggleBtn.removeAttribute('hidden');
          sizeToggleBtn.textContent = '⤢';
        }
      }

      // Show size toggle button for search widget
      if (widget.id === 'searchCard') {
        const sizeToggleBtn = widget.querySelector('#btnSearchSizeToggle');
        if (sizeToggleBtn) {
          sizeToggleBtn.removeAttribute('hidden');
          updateSearchSizeToggleButton(widget, sizeToggleBtn);
        }
      }
    }
    
    function applyFreeLayoutPositions(forceInit = false) {
      if (!dashArea) return;
      const dashRect = dashArea.getBoundingClientRect();
      const widgets = Array.from(dashArea.querySelectorAll(":scope > [data-widget]"));
      
      // Capture current grid positions BEFORE switching to free layout
      widgets.forEach(w => {
        if (w.classList.contains("hidden")) return;
        const id = w.id || w.dataset.widget;
        if (!id) return;
        
        if (!widgetPositions[id] || forceInit) {
          const rect = w.getBoundingClientRect();
          const x = rect.left - dashRect.left + dashArea.scrollLeft;
          const y = rect.top - dashRect.top + dashArea.scrollTop;
          widgetPositions[id] = { x, y, w: rect.width, h: rect.height };
        }
      });
      
      // Apply absolute positions first to avoid visual jump
      dashArea.style.position = "relative";
      let maxBottom = 0;
      widgets.forEach(w => {
        if (w.classList.contains("hidden")) return;
        const id = w.id || w.dataset.widget;
        if (!id) return;
        const pos = widgetPositions[id];
        if (!pos) return;
        
        w.style.position = "absolute";
        w.style.left = `${pos.x}px`;
        w.style.top = `${pos.y}px`;
        if (pos.w) w.style.setProperty("width", `${pos.w}px`, "important");
        if (pos.h) w.style.setProperty("height", `${pos.h}px`, "important");
        applyResponsiveWidgetLayout(w, pos.w || w.offsetWidth, pos.h || w.offsetHeight);
        
        maxBottom = Math.max(maxBottom, pos.y + (pos.h || w.offsetHeight));
      });
      
      // Now enable free layout class (display block, etc.)
      dashArea.classList.add("free-layout");
      
      if (maxBottom > 0) {
        dashArea.style.minHeight = `${Math.ceil(maxBottom + 40)}px`;
      }
    }
    
    // Listen for new widgets being added
    document.addEventListener('layout:widget-added', (e) => {
      const widgetId = e.detail?.id;
      if (!widgetId) return;
      
      const widget = document.getElementById(widgetId);
      if (!widget) return;
      
      // Center the new widget (always) after layout is ready
      requestAnimationFrame(() => {
        const dashRect = dashArea?.getBoundingClientRect();
        const containerWidth = dashRect?.width || dashboard?.clientWidth || window.innerWidth;
        const containerHeight = dashRect?.height || dashboard?.clientHeight || window.innerHeight;
        const widgetWidth = widget.offsetWidth || widget.getBoundingClientRect().width || 400;
        const widgetHeight = widget.offsetHeight || widget.getBoundingClientRect().height || 300;
        const centerX = dashArea ? (dashArea.scrollLeft + (containerWidth - widgetWidth) / 2) : (window.innerWidth - widgetWidth) / 2;
        const centerY = dashArea ? (dashArea.scrollTop + (containerHeight - widgetHeight) / 2) : (window.innerHeight - widgetHeight) / 2;
        
        widgetPositions[widgetId] = {
          x: Math.max(0, centerX),
          y: Math.max(0, centerY),
          w: widgetWidth,
          h: widgetHeight
        };
        
        applyFreeLayoutPositions();
        saveLayoutConfig();
      });
      
      // If in customize mode, setup controls immediately
      if (document.body.classList.contains('layout-editing')) {
        setupWidgetControls(widget);
        attachDragHandlers();
      }
      
      renderCustomizeList();
    });
    
    function clearFreeLayoutStyles() {
      if (!dashArea) return;
      dashArea.classList.remove("free-layout");
      dashArea.style.position = "";
      dashArea.style.minHeight = "";
      dashArea.querySelectorAll(":scope > [data-widget]").forEach(w => {
        w.style.position = "";
        w.style.left = "";
        w.style.top = "";
        w.style.removeProperty("width");
        w.style.removeProperty("height");
        w.style.removeProperty("--widget-cols");
        w.style.removeProperty("--widget-rows");
      });
    }
    
    // Кнопка открытия меню (появляется только в режиме кастомизации)
    const menuBtn = document.createElement("button");
    menuBtn.id = "layoutMenuBtn";
    menuBtn.className = "layout-menu-btn";
    menuBtn.setAttribute("data-i18n", "customize.settingsButton");
    menuBtn.textContent = t("customize.settingsButton", "Settings");
    menuBtn.type = "button";
    menuBtn.title = "Customize menu";
    menuBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 3999;
      display: none !important;
      padding: 12px 16px;
      background: rgba(100,90,255,0.9);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      transition: all 0.2s;
    `;
    document.body.appendChild(menuBtn);
    // Floating Done button (next to menu)
    const doneFloatBtn = document.createElement("button");
    doneFloatBtn.id = "layoutDoneBtn";
    doneFloatBtn.className = "layout-done-btn";
    doneFloatBtn.setAttribute("data-i18n", "customize.done");
    doneFloatBtn.textContent = t("customize.done", "Done");
    doneFloatBtn.type = "button";
    doneFloatBtn.title = "Exit Customize";
    doneFloatBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 110px;
      z-index: 3999;
      display: none !important;
    `;
    document.body.appendChild(doneFloatBtn);
    // ensure hidden state even if CSS toggles are present on load
    try { menuBtn.style.setProperty("display", "none", "important"); } catch(e){}
    try { doneFloatBtn.style.setProperty("display", "none", "important"); } catch(e){}
    
    // Переключение панели меню
    menuBtn.addEventListener("click", () => {
      const isOpen = panel?.getAttribute("data-open") === "1";
      if (isOpen) {
        panel?.setAttribute("data-open", "0");
        document.body.classList.remove("drawer-open");
      } else {
        panel?.setAttribute("data-open", "1");
        document.body.classList.add("drawer-open");
        renderCustomizeList();
        switchLayoutTab("widgets");
      }
    });
    
    // Включить/выключить режим редактирования по повторному клику
    toggle?.addEventListener("click", () => {
      if (document.body.classList.contains("layout-editing")) {
        // второй клик — выйти из режима
        closeEditing();
        return;
      }

      document.body.classList.add("layout-editing");
      // force visible (use inline !important to override CSS if needed)
      menuBtn.style.setProperty("display", "flex", "important");
      doneFloatBtn.style.setProperty("display", "flex", "important");
      
      // Switch to free layout mode
      applyFreeLayoutPositions(true);

      // Setup widget controls (handles, buttons)
      if (dashboard) {
        dashboard.querySelectorAll("[data-widget]").forEach(w => {
          setupWidgetControls(w);
        });
        attachDragHandlers();
      }

      // Initialize list but keep panel closed until user presses Widgets button
      renderCustomizeList();
      panel?.setAttribute("data-open", "0");
      document.body.classList.remove("drawer-open");
    });
    
    // Functions are now defined globally, not here
    
    function closeEditing() {
      document.body.classList.remove("layout-editing");
      document.body.classList.remove("drawer-open");
      panel?.setAttribute("data-open", "0"); // Закрыть панель
      // force-hide with inline !important to avoid stylesheet overrides
      menuBtn.style.setProperty("display", "none", "important");
      doneFloatBtn.style.setProperty("display", "none", "important");
      saveLayoutConfig();

      // Вернуть исходный курсор и удалить ручки, сбросить стили
      if (dashboard) {
        dashboard.querySelectorAll("[data-widget]").forEach(w => {
          w.style.cursor = "";
          w.style.opacity = "";
          w.style.transform = "";
          w.style.zIndex = "";
          // Удалить ручку
          w.querySelector(".widget-drag-handle")?.remove();
          // Удалить кнопку скрытия
          w.querySelector('.widget-hide-btn')?.remove();
          // Удалить кнопку resize
          w.querySelector('.widget-resize-btn')?.remove();
          // Удалить grip resize
          w.querySelector('.widget-resize-grip')?.remove();
          // Скрыть кнопку размера для даты
          const dateToggle = w.querySelector('#btnDateSizeToggle');
          if (dateToggle) dateToggle.hidden = true;
          // Скрыть кнопку размера для погоды
          const weatherToggle = w.querySelector('#btnWeatherSizeToggle');
          if (weatherToggle) weatherToggle.hidden = true;
        });
      }
    }

    // Panel Done: close only the panel, keep Customize mode active
    done?.addEventListener("click", () => {
      panel?.setAttribute("data-open", "0");
      document.body.classList.remove("drawer-open");
    });
    
    // Bottom Done button: close the panel only (same as top Done)
    const doneBottomBtn = $("layoutDoneBtn");
    doneBottomBtn?.addEventListener("click", () => {
      panel?.setAttribute("data-open", "0");
      document.body.classList.remove("drawer-open");
    });
    
    // floating Done
    doneFloatBtn.addEventListener("click", () => closeEditing());
    
    // Language selector
    const languageSelector = $("languageSelector");
    languageSelector?.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });

    // Sidebar mode toggle
    const sidebarModeToggle = $("sidebarModeToggle");
    sidebarModeToggle?.addEventListener("click", () => {
      const next = getSidebarMode() === SIDEBAR_MODE_STATIC
        ? SIDEBAR_MODE_DYNAMIC
        : SIDEBAR_MODE_STATIC;
      applySidebarMode(next);
    });
    
    // Сброс на дефолт
    reset?.addEventListener("click", () => {
      hiddenWidgets.clear();
      // Hide photos, map and music by default
      hiddenWidgets.add('mapCard');
      hiddenWidgets.add('audioCard');
      const photosWidgets = document.querySelectorAll('[data-widget="photos"]');
      photosWidgets.forEach(w => hiddenWidgets.add(w.id));
      
      widgetOrder = [];
      widgetPositions = {};
      saveLayoutConfig();
      document.querySelectorAll("[data-widget]").forEach(w => {
        if (hiddenWidgets.has(w.id)) {
          w.classList.add("hidden");
        } else {
          w.classList.remove("hidden");
        }
      });
      applyWidgetOrder();
      clearFreeLayoutStyles();
      
      // Reinitialize free layout and drag handlers if in customize mode
      if (document.body.classList.contains("layout-editing")) {
        applyFreeLayoutPositions(true);
        dashboard.querySelectorAll("[data-widget]").forEach(w => {
          setupWidgetControls(w);
        });
        attachDragHandlers();
      }

      const manualAfterReset = weatherManualGet();
      const weatherCardAfterReset = document.getElementById("weather");
      const hasManualAfterReset = manualAfterReset?.lat != null && manualAfterReset?.lon != null;
      weatherCardAfterReset?.classList.toggle("weather-manual-selected", hasManualAfterReset);
      
      renderCustomizeList();
    });
    
    // Pointer-based dragging system (no HTML5 drag-and-drop)
    let isDragging = false;
    
    function startDrag(e, widget) {
      if (!document.body.classList.contains("layout-editing")) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      
      isDragging = true;
      
      try {
        widget.setPointerCapture?.(e.pointerId);
      } catch {}
      
      widget.style.opacity = "0.6";
      widget.style.transform = "scale(0.98)";
      widget.style.cursor = "grabbing";
      widget.style.zIndex = "1000";
      
      const id = widget.id || widget.dataset.widget;
      const startX = e.clientX;
      const startY = e.clientY;
      const container = dashArea || dashboard;
      const dashRect = container.getBoundingClientRect();
      const currentLeft = parseFloat(widget.style.left || "0");
      const currentTop = parseFloat(widget.style.top || "0");
      const startLeft = Number.isFinite(currentLeft) ? currentLeft : (widget.getBoundingClientRect().left - dashRect.left);
      const startTop = Number.isFinite(currentTop) ? currentTop : (widget.getBoundingClientRect().top - dashRect.top);
      
      const onMove = (ev) => {
        if (!isDragging) return;
        
        const deltaX = ev.clientX - startX;
        const deltaY = ev.clientY - startY;
        
        let newLeft = startLeft + deltaX;
        let newTop = startTop + deltaY;
        
        const availableWidth = Math.max(container.clientWidth, container.scrollWidth);
        const availableHeight = Math.max(container.clientHeight, container.scrollHeight);
        const maxLeft = Math.max(0, availableWidth - widget.offsetWidth);
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, newTop);
        
        widget.style.left = `${newLeft}px`;
        widget.style.top = `${newTop}px`;
        
        // Grow container if needed so widgets can move downward
        const neededHeight = newTop + widget.offsetHeight + 40;
        if (container.scrollHeight < neededHeight) {
          container.style.minHeight = `${Math.ceil(neededHeight)}px`;
        }
        
        if (id) {
          widgetPositions[id] = {
            x: newLeft,
            y: newTop,
            w: widget.offsetWidth,
            h: widget.offsetHeight
          };
        }
      };
      
      const onUp = () => {
        isDragging = false;
        
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerup", onUp);
        document.removeEventListener("pointercancel", onUp);
        
        widget.style.opacity = "1";
        widget.style.transform = "";
        widget.style.cursor = "grab";
        widget.style.zIndex = "";
        
        // Save final position
        saveLayoutConfig();
      };
      
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
      document.addEventListener("pointercancel", onUp);
    }

    function startResize(e, widget) {
      if (!document.body.classList.contains("layout-editing")) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();

      const id = widget.id || widget.dataset.widget;
      if (!id) return;

      const container = dashArea || dashboard;
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = widget.offsetWidth;
      const startH = widget.offsetHeight;
      const minW = 80;
      const minH = 70;
      const maxW = 5000;
      const maxH = 5000;

      widget.style.zIndex = "1100";

      const onMove = (ev) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;

        const nextW = Math.max(minW, Math.min(maxW, startW + dx));
        const nextH = Math.max(minH, Math.min(maxH, startH + dy));

        widget.style.setProperty("width", `${nextW}px`, "important");
        widget.style.setProperty("height", `${nextH}px`, "important");
        applyResponsiveWidgetLayout(widget, nextW, nextH);

        const prev = widgetPositions[id] || { x: 0, y: 0 };
        widgetPositions[id] = {
          x: Number.isFinite(prev.x) ? prev.x : parseFloat(widget.style.left || "0") || 0,
          y: Number.isFinite(prev.y) ? prev.y : parseFloat(widget.style.top || "0") || 0,
          w: nextW,
          h: nextH
        };

        const neededHeight = widgetPositions[id].y + nextH + 40;
        if (container.scrollHeight < neededHeight) {
          container.style.minHeight = `${Math.ceil(neededHeight)}px`;
        }
      };

      const onUp = () => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerup", onUp);
        document.removeEventListener("pointercancel", onUp);
        widget.style.zIndex = "";
        saveLayoutConfig();
      };

      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
      document.addEventListener("pointercancel", onUp);
    }
    
    // Attach drag handlers to all widget handles
    function attachDragHandlers() {
      if (!dashboard) return;
      
      dashboard.querySelectorAll(".widget-drag-handle").forEach(handle => {
        const widget = handle.closest("[data-widget]");
        if (!widget) return;
        
        // Remove old listeners by cloning
        const newHandle = handle.cloneNode(true);
        handle.replaceWith(newHandle);
        
        newHandle.addEventListener("pointerdown", (e) => startDrag(e, widget));
      });

      dashboard.querySelectorAll(".widget-resize-grip").forEach(grip => {
        const widget = grip.closest("[data-widget]");
        if (!widget) return;

        const nextGrip = grip.cloneNode(true);
        grip.replaceWith(nextGrip);
        nextGrip.addEventListener("pointerdown", (e) => startResize(e, widget));
      });
    }
    
    // Восстановить порядок при загрузке
    applyWidgetOrder();
    if (Object.keys(widgetPositions).length > 0) {
      applyFreeLayoutPositions();
    } else {
      clearFreeLayoutStyles();
    }
  }
  
  startDateWidget();
  renderCalendar();
  startClock();



  enableKineticScroll(document.querySelector(".widgets .dashboard"));
  enableKineticScroll(document.querySelector(".bookmarks-view .card.bookmarks"));

  renderGroupSelect();
  applySavedOrDefaultBackground();
  initBgPopover();
  renderBookmarks();
initGeoWidgetsGated();   // <-- вместо initGeoMap/initWeather
initNotesWidget();
  initMusicWidget();

  // Weather size toggle
  const btnWeatherSizeToggle = document.getElementById("btnWeatherSizeToggle");
  const weatherWidget = document.getElementById("weather");
  btnWeatherSizeToggle?.addEventListener("click", (ev) => {
    ev.stopPropagation();
    weatherWidget?.classList.toggle("wx-compact");
    btnWeatherSizeToggle.textContent = "⤢";
    syncWidgetPositionSize(weatherWidget);
    saveWidgetSizes();
  });

  // Date size toggle
  const btnDateSizeToggle = document.getElementById("btnDateSizeToggle");
  const dateWidget = document.getElementById("dateCard");
  btnDateSizeToggle?.addEventListener("click", (ev) => {
    ev.stopPropagation();
    dateWidget?.classList.toggle("date-wide");
    dateWidget?.classList.toggle("is-calendar");
    btnDateSizeToggle.textContent = "⤢";
    
    if (dateWidget?.classList.contains("is-calendar")) {
      currentCalendarDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
      renderCalendar();
    }
    syncWidgetPositionSize(dateWidget);
    saveWidgetSizes();
  });

  // Weather unit toggle (Celsius/Fahrenheit)
  const layoutWeatherUnitToggle = document.getElementById("layoutWeatherUnitToggle");

  function updateWeatherUnitButtons(unit) {
    const text = unit === 'C' ? '°C' : '°F';
    if (layoutWeatherUnitToggle) layoutWeatherUnitToggle.textContent = text;
  }

  function toggleWeatherUnit(ev) {
    ev?.stopPropagation?.();
    const currentUnit = localStorage.getItem('weather.unit') || 'C';
    const newUnit = currentUnit === 'C' ? 'F' : 'C';
    localStorage.setItem('weather.unit', newUnit);
    updateWeatherUnitButtons(newUnit);
    
    // Update temperature display immediately
    const weatherWidget = document.getElementById("weather");
    const tmpEl = document.getElementById("weatherTemp");
    const tempC = parseFloat(weatherWidget?.dataset.tempC);
    
    if (tmpEl && !isNaN(tempC)) {
      const displayTemp = newUnit === 'F' ? Math.round((tempC * 9/5) + 32) : Math.round(tempC);
      tmpEl.textContent = `${displayTemp}°${newUnit}`;
    }
  }

  layoutWeatherUnitToggle?.addEventListener("click", toggleWeatherUnit);

  // Set initial unit toggle button text
  const initialUnit = localStorage.getItem('weather.unit') || 'C';
  updateWeatherUnitButtons(initialUnit);

  // Search size toggle
  const btnSearchSizeToggle = document.getElementById("btnSearchSizeToggle");
  const searchCard = document.getElementById("searchCard");
  
  // Load saved search size preference
  const savedSearchSize = localStorage.getItem('search.size');
  if (searchCard) {
    const normalized =
      (savedSearchSize === 'small' || savedSearchSize === 'compact') ? 'small' :
      (savedSearchSize === 'medium') ? 'medium' :
      'full';
    applySearchSizeMode(searchCard, normalized);
    updateSearchSizeToggleButton(searchCard, btnSearchSizeToggle);
  }
  
  btnSearchSizeToggle?.addEventListener("click", (ev) => {
    ev.stopPropagation();
    if (!searchCard) return;
    const curr = getSearchSizeMode(searchCard);
    const next = curr === 'full' ? 'medium' : curr === 'medium' ? 'small' : 'full';
    applySearchSizeMode(searchCard, next);
    updateSearchSizeToggleButton(searchCard, btnSearchSizeToggle);
    localStorage.setItem('search.size', next);
    syncWidgetPositionSize(searchCard);
    saveWidgetSizes();
  });

  initHelpPanel();
  initBookmarksSearch();
  
  // First time tutorial
  initFirstTimeTutorial();
  initReviewFlow();
  
  window.addEventListener("resize", () => {
    const st = loadBgState?.();
    if (st) applyBgFocus(st.focus, st.rot);
  });
});

/* ======================
   FIRST TIME TUTORIAL
====================== */
function showTutorialModal() {
  const modal = document.getElementById("tutorialModal");
  
  if (!modal) {
    return;
  }
  
  // Show modal
  modal.hidden = false;
}

function initFirstTimeTutorial() {
  const TUTORIAL_SEEN_KEY = "tutorial.seen.v1";
  
  // Check if tutorial has been shown before
  const hasSeenTutorial = localStorage.getItem(TUTORIAL_SEEN_KEY);
  
  const modal = document.getElementById("tutorialModal");
  const closeBtn = document.getElementById("tutorialClose");
  const gotItBtn = document.getElementById("tutorialGotIt");
  
  if (!modal || !closeBtn || !gotItBtn) {
    return;
  }
  
  // Function to close tutorial and mark as seen
  function closeTutorial() {
    modal.hidden = true;
    localStorage.setItem(TUTORIAL_SEEN_KEY, "1");
  }
  
  // Close button handler
  closeBtn.addEventListener("click", closeTutorial);
  
  // Got it button handler
  gotItBtn.addEventListener("click", closeTutorial);
  
  // Close on backdrop click
  modal.querySelector(".tutorial-backdrop")?.addEventListener("click", closeTutorial);
  
  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") {
      closeTutorial();
    }
  });
  
  // Show modal on first visit after a short delay
  if (!hasSeenTutorial) {
    setTimeout(() => {
      modal.hidden = false;
    }, 500);
  }
  
  // Setup manual tutorial button
  const tutorialBtn = document.getElementById("donateBg");
  if (tutorialBtn) {
    tutorialBtn.addEventListener("click", showTutorialModal);
  }
}

/* ======================
   REVIEW FLOW (After one update)
====================== */
function initReviewFlow() {
  const modal = document.getElementById("reviewModal");
  const closeBtn = document.getElementById("reviewClose");
  const yesBtn = document.getElementById("reviewYes");
  const noBtn = document.getElementById("reviewNo");

  if (!modal || !closeBtn || !yesBtn || !noBtn) return;

  const REVIEW_DONE_VER_KEY = "review.doneVersion.v1";
  const REVIEW_PENDING_VER_KEY = "review.pendingVersion.v1";
  const REVIEW_LAST_VER_KEY = "review.lastVersion.v1";
  const REVIEW_SHOWN_FALLBACK_KEY = "review.shownFallback.v1";
  const REVIEW_UPDATE_COUNT_KEY = "review.updateCount.v1";

  const legacyDone = localStorage.getItem("review.done.v1") === "1";
  if (legacyDone && !localStorage.getItem(REVIEW_DONE_VER_KEY)) {
    const curVer = chrome?.runtime?.getManifest?.().version || "0";
    localStorage.setItem(REVIEW_DONE_VER_KEY, curVer);
  }
  localStorage.removeItem("review.done.v1");
  localStorage.removeItem("review.pending.v1");

  const currentVersion = chrome?.runtime?.getManifest?.().version || "0";
  const lastVersion = localStorage.getItem(REVIEW_LAST_VER_KEY);
  const pendingVersion = localStorage.getItem(REVIEW_PENDING_VER_KEY);
  const doneVersion = localStorage.getItem(REVIEW_DONE_VER_KEY);

  if (doneVersion === currentVersion) return;

  if (!lastVersion) {
    localStorage.setItem(REVIEW_LAST_VER_KEY, currentVersion);
    localStorage.setItem(REVIEW_SHOWN_FALLBACK_KEY, "1");
    return;
  }

  const show = () => {
    setTimeout(() => {
      modal.hidden = false;
    }, 600);
  };

  if (pendingVersion === currentVersion) {
    show();
  } else if (lastVersion !== currentVersion) {
    const count = parseInt(localStorage.getItem(REVIEW_UPDATE_COUNT_KEY) || "0", 10) + 1;
    localStorage.setItem(REVIEW_UPDATE_COUNT_KEY, String(count));
    localStorage.setItem(REVIEW_LAST_VER_KEY, currentVersion);

    if (count >= 10) {
      localStorage.setItem(REVIEW_PENDING_VER_KEY, currentVersion);
      localStorage.setItem(REVIEW_UPDATE_COUNT_KEY, "0");
      show();
    }
  } else if (!pendingVersion && !doneVersion && !localStorage.getItem(REVIEW_SHOWN_FALLBACK_KEY)) {
    localStorage.setItem(REVIEW_SHOWN_FALLBACK_KEY, "1");
  }

  const STORE_URL = "https://chromewebstore.google.com/detail/glass-new-tab-dashboard/iphblfpnippelmibidfaejanmnhcjdee/reviews?utm_source=item-share-cb";
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSctBRzJP_8yJ7lSeXaAnrUnrygR0hA-z073hjjwg6ke_4pJlQ/viewform?usp=dialog";

  const finish = () => {
    modal.hidden = true;
    localStorage.setItem(REVIEW_DONE_VER_KEY, currentVersion);
    localStorage.removeItem(REVIEW_PENDING_VER_KEY);
  };

  yesBtn.addEventListener("click", () => {
    finish();
    window.open(STORE_URL, "_blank", "noopener");
  });

  noBtn.addEventListener("click", () => {
    finish();
    window.open(FORM_URL, "_blank", "noopener");
  });

  closeBtn.addEventListener("click", finish);
  modal.querySelector(".review-backdrop")?.addEventListener("click", finish);
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") finish();
  });
}
