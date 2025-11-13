"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import * as paginaService from '../../../../services/pagina';

export default function PreguntasPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [questions, setQuestions] = useState<Array<{id:number,question:string,options:string[]}>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams();
  const nivel = params.nivel;
  
  useEffect (() => {
    async function fetchQuestions() {
      try {
        setIsLoading(true)
        setError(null)
        if (typeof nivel === 'string') {
          const respuesta = await paginaService.getQuestions(nivel);
          console.log(respuesta)
          setQuestions(respuesta);
        }
      } catch(err) {
        console.error("Error al llamar al servicio pagina:", err);
        setError("Error al cargar las preguntas. Por favor, intenta nuevamente.")
      } finally {
        setIsLoading(false)
      }
    }

    if (nivel) {
      fetchQuestions();
    }
  }, [nivel]);

 

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="pt-5 min-vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container py-5">
        {isLoading ? (
          /* Loading Screen */
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <h3 className="fw-bold mb-2">Cargando preguntas...</h3>
                  <p className="text-muted">Por favor espera mientras preparamos tu quiz.</p>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
          /* Error Screen */
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="bi bi-exclamation-circle text-danger" style={{ fontSize: '5rem' }}></i>
                  <h3 className="fw-bold mb-2 mt-3">{error}</h3>
                  <a href="/grammar" className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : questions.length === 0 ? (
          /* No Questions Screen */
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="bi bi-inbox" style={{ fontSize: '5rem', opacity: 0.5 }}></i>
                  <h3 className="fw-bold mb-2 mt-3">Sin preguntas</h3>
                  <p className="text-muted">No hay preguntas disponibles para este nivel.</p>
                  <a href="/grammar" className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : !showResults ? (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Header Card */}
              <div className="card border-0 shadow-lg mb-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1 fw-bold">Quiz de Gramática</h5>
                      <small className="text-muted">Evaluación de nivel intermedio</small>
                    </div>
                    <div className="text-end">
                      <div className="badge bg-gradient-primary px-3 py-2 fs-6">
                        Pregunta {currentQuestion + 1} de {questions.length}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="progress mt-3" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-gradient-success" 
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="card border-0 shadow-lg animate-in">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4 text-primary">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="d-grid gap-3 mb-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={`btn btn-lg text-start p-4 ${
                          selectedAnswer === index 
                            ? 'btn-primary' 
                            : 'btn-outline-secondary'
                        }`}
                        style={{ 
                          transition: 'all 0.3s ease',
                          border: selectedAnswer === index ? '2px solid' : '2px solid #dee2e6'
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <span className="badge bg-light text-dark me-3 fs-6" style={{ width: '40px', height: '40px', lineHeight: '40px' }}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="fw-medium">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex gap-3">
                    <button 
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className="btn btn-outline-secondary px-4"
                    >
                      <i className="bi bi-chevron-left me-2"></i>
                      Anterior
                    </button>
                    
                    <div className="flex-grow-1"></div>

                    <a href="/grammar" className="btn btn-outline-danger px-4">
                      <i className="bi bi-x-circle me-2"></i>
                      Salir
                    </a>

                    {currentQuestion < questions.length - 1 ? (
                      <button 
                        onClick={handleNext}
                        className="btn btn-primary px-4"
                      >
                        Siguiente
                        <i className="bi bi-chevron-right ms-2"></i>
                      </button>
                    ) : (
                      <button 
                        onClick={() => setShowResults(true)}
                        className="btn btn-success px-4"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="card border-0 bg-white bg-opacity-10 backdrop-blur mt-4">
                <div className="card-body p-3 text-white text-center">
                  <small>
                    <i className="bi bi-info-circle me-2"></i>
                    Selecciona una respuesta antes de continuar
                  </small>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg animate-in">
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-trophy-fill text-warning" style={{ fontSize: '5rem' }}></i>
                  </div>
                  
                  <h2 className="fw-bold mb-3">¡Quiz Completado!</h2>
                  <p className="text-muted mb-4">Has terminado la evaluación. Aquí están tus resultados:</p>

                  {/* Results Stats */}
                  <div className="row g-3 mb-5">
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-check-circle-fill text-success fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">8/10</h3>
                        <small className="text-muted">Respuestas correctas</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-graph-up-arrow text-primary fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">80%</h3>
                        <small className="text-muted">Puntuación</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-clock-fill text-info fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">12:34</h3>
                        <small className="text-muted">Tiempo total</small>
                      </div>
                    </div>
                  </div>

                  {/* Performance Message */}
                  <div className="alert alert-success mb-4" role="alert">
                    <h5 className="alert-heading">
                      <i className="bi bi-star-fill me-2"></i>
                      ¡Excelente trabajo!
                    </h5>
                    <p className="mb-0">
                      Has demostrado un buen dominio del tema. Sigue practicando para mejorar aún más.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                      onClick={() => {
                        setShowResults(false)
                        setCurrentQuestion(0)
                        setSelectedAnswer(null)
                      }}
                      className="btn btn-primary btn-lg px-5"
                    >
                      <i className="bi bi-arrow-repeat me-2"></i>
                      Reintentar
                    </button>
                    <a href="/preguntas" className="btn btn-outline-primary btn-lg px-5">
                      <i className="bi bi-list-ul me-2"></i>
                      Ver todas
                    </a>
                    <a href="/" className="btn btn-outline-secondary btn-lg px-5">
                      <i className="bi bi-house-fill me-2"></i>
                      Inicio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}