# Author Website Template (React + Vite)

A reusable author-site starter with:

- Main pages: Home, Portfolio, Blog, About, Press Kit, Contact
- Markdown-powered blog posts with frontmatter metadata
- GitHub Pages deployment via GitHub Actions

## Quick Start

```bash
npm install
npm run build
```

You can run `npm run dev` when you want local preview, but it is not required for setup.

## Blog Authoring

Add markdown files to `src/content/blogs`.

Each post must start with YAML frontmatter in this standard format:

```md
---
title: "Post Title"
date: "2026-09-03"
tags:
  - writing
  - updates
excerpt: "Short summary for the blog list page."
author: "Author Name"
---
```

Then write normal markdown content below it.

File name becomes the URL slug:

- `src/content/blogs/my-new-post.md` -> `/blog/my-new-post`

### Reusable post template

Copy `src/content/blogs/_template.md` to a new file in the same folder, then update the YAML frontmatter fields (`title`, `date`, `tags`, etc.) and the markdown content.

Note: files starting with `_` are ignored by the blog loader (so the template itself does not show up as a published post).

## GitHub Pages Deployment

This template includes `.github/workflows/deploy.yml`.

To enable Pages:

1. Push to `main`
2. In GitHub repo settings, set Pages source to `GitHub Actions`
3. The workflow builds and deploys automatically on every push to `main`

The Vite base path is auto-configured for GitHub Pages inside `vite.config.ts`.
