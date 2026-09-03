export type BlogFrontmatter = {
  title: string
  date: string
  tags?: string[]
  excerpt?: string
  author?: string
}

export type BlogPost = Omit<BlogFrontmatter, 'tags'> & {
  slug: string
  content: string
  readingTimeMinutes: number
  tags: string[]
}
