import ReactMarkdown from 'react-markdown'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/blog'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <section className="page blog-post">
      <Link className="back-link" to="/blog">
        Back to blog
      </Link>
      <h1>{post.title}</h1>
      <div className="blog-meta">
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTimeMinutes} min read</span>
        {post.author ? <span>By {post.author}</span> : null}
      </div>
      <div className="blog-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="blog-tag">
            #{tag}
          </span>
        ))}
      </div>
      <article>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  )
}
