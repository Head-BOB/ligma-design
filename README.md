# FigmaFork

A lightweight browser-based design tool you can host on GitHub Pages.

## Features
- 🔐 Password login (stored in your browser)
- 🖼 Infinite canvas with pan & zoom (like Figma)
- 📋 **Paste Claude's HTML → live iframe frame at exact size**
- ✏️ Frames, rectangles, text, sticky notes
- 🔗 Connect elements with arrows
- 💾 Auto-save to localStorage + manual save
- 📤 Export: HTML source, JSON project file, or open in tab for PNG
- ⌨️ Keyboard shortcuts

## Default Password
```
figmafork
```
Change it after login via **Settings** (click the project title in the toolbar).

## Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `V` | Select / Move tool |
| `F` | Frame tool |
| `R` | Rectangle tool |
| `T` | Text tool |
| `S` | Sticky note |
| `C` | Connect tool |
| `H` | HTML frame tool |
| `Del` / `Backspace` | Delete selected |
| `Escape` | Deselect / cancel |
| Arrow keys | Nudge 1px (`+Shift` = 10px) |
| `Ctrl+S` | Save |
| `Ctrl+D` | Duplicate |
| `Ctrl+C/V` | Copy / Paste |
| `Ctrl+=/-` | Zoom in/out |
| `Ctrl+0` | Zoom 100% |
| `Ctrl+1` | Zoom to fit |
| Middle mouse / Alt+drag | Pan |
| Scroll wheel | Zoom |

## How to Use HTML Frames
1. Copy HTML from Claude
2. Paste into the **HTML Frame** panel (right sidebar)
3. Set the width/height (default 1280×800)
4. Click **Add HTML Frame** — it appears on the canvas at exact pixel size
5. Double-click any frame to reload its HTML into the panel
6. Click **Update Selected Frame** to swap the HTML

## Hosting on GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: Deploy from branch → main / root**
3. Done — your tool is live at `https://yourusername.github.io/Figma-Fork/`

> **Note:** All data is saved to your browser's `localStorage`. Nothing is sent to any server.
