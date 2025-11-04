export default function Register() {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-start position-relative text-white"
      style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        paddingTop: '160px', // 👈 más espacio arriba
        paddingBottom: '60px'
      }}
    >
      {/* Capa oscura sutil */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

      <div className="container position-relative animate-in">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            {/* Tarjeta */}
            <div className="card bg-white bg-opacity-10 border-0 shadow-lg backdrop-blur rounded-4 p-4">
              <div className="text-center mb-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded-circle mb-3"
                  style={{ width: '80px', height: '80px' }}
                >
                  <i className="bi bi-rocket-takeoff-fill text-light fs-1"></i>
                </div>
                <h2 className="fw-bold">Comienza tu viaje</h2>
                <p className="text-white-50">
                  Crea tu cuenta y aprende inglés con EnglishUp
                </p>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50">
                    <i className="bi bi-person-fill me-2 text-white"></i> Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50">
                    <i className="bi bi-envelope-fill me-2 text-white"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50">
                    <i className="bi bi-lock-fill me-2 text-white"></i> Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Mínimo 8 caracteres"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50">
                    <i className="bi bi-shield-lock-fill me-2 text-white"></i> Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Repite tu contraseña"
                  />
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="terms" />
                  <label className="form-check-label small text-white-50" htmlFor="terms">
                    Acepto los <a href="#" className="text-white text-decoration-none">términos y condiciones</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-light btn-lg w-100 fw-semibold shadow-sm"
                >
                  <i className="bi bi-rocket-takeoff me-2"></i> Crear mi cuenta
                </button>

                <p className="text-center text-white-50 mt-4 mb-0">
                  ¿Ya tienes cuenta?
                  <a href="/login" className="text-white fw-semibold ms-1">Inicia sesión</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Opcional: mensaje o decoración al final */}
      <div className="text-center mt-5 text-white-50 small position-relative">
        <i className="bi bi-shield-check me-1"></i> Tus datos están seguros y cifrados
      </div>
    </div>
  );
}
