# Ligma Design

A lightweight browser-based design studio you can host on GitHub Pages.

## Features
- **Password Protection**: Built-in login screen (default password: `ligma123`). Change it anytime via Settings.
- **Pixel-Accurate HTML Frames**: Paste raw HTML into a frame at exact target dimensions with zero layout distortion.
- **Real-Time Multiplayer (WebRTC)**: Work together with teammates simultaneously! See live cursors, colors, labels, and real-time canvas updates with zero server setup required (powered by PeerJS).
- **Infinite Canvas**: Figma-like pan, zoom, artboards, and frames.
- **Device Presets**: Quick 1-click presets for iPhone 13/14, iPhone 15/16, iPhone Pro Max, iPhone SE, Android, Android SM, iPad, Laptop, Desktop, and 1080p.
- **Smart Alignment & Snap Guides**: Snapping with live alignment lines and measurement indicators while moving and resizing.
- **Shapes & Connectors**: Frames, rectangles, ellipses, text layers, sticky notes, and directional connection arrows.
- **Export**: Export HTML source code, JSON project backups, or open frames in a clean tab.
- **Local Persistence**: Automatic saving to browser `localStorage` + manual Save.

---

## Default Login Credentials
- **Password**: `ligma123`
*(You can change your password anytime by clicking the title in the toolbar or via the Settings menu).*

---

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `V` | Select / Move tool |
| `F` | Frame tool |
| `R` | Rectangle tool |
| `E` | Ellipse tool |
| `T` | Text tool |
| `S` | Sticky note |
| `C` | Connector arrow tool |
| `Delete` / `Backspace` | Delete selected element |
| `Escape` | Deselect / cancel |
| Arrow keys | Nudge 1px (`+Shift` = 10px) |
| `Ctrl+S` / `Cmd+S` | Save project |
| `Ctrl+D` / `Cmd+D` | Duplicate element |
| `Ctrl+C` / `Ctrl+V` | Copy / Paste |
| `Ctrl+=` / `Ctrl+-` | Zoom in / out |
| `Ctrl+0` | Zoom 100% |
| `Ctrl+1` | Zoom to fit all elements |
| Middle Mouse / Alt + Drag | Pan canvas |
| Scroll Wheel | Zoom canvas |

---

## How Real-Time Multiplayer Works
1. Click the **Multiplayer** button in the top toolbar.
2. Click **Your code** to copy your session code (or copy the shareable URL with `#join=YOUR_CODE`).
3. Send it to your teammate.
4. Your teammate enters your code into the **Join code** input and clicks **Connect** (or opens the shared URL).
5. Both of you will see each other's live cursor, color-coded name badge, and canvas changes synchronously in real time.

---

## Deploying to GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Ligma-Design.git
   git branch -m master main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**
   - Select branch `main` and folder `/ (root)`, then click **Save**.
3. Your studio will be live at `https://YOUR_USERNAME.github.io/Ligma-Design/`.
