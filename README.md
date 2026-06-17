# PhD Application CV — Wanxiang Yu

Single-file HTML curriculum vitae, automatically deployed to GitHub Pages.

## Live site

After the first deploy, the CV is available at:

```
https://ywx20020114.github.io/phd-cv/
```

## Local preview

Just open `index.html` in any browser. No build step or dependencies required.

## Export to PDF

Open the page in a browser and print (Cmd/Ctrl + P) → **Save as PDF**.
Print styles are tuned for clean A4/Letter output.

## Editing

All content lives in `index.html` (CSS is inlined). Placeholders that still need
real values are wrapped in `<span class="todo">…</span>` and rendered with a yellow
highlight — fill in the text and remove the `class="todo"` to clear the highlight.

## Auto-deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which publishes the
site to GitHub Pages. One-time setup in the GitHub repo:

**Settings → Pages → Build and deployment → Source: GitHub Actions**
