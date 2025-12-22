// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [usuario, setUsuario] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('usuario') : null
    setUsuario(storedUser)

    const handleStorage = () => setUsuario(localStorage.getItem('usuario'))
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const navLinks = [
    { href: '/', icon: 'bi-house-door', label: 'Inicio' },
    { href: '/grammar', icon: 'bi-book', label: 'Gramática' },
    { href: '/vocabulary', icon: 'bi-journal-text', label: 'Vocabulario' },
  ]

  if (usuario) navLinks.push({ href: '/profile', icon: 'bi-person', label: 'Perfil' })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        {/* LOGO */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-mortarboard-fill me-2"></i>
          EnglishUp
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(({ href, icon, label }) => {
              const isActive = pathname === href
              return (
                <li key={href} className="nav-item">
                  <Link
                    href={href}
                    className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                  >
                    <i className={`bi ${icon} me-1`}></i> {label}
                  </Link>
                </li>
              )
            })}

            {!usuario && (
              <li className="nav-item">
                <Link
                  href="/login"
                  className="btn btn-primary ms-lg-2 d-flex align-items-center"
                >
                  <i className="bi bi-box-arrow-in-right me-1"></i> Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
