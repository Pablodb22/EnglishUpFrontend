'use client';
import React, { useState } from 'react';
import Popup from '@/components/Popup';
import * as clienteService from '@/services/cliente';

export default function Login() {
  const [formData, setFormData] = useState({correo: '',contrasena: ''})
  const [popup, setPopup] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const handleSubmit = () => async (event: React.FormEvent) => {
    event.preventDefault();
    try{
      const respuesta=await clienteService.iniciarSesion(formData);
      if(respuesta.ok){       
        const usuarioJSON = JSON.stringify(respuesta.data);        
        localStorage.setItem('usuario', usuarioJSON);
        setPopup({type: 'success', message: 'Inicio de sesión exitoso. ¡Bienvenido!'});        
      }else{
        setPopup({type: 'error', message: 'Error al iniciar sesión: ' + respuesta.message});
      }
    }catch(error){
      setPopup({type: 'error', message: 'Error al iniciar sesión: ' + (error instanceof Error ? error.message : 'Error desconocido')});
    }
    }


  return (
   <div
      className="min-vh-100 d-flex flex-column justify-content-start align-items-center position-relative text-white"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '140px',
        paddingBottom: '60px'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

      <div className="container position-relative animate-in">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            {/* Card */}
            <div className="card bg-white bg-opacity-10 border-0 shadow-lg backdrop-blur rounded-4 p-4">
              <div className="text-center mb-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded-circle mb-3"
                     style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-mortarboard-fill text-light fs-1"></i>
                </div>
                <h2 className="fw-bold">Bienvenido estudiante!</h2>
                <p className="text-white-50">Accede a tu cuenta y continúa aprendiendo</p>
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50" htmlFor='correo'>
                    <i className="bi bi-envelope-fill me-2 text-white"></i>
                    Email
                  </label>
                  <input type="email" name="correo" className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark" placeholder="tu@email.com" onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-white-50" htmlFor='contrasena'>
                    <i className="bi bi-lock-fill me-2 text-white"></i>
                    Contraseña
                  </label>
                  <input type="password" name='contrasena' className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark" placeholder="••••••••" onChange={handleChange}/>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label small text-white-50" htmlFor="remember">
                      Recordarme
                    </label>
                  </div>
                  <a href="#" className="small text-white-50 text-decoration-none">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" className="btn btn-light btn-lg w-100 fw-semibold shadow-sm" onClick={handleSubmit()}>
                  <i className="bi bi-box-arrow-in-right me-2"></i> Iniciar Sesión
                </button>

                <p className="text-center text-white-50 mt-4 mb-0">
                  ¿No tienes cuenta?
                  <a href="/register" className="text-white fw-semibold ms-1">Regístrate gratis</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={() => {
            if (popup.type === 'success') {
              window.location.href = '/';
            }
            setPopup(null);
          }}
        />
      )}
    </div>
  );
}
