# Kemp, Quin & Octave Turn 30 — RSVP site

Static one-page RSVP site for a Memorial Day Weekend 2027 houseboat party on Shasta Lake.

## Files
- `index.html` — the entire site, self-contained (photos, fonts, and logic inlined). This is what gets deployed. Don't edit it by hand; it's a compiled bundle.
- `apps-script.gs` — Google Apps Script web app that receives form posts and appends rows to the "RSVPs" tab of the Google Sheet (Timestamp, Name, Email, Phone, +1s).
- `.gitignore`, `netlify.toml` — repo + Netlify config.

## How it works
The form POSTs (`no-cors`, form-encoded: name, email, phone, plusOnes) to:
https://script.google.com/macros/s/AKfycbySo5VP8ivqUy3m1r5ocB_BH-cdnEKUzxdYrieeq0ZHryXyiRsMJn0fQ9gYtJDvXRvu/exec

## Deploy
Hosted on Netlify, linked to this GitHub repo. No build step; publish directory is the repo root. Pushing to `main` redeploys automatically.

## Instructions for Claude Code
1. If this folder isn't a git repo yet: `git init`, `git branch -M main`, add the GitHub remote (e.g. `https://github.com/olepinard/shasta-30.git`), commit everything, push.
2. To ship an update: replace `index.html` with the newly exported version, then `git add index.html && git commit -m "Update site" && git push`.
3. Design edits are made in Claude Design and re-exported as `index.html`.
