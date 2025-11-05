import Image from "next/image"

export default function Home() {
  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="hero text-white position-relative animate-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <span className="badge bg-light text-primary mb-4 px-4 py-2 animate-in-left">
                <i className="bi bi-star-fill me-2"></i>
                Plataforma #1 de aprendizaje
              </span>
              <h1 className="display-4 fw-bold mb-4 animate-in-left">
                Domina el inglés con
                <span className="d-block text-gradient">EnglishUp</span>
              </h1>
              <p className="lead mb-5 text-white-50 animate-in-left">
                Aprende con lecciones interactivas diseñadas por expertos. Sigue tu progreso en tiempo real y alcanza la fluidez que siempre soñaste.
              </p>
              <div className="d-flex flex-wrap gap-3 animate-in-left">
                <a href="/register" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-rocket-takeoff-fill me-2"></i>
                  Comienza gratis
                </a>
                <a href="#courses" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  Ver demo
                </a>
              </div>
              <div className="d-flex gap-4 mt-5 text-white-50 animate-in-left">
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">50K+</h3>
                  <small className="fw-medium">Estudiantes activos</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">4.9★</h3>
                  <small className="fw-medium">Valoración promedio</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">120+</h3>
                  <small className="fw-medium">Lecciones disponibles</small>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block animate-in-right">
              <div className="position-relative">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-4 shadow-lg text-center">
                  <div className="mb-4">
                    <i className="bi bi-award-fill text-warning fs-1 mb-3"></i>
                    <h5 className="text-white fw-bold">Certificación Internacional</h5>
                    <p className="text-white-50 small mb-0">
                      Obtén un certificado avalado por instituciones educativas y demuestra tu nivel de inglés al mundo.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                    <Image src="/imagenes/cambridge.png" alt="Cambridge" width={40} height={40} style={{ opacity: 0.9 }} />
                    <Image src="/imagenes/toefl.png" alt="toefl" width={40} height={40} style={{ opacity: 0.9 }} />
                    <Image src="/imagenes/ielts.png" alt="ielts" width={40} height={40} style={{ opacity: 0.9 }} />                    
                  </div>
                  <small className="text-white-50 d-block mt-3">
                    Certificaciones opcionales incluidas en los niveles avanzados
                  </small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-primary text-white mb-2 px-3 py-2">Características</span>
            <h2 className="display-5 fw-bold mb-3">¿Por qué elegir EnglishUp?</h2>
            <p className="text-muted col-lg-6 mx-auto">
              Descubre una forma revolucionaria de aprender inglés con herramientas diseñadas para tu éxito
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 text-center p-3">
                <div className="card-body">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-gradient-primary text-white rounded-circle" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-play-circle-fill fs-1"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">Aprendizaje Interactivo</h5>
                  <p className="text-muted">
                    Lecciones dinámicas con videos, quizzes y ejercicios prácticos que mantienen tu motivación al máximo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 text-center p-3">
                <div className="card-body">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-gradient-success text-white rounded-circle" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-graph-up-arrow fs-1"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">Seguimiento de Progreso</h5>
                  <p className="text-muted">
                    Monitorea tus avances con estadísticas detalladas, badges por logros y análisis de desempeño.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 text-center p-3">
                <div className="card-body">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center text-white rounded-circle" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                      <i className="bi bi-chat-dots-fill fs-1"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">Vocabulario Práctico</h5>
                  <p className="text-muted">
                    Aprende palabras y frases útiles en contextos reales, desde viajes hasta el entorno laboral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="courses" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-success text-white mb-2 px-3 py-2">Rutas de Aprendizaje</span>
            <h2 className="display-5 fw-bold mb-3">Encuentra tu nivel perfecto</h2>
            <p className="text-muted col-lg-6 mx-auto">
              Programas estructurados para cada etapa de tu aprendizaje
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-success px-3 py-2 me-2">
                      <i className="bi bi-bookmark-star-fill me-1"></i>
                      Beginner
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">A1-A2</span>
                  </div>
                  <h4 className="fw-bold mb-3">Principiante</h4>
                  <p className="text-muted mb-4">
                    Fundamentos básicos de gramática, vocabulario esencial y frases simples. Perfecto si estás empezando desde cero.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      40+ lecciones interactivas
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Vocabulario básico (500 palabras)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Ejercicios de pronunciación
                    </li>
                  </ul>
                  <a href="/grammar" className="btn btn-primary w-100">Comenzar ahora</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 position-relative" style={{ transform: 'scale(1.05)' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-primary px-3 py-2 me-2">
                      <i className="bi bi-bookmark-star-fill me-1"></i>
                      Intermediate
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">B1-B2</span>
                  </div>
                  <h4 className="fw-bold mb-3">Intermedio</h4>
                  <p className="text-muted mb-4">
                    Estructuras complejas, conversación fluida y comprensión lectora. Mejora tu confianza en situaciones cotidianas.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      60+ lecciones avanzadas
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Conversación práctica
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      Gramática intermedia
                    </li>
                  </ul>
                  <a href="/grammar" className="btn btn-primary w-100">Comenzar ahora</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge px-3 py-2 me-2" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                      <i className="bi bi-bookmark-star-fill me-1"></i>
                      Advanced
                    </span>
                    <span className="badge bg-light text-dark px-3 py-2">C1-C2</span>
                  </div>
                  <h4 className="fw-bold mb-3">Avanzado</h4>
                  <p className="text-muted mb-4">
                    Domina el inglés profesional con expresiones idiomáticas, escritura académica y debates avanzados.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      80+ lecciones profesionales
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      Inglés de negocios
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      Certificación incluida
                    </li>
                  </ul>
                  <a href="/grammar" className="btn btn-primary w-100">Comenzar ahora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-primary text-white mb-2 px-3 py-2">Testimonios</span>
            <h2 className="display-5 fw-bold mb-3">Lo que dicen nuestros estudiantes</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-4">"EnglishUp me ayudó a pasar de no saber nada a mantener conversaciones fluidas en solo 3 meses. Las lecciones son adictivas y super efectivas."</p>
                  <div className="d-flex align-items-center">
                    <div className="bg-gradient-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold">AG</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Ana García</h6>
                      <small className="text-muted">Estudiante, España</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-4">"El seguimiento de progreso y los badges me mantienen super motivado. Es como un juego pero aprendo inglés de verdad. ¡Totalmente recomendado!"</p>
                  <div className="d-flex align-items-center">
                    <div className="bg-gradient-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <span className="fw-bold">CM</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Carlos Martínez</h6>
                      <small className="text-muted">Desarrollador, México</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-4">"Probé muchas apps pero EnglishUp es diferente. Las lecciones son prácticas y puedo estudiar desde cualquier lugar. Ya conseguí mi certificación B2."</p>
                  <div className="d-flex align-items-center">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                      <span className="fw-bold">LR</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Laura Rodríguez</h6>
                      <small className="text-muted">Profesora, Argentina</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-success text-white py-5">
        <div className="container text-center py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <i className="bi bi-trophy-fill fs-1 mb-3 d-block"></i>
              <h2 className="display-5 fw-bold mb-4">¡Únete a 50,000+ estudiantes!</h2>
              <p className="lead mb-4 opacity-75">
                Regístrate gratis y accede a todas las lecciones. Sin tarjeta de crédito. Sin compromisos. Solo resultados reales.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="/register" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Regístrate gratis
                </a>
                <a href="#" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-question-circle-fill me-2"></i>
                  Saber más
                </a>
              </div>
              <p className="mt-4 small opacity-50">
                <i className="bi bi-shield-check me-1"></i>
                100% gratis para empezar. No se requiere tarjeta de crédito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}