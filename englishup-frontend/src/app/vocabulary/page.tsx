export default function Vocabulary() {
  const categories = [
    {
      title: 'Comida y Bebida',
      icon: 'bi-cup-hot',
      desc: 'Vocabulario para restaurantes, cocina y alimentos.',
      words: 180,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Viajes y Turismo',
      icon: 'bi-airplane',
      desc: 'Palabras esenciales para aeropuertos y destinos.',
      words: 220,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Trabajo y Oficina',
      icon: 'bi-briefcase',
      desc: 'Términos profesionales y vocabulario corporativo.',
      words: 195,
      gradient: 'linear-gradient(135deg, #6a76ac 0%, #764ba2 100%)'
    },
    {
      title: 'Salud y Bienestar',
      icon: 'bi-heart-pulse',
      desc: 'Vocabulario médico y de actividad física.',
      words: 165,
      gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    },
    {
      title: 'Tecnología',
      icon: 'bi-laptop',
      desc: 'Términos de computación, internet y gadgets.',
      words: 210,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Hogar y Familia',
      icon: 'bi-house-heart',
      desc: 'Vocabulario doméstico y relaciones familiares.',
      words: 175,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      title: 'Deportes',
      icon: 'bi-trophy',
      desc: 'Términos deportivos y actividades físicas.',
      words: 140,
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      title: 'Educación',
      icon: 'bi-mortarboard',
      desc: 'Vocabulario académico y escolar.',
      words: 190,
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      title: 'Naturaleza',
      icon: 'bi-tree',
      desc: 'Animales, plantas y medio ambiente.',
      words: 160,
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
  ]

  const featuredWords = [
    { word: 'Serendipity', translation: 'Casualidad afortunada', level: 'Advanced', color: 'danger' },
    { word: 'Procrastinate', translation: 'Procrastinar', level: 'Intermediate', color: 'primary' },
    { word: 'Ambiguous', translation: 'Ambiguo', level: 'Advanced', color: 'danger' },
    { word: 'Enthusiasm', translation: 'Entusiasmo', level: 'Intermediate', color: 'primary' },
  ]

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <section className="hero text-white position-relative animate-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <span className="badge bg-light text-primary mb-4 px-4 py-2 animate-in-left">
                <i className="bi bi-journal-text me-2"></i>
                Expande tu conocimiento
              </span>
              <h1 className="display-4 fw-bold mb-4 animate-in-left">
                Amplía tu
                <span className="d-block text-gradient">Vocabulario en Inglés</span>
              </h1>
              <p className="lead mb-5 text-white-50 animate-in-left">
                Aprende palabras organizadas por temas y contextos reales. Desde conversaciones cotidianas hasta vocabulario profesional avanzado.
              </p>
              <div className="d-flex flex-wrap gap-3 animate-in-left">
                <a href="#categories" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                  Ver categorías
                </a>
                <a href="#word-of-day" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-star-fill me-2"></i>
                  Palabra del día
                </a>
              </div>
              <div className="d-flex gap-4 mt-5 text-white-50 animate-in-left">
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">2,450+</h3>
                  <small className="fw-medium">Palabras</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">9</h3>
                  <small className="fw-medium">Categorías</small>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">42K+</h3>
                  <small className="fw-medium">Estudiantes</small>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block animate-in-right">
              <div className="position-relative">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-4 shadow-lg text-center">
                  <div className="mb-4">
                    <i className="bi bi-lightbulb-fill text-warning fs-1 mb-3"></i>
                    <h5 className="text-white fw-bold">Aprende Inteligentemente</h5>
                    <p className="text-white-50 small mb-0">
                      Nuestro sistema de repetición espaciada te ayuda a memorizar palabras 3x más rápido que los métodos tradicionales.
                    </p>
                  </div>
                  <div className="row text-center mt-4">
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">15min</h4>
                      <small className="text-white-50 d-block">Por día</small>
                    </div>
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">95%</h4>
                      <small className="text-white-50 d-block">Retención</small>
                    </div>
                    <div className="col-4">
                      <h4 className="text-white fw-bold mb-0">30</h4>
                      <small className="text-white-50 d-block">Días</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Word of the Day */}
      <section id="word-of-day" className="py-5 bg-white">
        <div className="container">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative animate-in">
            <div className="row g-0 align-items-center">

              {/* Panel izquierdo con degradado azul original */}
              <div
                className="col-lg-4 d-flex flex-column justify-content-center align-items-center text-white text-center p-5 rounded-4"
                style={{ background: 'linear-gradient(135deg, #6a76ac 0%, #764ba2 100%)' }}
              >
                <i className="bi bi-star-fill fs-1 mb-3 d-block"></i>
                <h3 className="fw-bold mb-2">Palabra del Día</h3>
                <p className="opacity-75 small mb-0">Aprende una nueva palabra cada día</p>
              </div>


              {/* Contenido principal */}
              <div className="col-lg-8 bg-white p-5 position-relative">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                  <div>
                    <h1 className="fw-bold mb-1">Resilient</h1>
                    <p className="text-muted mb-1">/rɪˈzɪl.i.ənt/</p>
                    <span className="badge bg-primary">Adjetivo</span>
                  </div>

                  <button
                    className="btn btn-light border-0 shadow-sm rounded-circle p-3"
                    title="Escuchar"
                  >
                    <i className="bi bi-volume-up text-primary fs-5"></i>
                  </button>
                </div>

                <p className="mb-3">
                  <strong>Significado:</strong> Capaz de recuperarse rápidamente de dificultades o situaciones adversas.
                </p>

                <p className="text-muted mb-4 fst-italic">
                  “She showed <strong>resilient</strong> behavior after the setback, bouncing back stronger than before.”
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-primary rounded-pill px-4">
                    <i className="bi bi-plus-circle me-2"></i>
                    Agregar a mi lista
                  </button>
                  <button className="btn btn-outline-primary rounded-pill px-4">
                    <i className="bi bi-share me-2"></i>
                    Compartir
                  </button>
                </div>

                {/* Detalle decorativo */}
                <div
                  className="position-absolute end-0 bottom-0 opacity-10 pe-none"
                  style={{ fontSize: '10rem', lineHeight: '1', right: '-20px', bottom: '-40px' }}
                >
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Categories */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-success text-white mb-2 px-3 py-2">Explora por Temas</span>
            <h2 className="display-5 fw-bold mb-3">Categorías de Vocabulario</h2>
            <p className="text-muted col-lg-6 mx-auto">
              Aprende palabras organizadas por contextos reales que usarás en tu día a día
            </p>
          </div>
          <div className="row g-4">
            {categories.map((cat, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0">
                  <div className="card-body p-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center text-white rounded-circle mb-4"
                      style={{ width: '100px', height: '100px', background: cat.gradient }}
                    >
                      <i className={`bi ${cat.icon} fs-1`}></i>
                    </div>
                    <h5 className="fw-bold mb-3">{cat.title}</h5>
                    <p className="text-muted small mb-4">{cat.desc}</p>

                    <div className="badge bg-light text-dark border mb-4 px-4 py-2">
                      <i className="bi bi-card-text me-2"></i>
                      <strong>{cat.words}</strong> palabras disponibles
                    </div>

                    <div className="d-grid gap-2">
                      <a href="#" className="btn btn-primary">
                        <i className="bi bi-play-circle-fill me-2"></i>
                        Comenzar a aprender
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Words */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-primary text-white mb-2 px-3 py-2">Trending</span>
            <h2 className="display-5 fw-bold mb-3">Palabras Populares</h2>
            <p className="text-muted">Las palabras más estudiadas esta semana</p>
          </div>
          <div className="row g-4">
            {featuredWords.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 h-100 text-center p-4">
                  <div className="card-body">
                    <span className={`badge bg-${item.color} mb-3 px-3 py-2`}>{item.level}</span>
                    <h4 className="fw-bold mb-2">{item.word}</h4>
                    <p className="text-muted mb-4">{item.translation}</p>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-outline-primary btn-sm">
                        <i className="bi bi-volume-up"></i>
                      </button>
                      <button className="btn btn-primary btn-sm flex-grow-1">
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-success text-white py-5">
        <div className="container text-center py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <i className="bi bi-gift-fill fs-1 mb-3 d-block"></i>
              <h2 className="display-5 fw-bold mb-4">Crea tu lista personalizada</h2>
              <p className="lead mb-4 opacity-75">
                Guarda tus palabras favoritas, practica con flashcards inteligentes y haz seguimiento de tu progreso diario.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="#" className="btn btn-light btn-lg px-5 py-3">
                  <i className="bi bi-plus-circle-fill me-2"></i>
                  Crear mi lista ahora
                </a>
                <a href="#" className="btn btn-outline-light btn-lg px-5 py-3">
                  <i className="bi bi-download me-2"></i>
                  Ver listas populares
                </a>
              </div>
              <p className="mt-4 small opacity-50">
                <i className="bi bi-shield-check me-1"></i>
                Sincronización automática. Acceso desde cualquier dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}