'use client';
import React, { useState } from 'react';
import Popup from '@/components/Popup';
import * as clienteService from '@/services/cliente';

export default function Register() {

    const [formData, setFormData] = useState({nombre: '',correo: '',contrasena: '',repetircontra:'',fecha_creacion: new Date().toISOString(), nivel:''})
    const [popup, setPopup] = useState<{type: 'success' | 'error', message: string} | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if(formData.contrasena !== formData.repetircontra){
      setPopup({type: 'error', message: 'Las contraseñas no coinciden'});
      return;
    }
    try{
      const respuesta=await clienteService.registrarse(formData);
      if(respuesta.ok){
        setPopup({type: 'success', message: 'Registro exitoso. Ahora puedes iniciar sesión.'});
      }else{
        setPopup({type: 'error', message: 'Error en el registro: ' + respuesta.message});
      }
    }catch(error){
      setPopup({type: 'error', message: 'Error al registrarse: ' + (error instanceof Error ? error.message : 'Error desconocido')});
    }
    }

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-start position-relative text-white"
      style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        paddingTop: '160px',
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
                  <label htmlFor="nombre" className="form-label fw-semibold text-white-50">
                    <i className="bi bi-person-fill me-2 text-white"></i> Nombre completo
                  </label>
                  <input
                    type="text"
                    name='nombre'
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Juan Pérez"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label fw-semibold text-white-50">
                    <i className="bi bi-envelope-fill me-2 text-white"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="tu@email.com"
                    name='correo'
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contrasena" className="form-label fw-semibold text-white-50">
                    <i className="bi bi-lock-fill me-2 text-white"></i> Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Mínimo 8 caracteres"
                    name='contrasena'
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="repetircontra" className="form-label fw-semibold text-white-50">
                    <i className="bi bi-shield-lock-fill me-2 text-white"></i> Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-white bg-opacity-75 border-0 text-dark"
                    placeholder="Repite tu contraseña"
                    name='repetircontra'
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-light btn-lg w-100 fw-semibold shadow-sm"
                  onClick={handleSubmit}
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

      <div className="text-center mt-5 text-white-50 small position-relative">
        <i className="bi bi-shield-check me-1"></i> Tus datos están seguros y cifrados
      </div>
      {popup && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={() => {
            if (popup.type === 'success') {
              window.location.href = '/login';
            }
            setPopup(null);
          }}
        />
      )}
    </div>
  );
}
