import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import portfolioContent from '../content/portfolio.md?raw'
import { canonicalUrl, siteConfig } from '../lib/siteConfig'

export function PortfolioPage() {
  return (
    <section className="page">
      <SEO
        title="Portfolio"
        description={`Browse the published works and writing portfolio of ${siteConfig.authorName}.`}
        canonical={canonicalUrl('/portfolio')}
      />
      <MarkdownContent>{portfolioContent}</MarkdownContent>
    </section>
  )
}
