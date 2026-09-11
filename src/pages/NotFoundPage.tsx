import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return (
    <section className="page">
      <SEO title="Page not found" description="This page does not exist." noIndex />
      <h1>Page not found</h1>
      <p>
        That address is not on this site.{' '}
        <Link to="/">Return home</Link>.
      </p>
    </section>
  )
}
