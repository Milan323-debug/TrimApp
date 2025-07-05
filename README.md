# TrimApp

A modern, mobile-friendly video trimming app built with Expo, React Native, and FFmpegKit. Easily pick, trim, and preview videos with a beautiful, accessible UI and forest-inspired theme.
## 📱 App Interface Screenshots

<table>
  <tr>
    <td>
      <img src="![WhatsApp Image 2025-07-05 at 17 25 42_03be5541](https://github.com/user-attachments/assets/c20195c2-c94c-41a8-9a1c-a753c0c3f089)" width="200"/><br/>
      <sub>Video Picker Screen</sub>
    </td>
    <td>
      <img src="![WhatsApp Image 2025-07-05 at 17 25 42_721c540e](https://github.com/user-attachments/assets/b6d63480-57dd-48b6-8397-a14ede39f835)" width="200"/><br/>
      <sub>Video Trimmer Screen</sub>
    </td>
    <td>
      <img src="![WhatsApp Image 2025-07-05 at 17 25 41_d7ac4d5e](https://github.com/user-attachments/assets/ede9d84a-4bb1-450f-bca1-a6b8dcc83a1a)" width="200"/><br/>
      <sub>Preview Screen</sub>
    </td>
  </tr>
</table>

## Features

- **Video Picker:**
  - Select videos from your gallery or record new ones with the camera.
  - Clean, touch-friendly UI with animated, accessible buttons.
- **Video Trimmer:**
  - Modern dual-thumb slider for selecting trim range.
  - Fast, reliable trimming using FFmpegKit (native module).
  - Safe area support and centralized theming.
- **Preview Screen:**
  - Instantly preview your trimmed video in a stylish frame.
  - Full-screen playback with smooth controls.
  - Option to download the trimmed video to your device.
- **Centralized Styles:**
  - All styles and color themes are managed in the `assets/styles` and `constants/colors.js` files for easy customization.
- **Accessibility:**
  - High-contrast text, large touch targets, and WCAG-compliant color palette.

## Project Structure

```
TrimApp/
  assets/
    styles/
      picker.styles.js
      trim.styles.js
      preview.styles.js
    ...
  components/
    SafeScreen.jsx
  constants/
    colors.js
  screens/
    VideoPickerScreen.js
    VideoTrimScreen.js
    VideoPreviewScreen.js
  App.js
  ...
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Build a custom Expo Dev Client:**
   This app uses native modules (FFmpegKit, expo-video). You must run it in a custom dev client or a full build:
   ```sh
   eas build --profile development --platform android
   # or
   eas build --profile development --platform ios
   # or
   eas dev --profile development
   ```
   Then install the dev client on your device and run:
   ```sh
   npx expo start --dev-client
   ```

3. **Run the app:**
   - Open the app in your custom dev client.
   - Pick or record a video, trim it, and preview the result.

## Requirements
- Node.js & npm/yarn
- Expo CLI & EAS CLI
- Android/iOS device or emulator (with custom dev client)

## Customization
- Change theme colors in `constants/colors.js`.
- Update styles in `assets/styles/`.
- Replace icons or adjust UI as needed for your brand.

## License

MIT
