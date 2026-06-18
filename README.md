# PhD Application CV — Wanxiang Yu

A single-page **live CV builder**: edit on the left, see the rendered CV update in real time on the right, then save as PDF. Auto-deployed to GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The live editor + real-time CV preview, all in one page. |
| `cv-data.js` | Built-in **default/seed content** loaded on first visit. |
| `.github/workflows/deploy.yml` | Auto-deploys to GitHub Pages on every push to `main`. |

## Live URL (after Pages is enabled)

- `https://ywx20020114.github.io/phd-cv/`

## Features

- **Live two-pane editing** — left: Chinese-labeled form; right: rendered English CV that updates as you type.
- **Avatar upload** (optional) — stored inline as base64; toggle a centered header layout.
- **Flexible sections** — every standard section (Summary, Education, Publications, Research, Experience, Skills, Honors) can be shown/hidden and its items reordered (↑/↓) or removed.
- **Custom sections** — add your own sections (bullet list or paragraph) with any title.
- **Save as PDF** — click **🖨 保存为 PDF**; print styles hide the editor and print only the CV (A4).
- **Backup & restore** — **⬇ 导出 JSON** / **⬆ 导入 JSON**. **↺ 恢复默认** reloads the seed content.

## Where is my data stored?

All edits are saved automatically in your browser's `localStorage` (no backend, no token).
To move between machines or keep a backup, use **导出 JSON** / **导入 JSON**.
To change the built-in default everyone sees on first load, edit `cv-data.js` and push.

## Local preview

Just open `index.html` in a browser — no build step or dependencies.
