"use client"

import { useState } from "react"

export default function PreguntasPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "What ___ you doing yesterday at 5 PM?",
      options: ["was", "were", "are", "did"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "She ___ to the gym every morning.",
      options: ["go", "goes", "going", "went"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "I have ___ finished my homework.",
      options: ["yet", "already", "still", "always"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "If I ___ rich, I would travel the world.",
      options: ["am", "was", "were", "be"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "The book ___ by millions of people.",
      options: ["reads", "is reading", "was read", "has read"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "I'm looking forward ___ you again.",
      options: ["see", "to see", "seeing", "to seeing"],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "He speaks English ___ than his brother.",
      options: ["good", "better", "best", "well"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "We ___ in this house for ten years.",
      options: ["live", "are living", "have lived", "lived"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "You ___ smoke in this area. It's prohibited.",
      options: ["don't have to", "mustn't", "shouldn't", "can't"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "By this time tomorrow, I ___ my exam.",
      options: ["finish", "will finish", "will have finished", "am finishing"],
      correctAnswer: 2
    }
  ]

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
        {!showResults ? (
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

                    <a href="/" className="btn btn-outline-danger px-4">
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