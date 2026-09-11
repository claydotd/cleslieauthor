/**
 * Central site configuration.
 * Update these values to match your live domain and author details.
 */
export const siteConfig = {
  /** The canonical origin of the site (no trailing slash). */
  siteUrl: 'https://analoguegonedigital.co.uk/cleslieauthor',

  /** Default page title (used when no per-page title is set). */
  siteName: 'C. M. Leslie - Author',

  /** Shown in <meta name="author"> and JSON-LD across the site. */
  authorName: 'C. M. Leslie',

  /** Default meta description (each page can override this). */
  defaultDescription:
    'The official website of C. M. Leslie - writer, researcher, and cool person.',

  /** Default OG image path (relative to /public). */
  defaultOgImage: '/favicon.svg',
}

/** Build a canonical URL for a site path such as `/about`. */
export function canonicalUrl(path = '/'): string {
  if (!path || path === '/') return siteConfig.siteUrl
  return `${siteConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
