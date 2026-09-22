import { MarkdownContent } from '../components/MarkdownContent'
import { SEO } from '../components/SEO'
import aboutContent from '../content/about.md?raw'
import aboutPhoto from '../content/aboutphoto.webp'
import { canonicalUrl, siteConfig } from '../lib/siteConfig'

export function AboutPage() {
  return (
    <section className="page">
      <SEO
        title="About"
        description={`Learn more about ${siteConfig.authorName} — author, researcher, and writer.`}
        canonical={canonicalUrl('/about')}
      />
      <div className="about-layout">
        <div className="about-content">
          <MarkdownContent>{aboutContent}</MarkdownContent>
        </div>
        <img
          className="about-photo"
          src={aboutPhoto}
          alt={`${siteConfig.authorName}`}
          width={900}
          height={1227}
        />
      </div>
    </section>
  )
}
