# PhD Application CV — Wanxiang Yu

Data-driven single-page CV with a built-in visual editor, auto-deployed to GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The CV page. Renders from `cv-data.js`. |
| `cv-data.js` | **All CV content lives here** (the single source of truth). |
| `admin.html` | Visual editor ("管理入口") — edit content in a form, preview, export. |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on every push to `main`. |

## Live URLs (after Pages is enabled)

- CV:    `https://ywx20020114.github.io/phd-cv/`
- Editor: `https://ywx20020114.github.io/phd-cv/admin.html`

## How to edit your CV

### Option A — Visual editor (recommended)
1. Open `admin.html` (locally or the live URL).
2. Edit any field in the form.
3. Click **保存草稿并预览** to preview instantly (draft is stored in your browser only).
4. When happy, click **导出 cv-data.js** → copy/download the content.
5. Replace `cv-data.js` in the repo with it, commit & push. The site updates automatically.

> GitHub Pages is static hosting (no backend), so "publishing" = replacing the
> `cv-data.js` file. The editor's export dialog gives you one-click copy/download.

### Option B — Edit the file directly
Edit `cv-data.js` by hand and push. Empty string `""` fields are hidden automatically.

## Export to PDF
Open `index.html` in a browser → Print (Cmd/Ctrl + P) → Save as PDF. Print styles
hide the floating "Edit" button and draft banner automatically.

## Local preview
Just open `index.html` in a browser — no build step or dependencies.
