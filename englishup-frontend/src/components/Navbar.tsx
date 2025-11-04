'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // 👉 detecta la ruta actual

  const gradient = 'linear-gradient(135deg, #6a76ac 0%, #764ba2 100%)'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-3 ${isScrolled ? 'shadow-sm' : ''}`}
      style={{
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* LOGO */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          href="/"
        >
          <div
            className="d-flex align-items-center justify-content-center me-2"
            style={{
              width: '44px',
              height: '44px',
              background: gradient,
              borderRadius: '14px',
              boxShadow: '0 3px 10px rgba(118, 75, 162, 0.4)',
            }}
          >
            <i className="bi bi-mortarboard-fill text-white fs-5"></i>
          </div>
          <span
            style={{
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.3rem',
              letterSpacing: '0.5px',
            }}
          >
            EnglishUp
          </span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {[
              { href: '/', icon: 'bi-house-door', label: 'Inicio' },
              { href: '/grammar', icon: 'bi-book', label: 'Gramática' },
              { href: '/vocabulary', icon: 'bi-journal-text', label: 'Vocabulario' },
              { href: '/profile', icon: 'bi-person', label: 'Perfil' },
            ].map(({ href, icon, label }) => {
              const isActive = pathname === href
              return (
                <li key={href} className="nav-item">
                  <Link
                    href={href}
                    className={`nav-link d-flex align-items-center fw-medium position-relative ${
                      isActive ? 'active-link' : ''
                    }`}
                    style={{
                      color: isActive ? '#764ba2' : '#333',
                      fontWeight: isActive ? '600' : '500',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <i className={`bi ${icon} me-2 fs-6`}></i>
                    {label}
                    {isActive && (
                      <span
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                          bottom: '-4px',
                          width: '40%',
                          height: '2px',
                          background: gradient,
                          borderRadius: '2px',
                        }}
                      ></span>
                    )}
                  </Link>
                </li>
              )
            })}

            {/* LOGIN BUTTON */}
            <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
              <Link
                className="btn d-flex align-items-center justify-content-center px-4 py-2"
                href="/login"
                style={{
                  background: gradient,
                  border: 'none',
                  borderRadius: '14px',
                  fontWeight: '600',
                  color: '#fff',
                  boxShadow:
                    '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(118,75,162,0.3)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow =
                    '0 6px 12px rgba(118,75,162,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow =
                    '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(118,75,162,0.3)'
                }}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
