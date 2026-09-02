# Peter Lagonegro — Resume Site

A single-page resume / portfolio site. Plain HTML, CSS, and JavaScript — no build
step, no dependencies. Designed to be hosted on **GitHub Pages**.

```
index.html            # all page content
assets/css/style.css  # styling (light + dark theme, print styles)
assets/js/main.js     # theme toggle, photo placeholders
images/               # your photos — see images/README.md for file names
.nojekyll             # tells GitHub Pages to serve files as-is
```

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Add resume site"
   git branch -M main
   git remote add origin https://github.com/lago-pete/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → Save
3. The site publishes at `https://lago-pete.github.io/<repo-name>/`.

> Tip: name the repo `lago-pete.github.io` to serve it at the root domain
> `https://lago-pete.github.io/`.

## Adding photos

Every section has photo slots that currently show labelled placeholders. Add
image files to `images/` using the names listed in
[`images/README.md`](images/README.md) and they replace the placeholders
automatically. Click any photo on the site to open it full-size.

## Layout

The page opens on **Projects**. The row of tabs under the header switches
between Projects, Work Experience, Skills, Education, and Leadership. Each tab is
a `<section id="...">` in `index.html`; the matching `<a href="#...">` in
`<nav class="tabs">` is its tab. To reorder tabs, reorder the `<a>` links. The
current tab is kept in the URL hash, so links like
`.../#experience` open straight to that tab. Printing shows every section.

## Editing content

All text lives in `index.html`. To change how many photo slots a section shows,
edit that section's `data-count` attribute (details in `images/README.md`).
