import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import pressKitContent from '../content/press-kit.md?raw'
import { canonicalUrl, siteConfig } from '../lib/siteConfig'

export function PressKitPage() {
  return (
    <section className="page">
      <SEO
        title="Press Kit"
        description={`Press materials, bios, and media contacts for ${siteConfig.authorName}.`}
        canonical={canonicalUrl('/press-kit')}
      />
      <MarkdownContent>{pressKitContent}</MarkdownContent>
    </section>
  )
}
