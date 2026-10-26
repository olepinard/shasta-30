# Kemp, Quin & Octave Turn 30 — RSVP site

The live invite + RSVP site for the Memorial Day Weekend 2027 Shasta Lake houseboat party.

- **Live site:** https://kempquinoctave.com
- **Repo:** https://github.com/olepinard/shasta-30 (public)
- **Host:** Netlify (project `mellifluous-vacherin-67edc7`) — auto-deploys from this repo's `main` branch. The domain is managed inside Netlify, so there's no external DNS to touch.

## How updates go live (the important part)

**Every push to `main` on GitHub automatically redeploys the live site.** No manual uploads to Netlify.

```bash
git add -A
git commit -m "describe your change"
git push
```

Within ~1 minute, kempquinoctave.com shows the change. You can watch the build under Netlify → **Deploys**.

## Files

- `index.html` — the entire site in one file (photos, fonts, and logic all inlined). It's a **compiled bundle** exported from Claude Design. The visible page HTML lives inside the `<script type="__bundler/template">` block as a JSON-escaped string.
- `apps-script.gs` — the Google Apps Script web app that receives RSVP submissions and appends them to the "RSVPs" tab of the Google Sheet (Timestamp, Name, Email, Phone, +1s).
- `netlify.toml` — Netlify config (no build step; publish directory is the repo root).

The RSVP form POSTs (`no-cors`, form-encoded: `name`, `email`, `phone`, `plusOnes`) to the Apps Script endpoint, which records each submission in the Sheet.

## Editing the site

**Big design/content changes** — edit in Claude Design and re-export `index.html`, then commit + push the new file. This is the cleanest path because `index.html` is a compiled bundle.

**Small text/style tweaks** — you *can* edit directly inside the `__bundler/template` string in `index.html`: find the text, change it, and keep the surrounding JSON escaping (`\"`, `/`, `\n`) intact. **Always preview locally first** by opening `index.html` in a browser before pushing.

## For collaborators (friends)

The repo is public, so anyone can view it. Two ways to contribute:

- **With push access** — ask Octave to add you as a collaborator (repo → Settings → Collaborators). Then:
  ```bash
  git clone https://github.com/olepinard/shasta-30.git
  cd shasta-30
  # make your edit
  git add -A && git commit -m "my change" && git push
  ```
  Your push to `main` auto-deploys.

- **Without push access** — fork the repo, make changes, and open a pull request. Once it's merged into `main`, it deploys.

## Notes

- Hosting is Netlify's free plan. The repo is **public** so there's no contributor limit (private repos on the free plan only allow one contributor).
- To change who can push, manage collaborators on GitHub; to change deploy/domain settings, use the Netlify dashboard.
