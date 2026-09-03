import { Link } from 'react-router-dom'
import { blogPosts } from '../lib/blog'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPage() {
  return (
    <section className="page">
      <h1>Blog</h1>
      <p>Posts are loaded from markdown files in `src/content/blogs`.</p>

      <ul className="blog-list">
        {blogPosts.map((post) => (
          <li key={post.slug} className="blog-card">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="blog-meta">
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTimeMinutes} min read</span>
              {post.author ? <span>By {post.author}</span> : null}
            </div>
            {post.excerpt ? <p>{post.excerpt}</p> : null}
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
