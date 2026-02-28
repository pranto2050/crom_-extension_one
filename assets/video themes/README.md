# Video Themes

This folder contains video themes that can be selected from the Theme settings.

## How to Add Videos

1. Place your video files (MP4, WebM, or OGG format) in this folder
2. Recommended: Keep videos under 25 seconds for best performance
3. Optional: Create thumbnail images (JPG or PNG) with the same name as your video + "-thumb" suffix
   - Example: `ocean-waves.mp4` → `ocean-waves-thumb.jpg`
4. Update the `VIDEO_THEMES` array in `newtab.js` to include your new video:

```javascript
const VIDEO_THEMES = [
  { 
    id: "your-video-id", 
    name: "Display Name", 
    path: "assets/video themes/your-video.mp4",
    thumbnail: "assets/video themes/your-video-thumb.jpg" // optional
  },
  // ... other videos
];
```

## Example Videos (Not included)

You can add videos like:
- Ocean waves
- Rain
- Fireplace
- Northern lights
- Starry sky
- Clouds moving
- Waterfall

## Tips

- Use compressed videos to reduce file size
- Optimize videos for web (H.264 codec for MP4)
- Create square or 16:9 aspect ratio thumbnails
- Test videos on different screen sizes
