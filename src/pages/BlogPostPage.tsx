import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { getPostBySlug } from '../lib/blog'
import { siteConfig } from '../lib/siteConfig'

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

  const isoDate = new Date(post.date).toISOString()
  const canonicalUrl = `${siteConfig.siteUrl}/blog/${post.slug}`
  const description = post.excerpt ?? post.content.slice(0, 160)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: isoDate,
    author: {
      '@type': 'Person',
      name: post.author ?? siteConfig.authorName,
    },
    url: canonicalUrl,
    keywords: post.tags.join(', '),
  }

  return (
    <article className="page blog-post">
      <SEO
        title={post.title}
        description={description}
        canonical={canonicalUrl}
        ogType="article"
      />
      {/* Article-specific meta not covered by the shared SEO component */}
      <Helmet>
        <meta property="article:published_time" content={isoDate} />
        {post.author && <meta property="article:author" content={post.author} />}
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Link className="back-link" to="/blog">
        Back to blog
      </Link>
      <h1>{post.title}</h1>
      <div className="blog-meta">
        <time dateTime={isoDate}>{formatDate(post.date)}</time>
        <span>{post.readingTimeMinutes} min read</span>
        {post.author ? <address className="blog-author" rel="author">By {post.author}</address> : null}
      </div>
      <div className="blog-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="blog-tag">
            #{tag}
          </span>
        ))}
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}
