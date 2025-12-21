"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import * as paginaService from '../../../../services/pagina';

interface IQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  level?: string; 
}

export default function PreguntasPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const params = useParams();
  const nivel = params.nivel;

  const isPrueba = nivel === 'prueba';

  // Cargar preguntas
  useEffect(() => {
    async function fetchQuestions() {
      try {
        setIsLoading(true)
        setError(null)
        if (typeof nivel === 'string') {
          const respuesta = await paginaService.getQuestions(nivel);
          console.log('Preguntas recibidas:', respuesta); // DEBUG
          setQuestions(respuesta);
        }
      } catch(err) {
        setError("Error al cargar las preguntas. Por favor, intenta nuevamente.")
        console.error('Error cargando preguntas:', err);
      } finally {
        setIsLoading(false)
      }
    }
    if (nivel) {
      fetchQuestions();
    }
  }, [nivel]);

  // Guardar resultado de prueba - CORREGIDO
  useEffect(() => {
    async function resultadoprueba() {
      if (!isPrueba || !showResults) return; // Solo ejecutar si es prueba Y showResults es true
      
      try {
        const usuarioStr = localStorage.getItem('usuario');
        const usuario = JSON.parse(usuarioStr || '');
        const correo = usuario.correo; 
        if (!correo) {
          console.error('No hay correo en localStorage');
          return;
        }

        const nivelSugerido = getSuggestedLevel();
        if (!nivelSugerido) {
          console.error('No se pudo determinar el nivel sugerido');
          return;
        }

        console.log('Guardando nivel:', { nivel: nivelSugerido, correo }); // DEBUG

        const respuesta = await paginaService.postNivel({ 
          nivel: nivelSugerido, 
          correo: correo 
        });
        
        if (respuesta.ok) {
          console.log('✅ Nivel guardado correctamente');
          usuario.nivel = nivelSugerido;
          localStorage.setItem('usuario', JSON.stringify(usuario));
        
        }else {
            console.error('❌ Error al guardar nivel:', respuesta.message);
        }
      } catch (err) {
        console.error("❌ Error saving test result:", err);
      }
    }
    
    resultadoprueba();
  }, [showResults, isPrueba]); // DEPENDENCIAS CORREGIDAS

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(updatedAnswers);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] ?? null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] ?? null);
    }
  };

  const handleFinish = () => {
    if (selectedAnswer !== null) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      setUserAnswers(updatedAnswers);
    }
    setShowResults(true);
  };

  // Calcular resultados
  const results = questions.map((q, idx) => {
    const user = userAnswers[idx];
    return {
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      userIndex: user,
      isCorrect: user === q.correctIndex,
      level: q.level
    };
  });
  const correctCount = results.filter(r => r.isCorrect).length;

  // Determinar nivel sugerido basado en las respuestas correctas por nivel
  const getSuggestedLevel = () => {
    if (!isPrueba) return null;
    
    // Agrupar resultados por nivel
    const levelResults: Record<string, { correct: number; total: number }> = {};
    
    results.forEach(r => {
      if (r.level) {
        if (!levelResults[r.level]) {
          levelResults[r.level] = { correct: 0, total: 0 };
        }
        levelResults[r.level].total++;
        if (r.isCorrect) {
          levelResults[r.level].correct++;
        }
      }
    });

    console.log('Resultados por nivel:', levelResults); // DEBUG

    // Orden de niveles de menor a mayor
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    
    // Encontrar el nivel más alto donde el usuario acertó al menos 1 pregunta
    let suggestedLevel = 'A1';
    
    for (const level of levels) {
      if (levelResults[level]) {
        const { correct, total } = levelResults[level];
        // Si falló todas las preguntas de este nivel, su nivel es el anterior
        if (correct === 0) {
          break;
        }
        // Si acertó al menos 1, este es su nivel actual
        suggestedLevel = level;
      }
    }
    
    console.log('Nivel sugerido:', suggestedLevel); // DEBUG
    return suggestedLevel;
  };

  const suggestedLevel = getSuggestedLevel();

  return (
    <div className="pt-5 min-vh-100 d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container py-5">
        {isLoading ? (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <h3 className="fw-bold mb-2">Cargando preguntas...</h3>
                  <p className="text-muted">Por favor espera mientras preparamos tu {isPrueba ? 'prueba de nivel' : 'quiz'}.</p>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="bi bi-inbox" style={{ fontSize: '5rem', opacity: 0.5 }}></i>
                  <h3 className="fw-bold mb-2 mt-3">Sin preguntas</h3>
                  <p className="text-muted">No hay preguntas disponibles.</p>
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
              <div className="card border-0 shadow-lg mb-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1 fw-bold">
                        {isPrueba ? 'Prueba de Nivel de Inglés' : 'Quiz de Gramática'}
                      </h5>
                      {isPrueba && questions[currentQuestion].level && (
                        <small className="text-muted">Nivel: {questions[currentQuestion].level}</small>
                      )}
                    </div>
                    <div className="text-end">
                      <div className="badge bg-gradient-primary px-3 py-2 fs-6">
                        Pregunta {currentQuestion + 1} de {questions.length}
                      </div>
                    </div>
                  </div>
                  
                  <div className="progress mt-3" style={{ height: '8px' }}>
                    <div 
                      className="progress-bar bg-gradient-success" 
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-lg animate-in">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4 text-primary">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="d-grid gap-3 mb-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectAnswer(index)}
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
                        disabled={selectedAnswer === null}
                      >
                        Siguiente
                        <i className="bi bi-chevron-right ms-2"></i>
                      </button>
                    ) : (
                      <button 
                        onClick={handleFinish}
                        className="btn btn-success px-4"
                        disabled={selectedAnswer === null}
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg animate-in">
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <i className="bi bi-trophy-fill text-warning" style={{ fontSize: '5rem' }}></i>
                  </div>
                  <h2 className="fw-bold mb-3">
                    {isPrueba ? '¡Prueba de Nivel Completada!' : '¡Quiz Completado!'}
                  </h2>
                  <p className="text-muted mb-4">
                    {isPrueba 
                      ? 'Has terminado la evaluación. Aquí están tus resultados y nivel sugerido:' 
                      : 'Has terminado la evaluación. Aquí están tus resultados:'}
                  </p>

                  {isPrueba && suggestedLevel && (
                    <div className="alert alert-info mb-4">
                      <h4 className="fw-bold mb-2">
                        <i className="bi bi-star-fill me-2"></i>
                        Tu nivel sugerido: {suggestedLevel}
                      </h4>
                      <p className="mb-0">Basado en tus respuestas, te recomendamos comenzar con contenido de nivel {suggestedLevel}.</p>
                    </div>
                  )}

                  <div className="row g-3 mb-5">
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-check-circle-fill text-success fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">{correctCount}/{questions.length}</h3>
                        <small className="text-muted">Respuestas correctas</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-graph-up-arrow text-primary fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">{Math.round((correctCount/questions.length)*100)}%</h3>
                        <small className="text-muted">Puntuación</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 bg-light rounded-4">
                        <i className="bi bi-list-check text-info fs-2 mb-2 d-block"></i>
                        <h3 className="fw-bold mb-1">{questions.length}</h3>
                        <small className="text-muted">Total preguntas</small>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive mb-4">
                    <table className="table table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          {isPrueba && <th>Nivel</th>}
                          <th>Pregunta</th>
                          <th>Tu respuesta</th>
                          <th>Respuesta correcta</th>
                          <th>Resultado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((r, idx) => (
                          <tr key={idx} className={r.isCorrect ? 'table-success' : 'table-danger'}>
                            <td>{idx+1}</td>
                            {isPrueba && <td><span className="badge bg-secondary">{r.level}</span></td>}
                            <td className="text-start">{r.question}</td>
                            <td>{typeof r.userIndex === 'number' ? r.options[r.userIndex] : <span className="text-muted">Sin responder</span>}</td>
                            <td>{r.options[r.correctIndex]}</td>
                            <td>{r.isCorrect ? <span className="badge bg-success">Correcta</span> : <span className="badge bg-danger">Incorrecta</span>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                      onClick={() => {
                        setShowResults(false)
                        setCurrentQuestion(0)
                        setSelectedAnswer(userAnswers[0] ?? null)
                      }}
                      className="btn btn-primary btn-lg px-5"
                    >
                      <i className="bi bi-arrow-repeat me-2"></i>
                      Reintentar
                    </button>
                    <a href="/grammar" className="btn btn-outline-primary btn-lg px-5">
                      <i className="bi bi-book me-2"></i>
                      Ver lecciones
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