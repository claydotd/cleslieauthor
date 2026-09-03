import { SEO } from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

export function PortfolioPage() {
  return (
    <section className="page">
      <SEO
        title="Portfolio"
        description={`Browse the published works and writing portfolio of ${siteConfig.authorName}.`}
        canonical={`${siteConfig.siteUrl}/portfolio`}
      />
      <h1>Portfolio</h1>
      <p>
        Portfolio goes here. Work in progress.
      </p>
    </section>
  )
}
