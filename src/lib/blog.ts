import { parse } from 'yaml'
import type { BlogFrontmatter, BlogPost } from '../types/blog'

const rawPosts = import.meta.glob('../content/blogs/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>

function isIgnoredBlogFilePath(path: string): boolean {
  const fileName = path.split('/').pop() ?? ''
  // Ignore helper/template files so they don't show up as published posts.
  return fileName.startsWith('_') || fileName.startsWith('.')
}

function parseFrontmatter(
  rawMarkdown: string,
): { frontmatter: BlogFrontmatter; content: string } {
  const [, rawYaml = '', body = rawMarkdown] =
    rawMarkdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) ?? []

  const frontmatter = parse(rawYaml) as BlogFrontmatter | null
  if (!frontmatter?.title || !frontmatter.date) {
    throw new Error('Each post requires frontmatter with at least title and date.')
  }

  return {
    frontmatter,
    content: body.trim(),
  }
}

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function slugFromPath(path: string): string {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? ''
}

function asTimestamp(date: string): number {
  const parsed = new Date(date).getTime()
  return Number.isNaN(parsed) ? 0 : parsed
}

export const blogPosts: BlogPost[] = Object.entries(rawPosts)
  .filter(([path]) => !isIgnoredBlogFilePath(path))
  .map(([path, markdown]) => {
    try {
      const { frontmatter, content } = parseFrontmatter(markdown)
      return {
        ...frontmatter,
        slug: slugFromPath(path),
        content,
        readingTimeMinutes: estimateReadingTime(content),
        tags: frontmatter.tags ?? [],
      }
    } catch {
      // Ignore malformed posts rather than failing the whole build.
      return null
    }
  })
  .filter((post): post is BlogPost => post !== null)
  .sort((a, b) => asTimestamp(b.date) - asTimestamp(a.date))

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

