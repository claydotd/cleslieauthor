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

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <p className="site-title">Author Name</p>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
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
    </div>
  )
}

export default App
