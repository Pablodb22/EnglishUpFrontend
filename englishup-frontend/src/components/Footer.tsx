import Link from 'next/link'

export default function Footer() {
  const gradient = 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)'

  return (
    <footer 
      className="mt-auto text-white py-4 py-md-5 w-100"
      style={{
        background: gradient,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container-fluid px-3 px-md-4">
        <div className="row g-4 g-md-3 align-items-center">
          {/* Logo y descripción */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <div
                className="d-flex align-items-center justify-content-center me-2"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <i className="bi bi-mortarboard-fill text-white"></i>
              </div>
              <span className="fw-bold fs-5">EnglishUp</span>
            </div>
            <p className="mb-0 text-white-50 small d-none d-md-block" style={{ maxWidth: '250px' }}>
              Aprende inglés de forma interactiva y efectiva
            </p>
          </div>

          {/* Links rápidos */}
          <div className="col-12 col-md-4 text-center">
            <h6 className="fw-semibold mb-3 fs-6">Enlaces rápidos</h6>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-3">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/grammar', label: 'Gramática' },
                { href: '/vocabulary', label: 'Vocabulario' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white-50 text-decoration-none small"
                  style={{
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <h6 className="fw-semibold mb-3 fs-6">Síguenos</h6>
            <div className="d-flex gap-2 justify-content-center justify-content-md-end">
              {[
                { icon: 'bi-facebook', href: '#' },
                { icon: 'bi-twitter-x', href: '#' },
                { icon: 'bi-instagram', href: '#' },
                { icon: 'bi-linkedin', href: '#' },
              ].map(({ icon, href }) => (
                <a
                  key={icon}
                  href={href}
                  className="d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr 
          className="my-3 my-md-4" 
          style={{ 
            borderColor: 'rgba(255,255,255,0.15)',
            opacity: 1 
          }} 
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0 text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
            &copy; 2025 EnglishUp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}