import { Link, useSearchParams } from 'react-router-dom'
import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import blogIntro from '../content/blog-intro.md?raw'
import { blogPosts, blogTags } from '../lib/blog'
import { canonicalUrl, siteConfig } from '../lib/siteConfig'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

type SortOrder = 'newest' | 'oldest'

export function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || null
  const sortOrder: SortOrder = searchParams.get('sort') === 'oldest' ? 'oldest' : 'newest'
  const filteredPosts = activeTag
    ? blogPosts.filter((post) => post.tags.includes(activeTag))
    : blogPosts
  const visiblePosts =
    sortOrder === 'oldest' ? [...filteredPosts].reverse() : filteredPosts

  function updateParams(next: { tag?: string | null; sort?: SortOrder }) {
    const params = new URLSearchParams(searchParams)
    if ('tag' in next) {
      if (next.tag) params.set('tag', next.tag)
      else params.delete('tag')
    }
    if (next.sort === 'oldest') params.set('sort', 'oldest')
    else if (next.sort === 'newest') params.delete('sort')
    setSearchParams(params, { replace: true })
  }

  function setTag(tag: string | null) {
    updateParams({ tag })
  }

  return (
    <section className="page">
      <SEO
        title="Blog"
        description={`Articles, updates, and behind-the-scenes writing from ${siteConfig.authorName}.`}
        canonical={canonicalUrl('/blog')}
      />
      <h1>Blog</h1>
      <MarkdownContent>{blogIntro}</MarkdownContent>

      <div className="blog-filters">
        {blogTags.length > 0 ? (
          <div className="blog-filter-row" role="group" aria-label="Browse by tag">
            <span className="blog-filters-label">Browse by tag</span>
            <button
              type="button"
              className={`blog-filter${activeTag === null ? ' is-active' : ''}`}
              aria-pressed={activeTag === null}
              onClick={() => setTag(null)}
            >
              All
            </button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`blog-filter${activeTag === tag ? ' is-active' : ''}`}
                aria-pressed={activeTag === tag}
                onClick={() => setTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        ) : null}
        <div className="blog-sort-row">
          <label className="blog-filters-label" htmlFor="blog-sort">
            Sort
          </label>
          <select
            id="blog-sort"
            className="blog-sort"
            value={sortOrder}
            onChange={(event) =>
              updateParams({
                sort: event.target.value === 'oldest' ? 'oldest' : 'newest',
              })
            }
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <p className="blog-filter-count" aria-live="polite">
          {activeTag
            ? `${filteredPosts.length} of ${blogPosts.length} ${blogPosts.length === 1 ? 'post' : 'posts'}`
            : `${blogPosts.length} ${blogPosts.length === 1 ? 'post' : 'posts'}`}
        </p>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="blog-empty">
          No posts with this tag yet.{' '}
          <button type="button" className="blog-empty-reset" onClick={() => setTag(null)}>
            Show all posts
          </button>
        </p>
      ) : (
        <ul className="blog-list">
          {visiblePosts.map((post) => (
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
                  <button
                    key={tag}
                    type="button"
                    className={`blog-tag${activeTag === tag ? ' is-active' : ''}`}
                    onClick={() => setTag(activeTag === tag ? null : tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
