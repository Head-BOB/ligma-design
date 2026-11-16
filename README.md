# Ligma Design

A lightweight, zero-dependency, browser-native collaborative design studio and presentation platform. Built to host directly on **GitHub Pages** with zero build tools, zero server dependencies, and instant real-time peer-to-peer multiplayer.

---

## ⚡ Quick Start (Localhost)

Run an HTTP server in the repository root:

```bash
# Python 3
python3 -m http.server 3000

# or Node.js / npx
npx serve .
```

Open your browser to:
- **Studio Editor**: [http://localhost:3000](http://localhost:3000)
- **Client Presentation Mode**: [http://localhost:3000/#view](http://localhost:3000/#view)

> **Default Password**: `ligma123` *(change anytime in the Studio Settings)*

---

## 🚀 How to Host on GitHub Pages

Because Ligma Design is 100% static HTML, CSS, and vanilla JavaScript, hosting on GitHub Pages takes under 1 minute:

1. **Push your code to GitHub**:
   ```bash
   git add -A
   git commit -m "Deploy Ligma Design"
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
3. **Your Live URLs**:
   GitHub will deploy your site in ~30 seconds to:
   - **Editor URL**: `https://<your-username>.github.io/<repo-name>/`
   - **Client Presentation Link**: `https://<your-username>.github.io/<repo-name>/#view`

---

## 👥 Real-Time Multiplayer Collaboration

Ligma Design features serverless peer-to-peer multiplayer powered by WebRTC (PeerJS):
- **Live Cursors**: See your teammates' colored, named pointers moving in real-time.
- **Instant Canvas Sync**: Elements created, dragged, resized, or updated sync across all peers instantly.
- **Zero Server Setup**: No WebSockets server, Redis, or Node.js backend required.
- **Share Code or Link**: Click the **Multiplayer** pill in the top toolbar to copy your room code or direct join link (`#join=PEER_ID`).

---

## 🎯 Client Presentation & Sharing Mode

Ligma Design provides two ways to share work with clients and stakeholders without exposing editor tools or requiring a password:

### 1. Live Interactive Link (`#view`)
- Click **Share** in the top toolbar and copy the **View-Only Link**.
- When opened with `#view`, all editor panels, toolbars, and controls are automatically hidden.
- Includes a clean screen navigator (`◀ Screen 1 of 3 ▶`) and smooth auto-centering.
- If multiplayer is active, clients follow your screen navigation and presenter cursor live during pitches and reviews.
- Pressing `←` / `→` arrow keys or clicking any frame navigates between screens.
- Password protection ensures clients cannot enter editor mode without your studio password.

### 2. Standalone Client Presentation (.html)
- Click **Share** > **Download Standalone Presentation HTML**.
- Exports a completely self-contained `.html` file embedding all your frames and interactive prototypes.
- Zero dependencies, offline-ready, and can be emailed or sent via Slack/WhatsApp to clients.
- Includes device frame preview, 100% actual size, fit to screen, and fullscreen (`F`) controls.

---

## 📱 Mobile & Web HTML Frame Rendering

Ligma Design renders raw HTML fragments and web mockups inside isolated iframes at exact device viewports:

- **Presets Included**: iPhone 14 (390×844), iPhone 15 Pro Max (430×932), Android Pixel (412×915), Desktop (1440×900), iPad Pro (1024×1366), and custom sizes.
- **Flicker-Free Canvas**: Selecting and moving frames does not reload iframes or flash white.
- **Automatic Smart Placement**: New frames automatically position side-by-side to the right with a clean 50px gap, top-aligned, with camera auto-panning if off-screen.
- **Quick Width Adjusters (`W±`)**: Quickly nudge frame widths by ±1px or ±10px from the inspector panel.

### 💡 Best Practice for AI-Generated UI Mockups
When pasting HTML from AI design tools:
- If a screen contains a long scrollable feed (e.g. Header + Banners + Lists + Bottom Sheets), ensure the outer container is either set to the required total height (e.g. `height: 1050px`) or allow vertical scrolling.
- For overlays and modal bottom sheets, create a second frame (e.g. *Frame 1: Home Screen*, *Frame 2: Home Screen with All Services Open*). This mirrors standard Figma design architecture and keeps screens clean and readable.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `V` | Select / Move Tool |
| `F` | Frame Tool |
| `R` | Rectangle |
| `E` | Ellipse |
| `T` | Text Tool |
| `S` | Sticky Note |
| `C` | Directional Connector Line |
| `Space` + Drag / Middle Click | Pan Canvas |
| `Mouse Wheel` | Smooth Zoom In / Out |
| `Ctrl` + `+` / `-` | Zoom Step |
| `Ctrl` + `0` | Reset Zoom (100%) |
| `Ctrl` + `1` | Fit Canvas to Screen |
| `Ctrl` + `C` / `Ctrl` + `V` | Copy & Paste Element |
| `Ctrl` + `D` | Duplicate Element |
| `Delete` / `Backspace` | Delete Selected Element |
| `Arrow Keys` (In Present Mode) | Previous / Next Screen |
| `Esc` | Deselect All / Exit Present Mode |
