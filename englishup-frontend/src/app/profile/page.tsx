'use client';
import { useEffect, useState } from "react";
import * as clienteService from '@/services/cliente';
import Popup from "@/components/Popup";

export default function Profile() {
  const [level, setLevel] = useState<string>('');
  const [formData, setFormData] = useState({nombre: '',correo: '', correoOriginal: ''});
  const [popup, setPopup] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [usuario,setUsuario]=useState<{nombre_completo:string,correo:string,fecha_creacion:string,nivel:string} | null>(null);

  const formatofecha = usuario?.fecha_creacion 
    ? new Date(usuario.fecha_creacion).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',    
      })
    : '';
  const inicial=usuario?.nombre_completo.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);
  
  // Función para cargar datos del usuario
  const cargarDatosUsuario = () => {
    console.log('🔄 Cargando datos del usuario desde localStorage...');
    const usuarioJSON = localStorage.getItem('usuario');
    console.log('📦 Usuario JSON:', usuarioJSON);
    
    const usuario = usuarioJSON ? JSON.parse(usuarioJSON) : null;
    console.log('👤 Usuario parseado:', usuario);
    
    setUsuario(usuario);
    if (usuario) {
      setFormData({
        nombre: usuario.nombre_completo,
        correo: usuario.correo,
        correoOriginal: usuario.correo
      });
      const nivel = usuario.nivel;
      console.log('📊 Nivel del usuario:', nivel);
      
      if (nivel != null && nivel !== 'null') {
        setLevel(nivel);
      } else {
        setLevel('Necesitas prueba de nivel');
      }
    }
  };
  
  // Cargar datos al montar el componente
  useEffect(() => {
    cargarDatosUsuario();
  }, []);

  // Escuchar cambios en el localStorage (cuando se actualiza desde otro tab o componente)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log('🔔 Storage change detectado:', e.key);
      if (e.key === 'usuario') {
        console.log('✅ Cambio en usuario detectado, recargando datos...');
        cargarDatosUsuario();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Escuchar el evento focus de la ventana (cuando vuelves al tab)
  useEffect(() => {
    const handleFocus = () => {
      console.log('👀 Ventana enfocada, verificando cambios en usuario...');
      cargarDatosUsuario();
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function modificarperfil(e?: React.FormEvent) {
    if (e) e.preventDefault();
    try {
      const respuesta = await clienteService.modificarperfil(formData);
      if (respuesta.ok) {
        // Actualizar el estado local del usuario
        const usuarioActualizado = {
          ...usuario!,
          nombre_completo: formData.nombre,
          correo: formData.correo
        };
        
        // Actualizar localStorage con los nuevos datos
        localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
        
        // Actualizar el estado del componente
        setUsuario(usuarioActualizado);
        
        // Actualizar correoOriginal para futuras modificaciones
        setFormData({
          ...formData,
          correoOriginal: formData.correo
        });
        
        setPopup({type: 'success', message: 'Datos del usuario modificados correctamente.'});                
      } else {
        setPopup({type: 'error', message: 'Error al modificar: ' + respuesta.message});
        console.log(respuesta.message);
      }
    } catch (error) {
      console.error('Error al modificar el perfil: ', error);
      setPopup({type: 'error', message: 'Error al conectar con el servidor'});
    }
  }

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
                  <span className="text-primary fw-bold" style={{ fontSize: '3.5rem' }}>{inicial}</span>
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
                  {level}
                </span>
              </div>
              <h1 className="display-5 fw-bold mb-3">{usuario?.nombre_completo}</h1>
              <p className="lead mb-4 text-white-50">
                <i className="bi bi-envelope-fill me-2"></i>
                {usuario?.correo}
                <span className="mx-3">•</span>
                <i className="bi bi-calendar-check me-2"></i>
                Miembro desde {formatofecha}
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
            <div className="col-lg-12">
              <div className="text-center text-lg-start mb-4">                
                <h2 className="display-6 fw-bold mb-3">Información Personal</h2>
                <p className="text-center">
                  Mantén tu información actualizada para una mejor experiencia de aprendizaje
                </p>
              </div>
              <div className="card border-0">
                <div className="card-body p-4">
                  <form onSubmit={modificarperfil}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          <i className="bi bi-person-fill me-2 text-primary"></i>
                          Nombre completo
                        </label>
                        <input type="text" className="form-control" id="name" value={formData.nombre} name="nombre" onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          <i className="bi bi-envelope-fill me-2 text-primary"></i>
                          Email
                        </label>
                        <input type="email" className="form-control" id="email" value={formData.correo} name="correo" onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="level" className="form-label">
                          <i className="bi bi-bookmark-star-fill me-2 text-primary"></i>
                          Nivel de Inglés
                        </label>                        
                        <input type="text" className="form-control" id="level" value={level} disabled />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="nativeLanguage" className="form-label">
                          <i className="bi bi-translate me-2 text-primary"></i>
                          Idioma Nativo
                        </label>
                        <input type="text" className="form-control" id="nativeLanguage" defaultValue="Español" disabled />
                      </div>
                    </div>
                    <div className="mt-4 d-flex gap-3 flex-wrap">
                      <button type="submit" className="btn btn-primary btn-lg px-5">
                        <i className="bi bi-check-lg me-2"></i>
                        Guardar Cambios
                      </button>                      
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {popup && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={() => {                  
            setPopup(null);
          }}
        />
      )}
    </div>
  )
}