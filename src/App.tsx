import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { PressKitPage } from './pages/PressKitPage'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/press-kit', label: 'Press Kit' },
  { to: '/contact', label: 'Contact' },
]

function NavMenu({ onClose }: { onClose: () => void }) {
  return (
    <ul className="nav-list">
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.end}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={onClose}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 641px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false) }
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <p className="site-title">Author Name</p>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="nav-desktop">
            <NavMenu onClose={() => setMenuOpen(false)} />
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen && (
          <div id="mobile-nav" className="nav-mobile">
            <nav aria-label="Main navigation">
              <NavMenu onClose={() => setMenuOpen(false)} />
            </nav>
          </div>
        )}
      </header>

      <main className="container page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/press-kit" element={<PressKitPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} C. Leslie. All rights reserved.
          </p>
          <p className="site-footer__credit">
            Site built by{' '}
            <a href="https://analoguegonedigital.co.uk" target="_blank" rel="noopener noreferrer">
              analoguegonedigital.co.uk
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
