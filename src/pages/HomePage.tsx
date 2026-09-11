import { Link } from 'react-router-dom'
import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import homeContent from '../content/home.md?raw'
import { blogPosts } from '../lib/blog'
import { siteConfig } from '../lib/siteConfig'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const latestPost = blogPosts[0]

export function HomePage() {
  return (
    <section className="page">
      <SEO
        description={siteConfig.defaultDescription}
        canonical={siteConfig.siteUrl}
      />
      <MarkdownContent>{homeContent}</MarkdownContent>

      {latestPost ? (
        <div className="home-latest">
          <h2>Latest from the blog</h2>
          <Link to={`/blog/${latestPost.slug}`} className="home-latest-preview">
            <h3>{latestPost.title}</h3>
            <div className="blog-meta">
              <time dateTime={latestPost.date}>{formatDate(latestPost.date)}</time>
              <span>{latestPost.readingTimeMinutes} min read</span>
            </div>
            {latestPost.excerpt ? <p>{latestPost.excerpt}</p> : null}
          </Link>
        </div>
      ) : null}
    </section>
  )
}
