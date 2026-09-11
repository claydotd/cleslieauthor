import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import contactContent from '../content/contact.md?raw'
import { canonicalUrl, siteConfig } from '../lib/siteConfig'

export function ContactPage() {
  return (
    <section className="page">
      <SEO
        title="Contact"
        description={`Get in touch with ${siteConfig.authorName}.`}
        canonical={canonicalUrl('/contact')}
      />
      <MarkdownContent>{contactContent}</MarkdownContent>
    </section>
  )
}
