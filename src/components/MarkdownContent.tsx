import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')

function withBase(src: string | undefined): string | undefined {
  if (!src) return src
  if (src.startsWith('/') && !src.startsWith('//')) {
    return `${baseUrl}${src}`
  }
  return src
}

const components: Components = {
  a({ href, children, node: _node, ...props }) {
    if (href?.startsWith('/') && !href.startsWith('//')) {
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      )
    }

    const external = href?.startsWith('http')
    return (
      <a
        href={href}
        {...props}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  },
  img({ src, alt, node: _node, ...props }) {
    const resolved = typeof src === 'string' ? withBase(src) : undefined
    return <img src={resolved} alt={alt ?? ''} {...props} />
  },
}

export function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
