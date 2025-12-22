"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import * as paginaService from '../../../../services/pagina';

export default function PalabrasPage() {
  const params = useParams();
  const tema = params.tema;
  const [words, setWords] = useState<Array<{id:number,word:string,meaning_es:string, meaning_en:string, pronunciation:string,respelling_es:string}>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)



  const reproducirVoz = (texto: string) => {
    if ('speechSynthesis' in window) {      
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => console.log("✓ Reproduciendo:", texto);
      utterance.onend = () => console.log("✓ Terminó de reproducir");
      utterance.onerror = (e) => console.error("Error en síntesis de voz:", e);
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tu navegador no soporta síntesis de voz");
    }
  };

  useEffect (() => {
    async function fetchQuestions() {
      try {
        setIsLoading(true)
        setError(null)
        if (typeof tema === 'string') {
          const respuesta = await paginaService.getWords(tema);
          setWords(respuesta);
        }
      } catch(err) {
        setError("Error al cargar las preguntas. Por favor, intenta nuevamente.")
      } finally {
        setIsLoading(false)
      }
    }
    if (tema) {
      fetchQuestions();
    }
  }, [tema]);

  if (isLoading) {
    return (
      <div className="pt-5 min-vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <h3 className="fw-bold mb-2">Cargando palabras...</h3>
                  <p className="text-muted">Por favor espera mientras preparamos tu vocabulario.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="pt-5 min-vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="bi bi-exclamation-circle text-danger" style={{ fontSize: '5rem' }}></i>
                  <h3 className="fw-bold mb-2 mt-3">{error}</h3>
                  <a href="/vocabulary" className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      style={{ 
        background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)', 
        paddingTop: '5rem'
      }}
    >
      {/* Header */}
      <section className="py-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="text-white fw-bold mb-2">
                <i className="bi bi-book-fill me-3"></i>
                Diccionario de Vocabulario
              </h1>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <a href="/vocabulary" className="btn btn-light px-4">
                <i className="bi bi-x-circle me-2"></i>
                Salir
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Words Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {words.map(word => (
              <div key={word.id} className="col-lg-6 col-xl-4">
                <div className="card h-100 border-0 shadow-sm hover-card" style={{ transition: 'all 0.3s ease' }}>
                  <div className="card-body p-4">                   
                    {/* English Word */}
                    <div className="mb-3">
                      <h3 className="fw-bold text-primary mb-2" style={{ fontSize: '1.75rem' }}>
                        {word.word}
                      </h3>
                      <div className="text-muted small mb-1">
                        <i className="bi bi-music-note me-2"></i>
                        <span className="font-monospace">{word.respelling_es}</span>
                      </div>
                    </div>
                    
                    {/* Spanish Translation */}
                    <div className="mb-4 p-3 bg-light rounded-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-translate text-success fs-4 me-3"></i>
                        <div className="flex-1 flex flex-col items-start md:items-center pr-8 md:pr-16">
                          <span className="font-bold text-lg text-blue-700">{word.meaning_es}</span>                            
                        </div>                         
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-primary flex-grow-1"
                        onClick={() => reproducirVoz(word.word)}
                        title="Escuchar pronunciación"
                      >
                        <i className="bi bi-volume-up-fill me-2"></i>
                        Escuchar
                      </button>                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}