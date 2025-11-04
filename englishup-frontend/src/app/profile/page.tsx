export default function Profile() {
  return (
    <div className="pt-5">
      {/* Profile Header - Hero Style */}
      <section className="hero text-white position-relative animate-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <div className="d-inline-block position-relative animate-in-left">
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                     style={{ width: '140px', height: '140px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                  <span className="text-primary fw-bold" style={{ fontSize: '3.5rem' }}>JP</span>
                </div>
                <span className="position-absolute bottom-0 end-0 bg-success border border-3 border-white rounded-circle" 
                      style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-check-lg text-white fw-bold"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-8 animate-in-right">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-light text-primary px-3 py-2">
                  <i className="bi bi-bookmark-star-fill me-1"></i>
                  Intermediate
                </span>
                <span className="badge bg-warning text-dark px-3 py-2">
                  <i className="bi bi-fire me-1"></i>
                  15 días de racha
                </span>
              </div>
              <h1 className="display-5 fw-bold mb-3">Juan Pérez</h1>
              <p className="lead mb-4 text-white-50">
                <i className="bi bi-envelope-fill me-2"></i>
                juan@ejemplo.com
                <span className="mx-3">•</span>
                <i className="bi bi-calendar-check me-2"></i>
                Miembro desde Enero 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information & Daily Goals */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {/* Personal Information */}
            <div className="col-lg-8">
              <div className="text-center text-lg-start mb-4">
                <span className="badge bg-gradient-primary text-white mb-2 px-3 py-2">Mi Perfil</span>
                <h2 className="display-6 fw-bold mb-3">Información Personal</h2>
                <p className="text-muted">
                  Mantén tu información actualizada para una mejor experiencia de aprendizaje
                </p>
              </div>
              <div className="card border-0">
                <div className="card-body p-4">
                  <form>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          <i className="bi bi-person-fill me-2 text-primary"></i>
                          Nombre completo
                        </label>
                        <input type="text" className="form-control" id="name" defaultValue="Juan Pérez" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          <i className="bi bi-envelope-fill me-2 text-primary"></i>
                          Email
                        </label>
                        <input type="email" className="form-control" id="email" defaultValue="juan@ejemplo.com" disabled />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="level" className="form-label">
                          <i className="bi bi-bookmark-star-fill me-2 text-primary"></i>
                          Nivel de Inglés
                        </label>
                        <select className="form-select" id="level">
                          <option>Beginner (A1-A2)</option>
                          <option selected>Intermediate (B1-B2)</option>
                          <option>Advanced (C1-C2)</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="nativeLanguage" className="form-label">
                          <i className="bi bi-translate me-2 text-primary"></i>
                          Idioma Nativo
                        </label>
                        <input type="text" className="form-control" id="nativeLanguage" defaultValue="Español" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="goal" className="form-label">
                          <i className="bi bi-target me-2 text-primary"></i>
                          Objetivo de aprendizaje
                        </label>
                        <textarea className="form-control" id="goal" rows={3} 
                                  placeholder="Ej: Mejorar mi inglés para viajar al extranjero y avanzar en mi carrera profesional"></textarea>
                      </div>
                    </div>
                    <div className="mt-4 d-flex gap-3 flex-wrap">
                      <button type="submit" className="btn btn-primary btn-lg px-5">
                        <i className="bi bi-check-lg me-2"></i>
                        Guardar Cambios
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-lg px-5">
                        <i className="bi bi-x-lg me-2"></i>
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Daily Goals */}
            <div className="col-lg-4">
              <div className="text-center text-lg-start mb-4">
                <span className="badge bg-gradient-success text-white mb-2 px-3 py-2">Objetivos</span>
                <h2 className="display-6 fw-bold mb-3">Objetivos Diarios</h2>
              </div>
              <div className="card border-0">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-clock-fill text-primary me-2"></i>
                        <span className="fw-semibold">Practicar 30 minutos</span>
                      </div>
                      <span className="badge bg-primary">20/30</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div className="progress-bar" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-book-fill text-success me-2"></i>
                        <span className="fw-semibold">Completar 2 lecciones</span>
                      </div>
                      <span className="badge bg-success">
                        <i className="bi bi-check-lg"></i>
                        2/2
                      </span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-journal-text text-warning me-2"></i>
                        <span className="fw-semibold">Aprender 10 palabras</span>
                      </div>
                      <span className="badge bg-warning text-dark">7/10</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <button className="btn btn-success w-100 btn-lg">
                    <i className="bi bi-play-circle-fill me-2"></i>
                    Continuar estudiando
                  </button>
                  <div className="text-center mt-3">
                    <small className="text-muted">
                      <i className="bi bi-fire text-danger me-1"></i>
                      ¡No pierdas tu racha de 15 días!
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}