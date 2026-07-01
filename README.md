# B-Roll Studio — Website

Static prototype site generated from the Stitch UI/UX design (`DESIGN.md`).
This is a **visual prototype**: all 10 screens are real HTML/CSS (Tailwind),
linked together with a floating nav bar at the bottom of each page so you can
click through the whole flow. Forms, login, uploads, and AI features are
**not wired up yet** — that's a follow-up phase once you want a real backend.

## Pages
- `index.html` — Landing page
- `sign-up.html` / `log-in.html` — Auth screens
- `dashboard.html` — Main dashboard
- `script-input.html` — Script input
- `clip-gallery.html` — Clip gallery
- `timeline-assembly.html` — Timeline editor
- `audio-upload.html` — Audio upload
- `export-modal.html` — Export flow
- `video-preview-modal.html` — Video preview

## Run it locally
No build step needed — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy with GitHub Pages
1. Push this folder to a GitHub repo (see steps below).
2. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / root**.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
