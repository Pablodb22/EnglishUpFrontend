// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [usuario, setUsuario] = useState<string | null>(null)

  const gradient = 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('usuario') : null
    setUsuario(storedUser)

    const handleStorage = () => setUsuario(localStorage.getItem('usuario'))
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed-top w-full py-2 sm:py-3 transition-all ease-in-out duration-300 ${
        isScrolled ? 'shadow-sm bg-white/95 border-b border-gray-300 backdrop-blur-md' : 'bg-white/85 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center mb-2 sm:mb-0"
        >
          <div
            className="flex items-center justify-center mr-2 w-10 h-10 rounded-lg shadow-md"
            style={{ background: gradient }}
          >
            <i className="bi bi-mortarboard-fill text-white text-lg"></i>
          </div>
          <span
            className="hidden sm:inline text-xl font-bold"
            style={{
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            EnglishUp
          </span>
        </Link>

        {/* TOGGLER */}
        <button
          className="sm:hidden p-2 border-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div
          className={`w-full sm:w-auto sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'} mt-2 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {[
              { href: '/', icon: 'bi-house-door', label: 'Inicio' },
              { href: '/grammar', icon: 'bi-book', label: 'Gramática' },
              { href: '/vocabulary', icon: 'bi-journal-text', label: 'Vocabulario' },
              ...(usuario ? [{ href: '/profile', icon: 'bi-person', label: 'Perfil' }] : []),
            ].map(({ href, icon, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleLinkClick}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive ? 'text-blue-700 font-semibold' : 'text-gray-800 font-medium hover:text-blue-600'
                    }`}
                  >
                    <i className={`bi ${icon} mr-2`}></i>
                    {label}
                  </Link>
                </li>
              )
            })}

            {!usuario && (
              <li>
                <Link
                  href="/login"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center px-4 py-2 rounded-full text-white font-semibold transition-all"
                  style={{ background: gradient }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 18px rgba(24,40,72,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 6px 14px rgba(24,40,72,0.2)'
                  }}
                >
                  <i className="bi bi-box-arrow-in-right mr-2"></i> Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
