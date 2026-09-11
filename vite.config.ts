import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap'

const siteBase = '/cleslieauthor/'

// Static routes for sitemap generation.
// When you add new pages, add their paths here.
const staticRoutes = ['/portfolio', '/blog', '/about', '/press-kit', '/contact']

// Dynamically collect blog post slugs at build time so each post
// gets its own <url> entry in the sitemap.
const blogsDir = resolve(import.meta.dirname, 'src/content/blogs')
const blogRoutes = readdirSync(blogsDir)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_') && !f.startsWith('.'))
  .map((f) => `/blog/${f.replace(/\.md$/, '')}`)

export default defineConfig({
  base: siteBase,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    sitemap({
      hostname: 'https://analoguegonedigital.co.uk',
      basePath: 'cleslieauthor',
      dynamicRoutes: [...staticRoutes, ...blogRoutes],
      generateRobotsTxt: false,
    }),
    {
      name: 'sitemap-link-base',
      transformIndexHtml(html: string) {
        return html.replaceAll('href="/sitemap.xml"', `href="${siteBase}sitemap.xml"`)
      },
    },
  ],
})
