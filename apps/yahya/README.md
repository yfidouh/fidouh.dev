# yahya.fidouh.dev

Personal blog. Astro (static output) + Tailwind CSS v4 + React islands, built with Bun.

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `bun install`     | Install dependencies                    |
| `bun run dev`     | Dev server at `localhost:4321`          |
| `bun run build`   | Production build to `./dist/`           |
| `bun run preview` | Preview the production build locally    |
| `bun run format`  | Format with Prettier (astro + tailwind) |

## Writing posts

Posts live in `src/content/blog/` and their frontmatter is validated by the
schema in `src/content.config.ts`:

```yaml
---
title: 'Post title'
description: 'One-line summary shown in lists, meta tags, and RSS.'
pubDate: 2026-07-12
updatedDate: 2026-07-14 # optional, renders an "Updated" line
tags: ['astro'] # optional
draft: true # optional — visible in dev, excluded from production
---
```

- Plain posts are `.md`. Posts embedding interactive components are `.mdx`
  (import a React component and render it with a `client:*` directive).
- Read time is computed at build time by `src/lib/remark-reading-time.mjs`.
- Article look and feel lives in `src/pages/blog/[id].astro` (header, dates,
  tags) and the `prose` styles from the Tailwind typography plugin.

## Structure

- `src/pages/` — routes (`.astro` components; `index`, `about`, `blog/`, `rss.xml`, `404`)
- `src/layouts/BaseLayout.astro` — HTML shell, head/meta, nav, footer, theme script
- `src/components/` — Astro components for static UI, React (`.tsx`) for islands
- `src/lib/` — helpers (`posts.ts`, `utils.ts` with `cn()` ready for shadcn/ui)

Dark mode is class-based: an inline script applies `.dark` from
`localStorage.theme` (falling back to system preference) before first paint,
and the header toggle persists the choice.
