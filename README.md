# Author Website Template (React + Vite)

## Blog Authoring

Add markdown files to `src/content/blogs`.

Each post must start with frontmatter in this format:

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

Filename becomes the URL slug:

- `src/content/blogs/my-new-post.md` -> `/blog/my-new-post`

### Reusable post template

Copy `src/content/blogs/_template.md` to a new file in the same folder, then update the YAML frontmatter fields (`title`, `date`, `tags`, etc.) and the markdown content.

Note: files starting with `_` are ignored by the blog loader (so the template itself does not show up as a published post).

## GitHub Pages Deployment

The website auto updates using Github Actions

## Edit site details 
You'll fine them in `src/lib/siteconfig.ts`

