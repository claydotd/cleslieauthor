import ReactMarkdown from 'react-markdown'
import { SEO } from '../components/SEO'
import aboutContent from '../content/about.md?raw'
import { siteConfig } from '../lib/siteConfig'

export function AboutPage() {
  return (
    <section className="page">
      <SEO
        title="About"
        description={`Learn more about ${siteConfig.authorName} — author, researcher, and writer.`}
        canonical={`${siteConfig.siteUrl}/about`}
      />
      <div className="about-layout">
        <div className="about-content">
          <ReactMarkdown>{aboutContent}</ReactMarkdown>
        </div>
        <div className="about-photo-placeholder">
          Photo placeholder
        </div>
      </div>
    </section>
  )
}
