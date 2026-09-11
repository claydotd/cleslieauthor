---
title: "Markdown examples"
date: "2026-09-03"
tags:
  - writing
  - updates
excerpt: "A tour of headings, emphasis, lists, quotes, tables, images, and other Markdown you can use in a post."
author: "C. D. Leslie"
---

This post is a **formatting sample**. Copy any of the blocks below into a new file in `src/content/blogs`. For a wider cheat sheet, see [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).

## Headings

Use `#` through `####` for titles and sections. This page already has an `h1` from the post title, so start body copy at `##`.

### A third-level heading

#### A fourth-level heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Italic*, **bold**, and ***bold italic*** all work in a sentence. You can also ~~strike through~~ a phrase with two tildes.

## Lists

Unordered:

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
  - Nested item
  - Another nested item
- Sed do eiusmod tempor

Ordered:

1. Research the archive
2. Draft the scene
3. Cut until it sings

Task list:

- [x] Write the placeholder copy
- [ ] Replace it with the real essay
- [ ] Add a cover image

## Quotes and breaks

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Use a backslash at the end of a line to force\
> a line break inside a paragraph or quote.

---

## Code

Inline code looks like `frontmatter`, `**bold**`, or `src/content/blogs`.

A fenced block:

```md
---
title: "Your Post Title"
date: "2026-09-11"
---

The body starts here.
```

## Links and images

[This is a link](https://www.markdownguide.org/cheat-sheet/) to an external cheat sheet. Internal pages work too: [home](/), [portfolio](/portfolio), [about](/about).

![Placeholder artwork](https://analoguegonedigital.co.uk/digillama/assets/art-2-DgNWQ7uH.png)

## Table

| Element | Markdown | Notes |
| --- | --- | --- |
| Emphasis | `*italic*` / `**bold**` | Nest them if you need both |
| Link | `[label](/path)` | Site paths stay inside the app |
| Image | `![alt](url)` | Use a full URL or a file in `public/` |
| Quote | `> text` | Line breaks with `\` |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
