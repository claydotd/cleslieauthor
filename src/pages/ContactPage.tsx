import { SEO } from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

export function ContactPage() {
  return (
    <section className="page">
      <SEO
        title="Contact"
        description={`Get in touch with ${siteConfig.authorName}.`}
        canonical={`${siteConfig.siteUrl}/contact`}
      />
      <h1>Contact</h1>
      <p>Contact information goes here.</p>
    </section>
  )
}
