import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../lib/siteConfig'

type SEOProps = {
  /** Page title — will be formatted as "Page Title | Site Name". */
  title?: string
  /** Meta description for this page. */
  description?: string
  /** Canonical URL for this page (defaults to siteUrl). */
  canonical?: string
  /** OG image URL (absolute). Defaults to siteConfig.defaultOgImage. */
  image?: string
  /** Set to "article" for blog posts. */
  ogType?: 'website' | 'article'
  /** Prevent this page from being indexed by search engines. */
  noIndex?: boolean
}

export function SEO({
  title,
  description = siteConfig.defaultDescription,
  canonical,
  image,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName
  const fullImage = image
    ? image
    : `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`
  const fullCanonical = canonical ?? siteConfig.siteUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.authorName} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={`@${siteConfig.twitterHandle}`} />
      )}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}
