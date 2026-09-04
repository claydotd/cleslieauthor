import { SEO } from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

export function HomePage() {
  return (
    <section className="page">
      <SEO
        description={siteConfig.defaultDescription}
        canonical={siteConfig.siteUrl}
      />
      <h1>C. M. Leslie</h1>
      <p>A clean home page introducing the author and latest updates.</p>
      <p>
        Under construction.
      </p>
    </section>
  )
}
