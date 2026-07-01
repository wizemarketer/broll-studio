# B-Roll Studio — Website

A working website generated from the Stitch UI/UX design (`DESIGN.md`), now
backed by a real Supabase project (Auth, Postgres database, Storage).

## What's functional
- **Sign up / Log in** — real accounts via Supabase Auth (email + password)
- **Dashboard** — lists your real scripts, redirects to login if you're signed out
- **Script input** — save/edit scripts to the database
- **Clip gallery** — upload video clips to Supabase Storage, listed per-user
- **Audio upload** — upload voiceover/music files to Supabase Storage
- **Export** — creates a real export request row (status: queued) in the database

## What's not built yet
- Actual video rendering/encoding (the export request is recorded, but nothing
  currently processes it into a rendered file — that needs a video-processing
  backend/worker, which is a separate project)
- AI script analysis / AI clip suggestions
- Full drag-and-drop timeline editing (the timeline-assembly page is still a
  visual mockup)

## Backend
Supabase project: `broll-studio` (`jctjfwoihtygvlhqmifs`)
- Tables: `profiles`, `scripts`, `clips`, `timelines`, `timeline_items`, `audio_tracks`, `exports` — all with Row Level Security so each user only sees their own data
- Storage buckets: `clips`, `audio`, `exports` (private, per-user folders)
- Client config lives in `js/supabase-client.js`

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
