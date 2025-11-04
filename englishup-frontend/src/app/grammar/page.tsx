export default function Grammar() {
  const topics = [
    // Beginner
    {
      title: 'Present Simple',
      desc: 'Uso básico para hábitos y hechos generales.',
      level: 'Beginner',
      lessons: 12,
      duration: '2h 30min',
      icon: 'bi-calendar-check',
      color: 'success'
    },
    {
      title: 'Present Continuous',
      desc: 'Acciones que están ocurriendo ahora mismo.',
      level: 'Beginner',
      lessons: 10,
      duration: '2h 00min',
      icon: 'bi-arrow-repeat',
      color: 'success'
    },
    {
      title: 'Articles',
      desc: 'Uso de a, an y the en contextos básicos.',
      level: 'Beginner',
      lessons: 9,
      duration: '1h 45min',
      icon: 'bi-type',
      color: 'success'
    },
    {
      title: 'Past Simple',
      desc: 'Acciones completadas en el pasado.',
      level: 'Beginner',
      lessons: 11,
      duration: '2h 15min',
      icon: 'bi-clock',
      color: 'success'
    },
    // Intermediate
    {
      title: 'Past Perfect',
      desc: 'Acciones completadas antes de otra en el pasado.',
      level: 'Intermediate',
      lessons: 8,
      duration: '1h 45min',
      icon: 'bi-clock-history',
      color: 'primary'
    },
    {
      title: 'Conditionals',
      desc: 'Estructuras para situaciones hipotéticas.',
      level: 'Intermediate',
      lessons: 10,
      duration: '2h 15min',
      icon: 'bi-question-circle',
      color: 'primary'
    },
    {
      title: 'Future Tenses',
      desc: 'Will, going to y present continuous para futuro.',
      level: 'Intermediate',
      lessons: 14,
      duration: '3h 00min',
      icon: 'bi-fast-forward',
      color: 'primary'
    },
    {
      title: 'Modal Verbs',
      desc: 'Can, could, should, must y sus usos.',
      level: 'Intermediate',
      lessons: 11,
      duration: '2h 10min',
      icon: 'bi-sliders',
      color: 'primary'
    },
    {
      title: 'Present Perfect',
      desc: 'Acciones que conectan pasado y presente.',
      level: 'Intermediate',
      lessons: 13,
      duration: '2h 40min',
      icon: 'bi-check-circle',
      color: 'primary'
    },
    // Advanced
    {
      title: 'Passive Voice',
      desc: 'Construcciones pasivas en diferentes tiempos.',
      level: 'Advanced',
      lessons: 9,
      duration: '2h 20min',
      icon: 'bi-shuffle',
      color: 'danger'
    },
    {
      title: 'Reported Speech',
      desc: 'Cómo reportar lo que otros han dicho.',
      level: 'Advanced',
      lessons: 7,
      duration: '1h 50min',
      icon: 'bi-chat-quote',
      color: 'danger'
    },
    {
      title: 'Relative Clauses',
      desc: 'Who, which, that y where en oraciones complejas.',
      level: 'Advanced',
      lessons: 8,
      duration: '2h 05min',
      icon: 'bi-link-45deg',
      color: 'danger'
    },
  ]
  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="hero text-white position-relative animate-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <span className="badge bg-light text-primary mb-4 px-4 py-2 animate-in-left">
                <i className="bi bi-book-fill me-2"></i>
                Fundamentos del inglés
              </span>
              <h1 className="display-4 fw-bold mb-4 animate-in-left">
                Domina la
                <span className="d-block text-gradient">Gramática Inglesa</span>
              </h1>
              <p className="lead mb-5 text-white-50 animate-in-left">
                Aprende las estructuras fundamentales del inglés con lecciones interactivas diseñadas por expertos. Desde nivel básico hasta avanzado.
              </p>
              <div className="d-flex flex-wrap gap-3 animate-in-left">
                <a href="#topics" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  Comenzar ahora
                </a>
                <a href="#test" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-clipboard-check me-2"></i>
                  Test de nivel
                </a>
              </div>
              <div className="d-flex gap-4 mt-5 text-white-50 animate-in-left">
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">97</h3>
                  <small className="fw-medium">Lecciones</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">20h+</h3>
                  <small className="fw-medium">Contenido</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">35K+</h3>
                  <small className="fw-medium">Estudiantes</small>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block animate-in-right">
              <div className="position-relative">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-4 shadow-lg text-center">
                  <div className="mb-4">
                    <i className="bi bi-trophy-fill text-warning fs-1 mb-3"></i>
                    <h5 className="text-white fw-bold">Progreso Garantizado</h5>
                    <p className="text-white-50 small mb-0">
                      Más del 90% de nuestros estudiantes mejoran su gramática en menos de 3 meses con nuestro método probado.
                    </p>
                  </div>
                  <div className="row text-center mt-4">
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">4.9★</h4>
                      <small className="text-white-50 d-block">Rating</small>
                    </div>
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">98%</h4>
                      <small className="text-white-50 d-block">Éxito</small>
                    </div>
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">24/7</h4>
                      <small className="text-white-50 d-block">Acceso</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics by Level */}
      <section id="topics" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-primary text-white mb-2 px-3 py-2">Rutas de Aprendizaje</span>
            <h2 className="display-5 fw-bold mb-3">Encuentra tu nivel perfecto</h2>
            <p className="text-muted col-lg-6 mx-auto">
              Programas estructurados para cada etapa de tu aprendizaje gramatical
            </p>
          </div>

          {/* Beginner Section */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-gradient-success text-white rounded-circle me-3" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-bookmark-star-fill fs-5"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0">Nivel Principiante</h3>
                <p className="text-muted mb-0">Fundamentos básicos para empezar (A1-A2)</p>
              </div>
            </div>
            <div className="row g-4">
              {topics.filter(t => t.level === 'Beginner').map((topic, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3 mb-3"
                        style={{ width: '60px', height: '60px' }}>
                        <i className={`bi ${topic.icon} fs-3 text-white`}></i>
                      </div>
                      <h5 className="fw-bold mb-2">{topic.title}</h5>
                      <p className="text-muted small mb-3">{topic.desc}</p>

                      <div className="d-flex justify-content-between text-muted small mb-3">
                        <span>
                          <i className="bi bi-file-earmark-text me-1"></i>
                          {topic.lessons} lecciones
                        </span>
                        <span>
                          <i className="bi bi-clock me-1"></i>
                          {topic.duration}
                        </span>
                      </div>

                      <div className="progress mb-3" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>

                      <a href="#" className="btn btn-success w-100">
                        <i className="bi bi-play-circle-fill me-1"></i>
                        Comenzar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate Section */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center bg-gradient-primary text-white rounded-circle me-3" style={{ width: '50px', height: '50px' }}>
                <i className="bi bi-bookmark-star-fill fs-5"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0">Nivel Intermedio</h3>
                <p className="text-muted mb-0">Estructuras complejas y fluidez (B1-B2)</p>
              </div>
            </div>
            <div className="row g-4">
              {topics.filter(t => t.level === 'Intermediate').map((topic, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="card h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3 mb-3"
                        style={{ width: '60px', height: '60px' }}>
                        <i className={`bi ${topic.icon} fs-3 text-white`}></i>
                      </div>
                      <h5 className="fw-bold mb-2">{topic.title}</h5>
                      <p className="text-muted small mb-3">{topic.desc}</p>

                      <div className="d-flex justify-content-between text-muted small mb-3">
                        <span>
                          <i className="bi bi-file-earmark-text me-1"></i>
                          {topic.lessons} lecciones
                        </span>
                        <span>
                          <i className="bi bi-clock me-1"></i>
                          {topic.duration}
                        </span>
                      </div>

                      <div className="progress mb-3" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>

                      <a href="#" className="btn btn-primary w-100">
                        <i className="bi bi-play-circle-fill me-1"></i>
                        Comenzar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Section */}
          <div>
            <div className="d-flex align-items-center mb-4">
              <div className="d-inline-flex align-items-center justify-content-center text-white rounded-circle me-3" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                <i className="bi bi-bookmark-star-fill fs-5"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0">Nivel Avanzado</h3>
                <p className="text-muted mb-0">Dominio profesional del inglés (C1-C2)</p>
              </div>
            </div>
            <div className="row g-4">
              {topics.filter(t => t.level === 'Advanced').map((topic, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                        style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)20' }}>
                        <i className={`bi ${topic.icon} fs-3 text-white`} style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}></i>
                      </div>

                      <h5 className="fw-bold mb-2">{topic.title}</h5>
                      <p className="text-muted small mb-3">{topic.desc}</p>

                      <div className="d-flex justify-content-between text-muted small mb-3">
                        <span>
                          <i className="bi bi-file-earmark-text me-1"></i>
                          {topic.lessons} lecciones
                        </span>
                        <span>
                          <i className="bi bi-clock me-1"></i>
                          {topic.duration}
                        </span>
                      </div>

                      <div className="progress mb-3" style={{ height: '6px' }}>
                        <div
                          className="progress-bar"
                          style={{ width: `${Math.floor(Math.random() * 100)}%`, background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}
                        ></div>
                      </div>

                      <a href="#" className="btn btn-primary w-100">
                        <i className="bi bi-play-circle-fill me-1"></i>
                        Comenzar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="test" className="bg-gradient-success text-white py-5">
        <div className="container text-center py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <i className="bi bi-clipboard-check fs-1 mb-3 d-block"></i>
              <h2 className="display-5 fw-bold mb-4">¿No sabes por dónde empezar?</h2>
              <p className="lead mb-4 opacity-75">
                Realiza nuestro test de nivel gratuito y te recomendaremos las lecciones perfectas para ti. ¡Solo toma 5 minutos!
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="#" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-clipboard-check me-2"></i>
                  Hacer test de nivel
                </a>
                <a href="#" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-question-circle-fill me-2"></i>
                  Más información
                </a>
              </div>
              <p className="mt-4 small opacity-50">
                <i className="bi bi-shield-check me-1"></i>
                100% gratis. Resultados inmediatos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}