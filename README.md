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

### Option A — Visual editor with one-click publish (recommended)
1. Open the CV page and click the floating **✎ 编辑简历** button (or open `admin.html`).
2. Edit any field in the form.
3. First time only: click **🔑 设置 Token** and paste a GitHub token
   (Fine-grained token with **Contents: Read and write** on the `phd-cv` repo).
   The token is stored only in your browser's localStorage.
4. Click **🚀 保存并发布到线上** — the editor commits `cv-data.js` back to the repo via
   the GitHub API, the deploy workflow runs automatically, and the site updates in ~1 min.
   No manual copy/paste or `git push` needed.

> Want to preview without publishing? Use **💾 保存草稿并预览** (browser-only draft).
> Prefer manual control? Use **⬇ 导出文件** to copy/download `cv-data.js` yourself.

### Option B — Edit the file directly
Edit `cv-data.js` by hand and push. Empty string `""` fields are hidden automatically.

## Export to PDF
Open `index.html` in a browser → Print (Cmd/Ctrl + P) → Save as PDF. Print styles
hide the floating "Edit" button and draft banner automatically.

## Local preview
Just open `index.html` in a browser — no build step or dependencies.
