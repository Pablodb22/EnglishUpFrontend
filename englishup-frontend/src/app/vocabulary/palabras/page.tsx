"use client"

import { useState } from "react"

export default function PalabrasPage() {
  const [savedWords, setSavedWords] = useState<number[]>([])

  const words = [
    {
      id: 1,
      english: "Hello",
      spanish: "Hola",
      pronunciation: "/həˈloʊ/",
      phonetic: "je-LOU",
      category: "Saludos",
      level: "A1"
    },
    {
      id: 2,
      english: "Goodbye",
      spanish: "Adiós",
      pronunciation: "/ɡʊdˈbaɪ/",
      phonetic: "gud-BAI",
      category: "Saludos",
      level: "A1"
    },
    {
      id: 3,
      english: "Thank you",
      spanish: "Gracias",
      pronunciation: "/θæŋk juː/",
      phonetic: "ZANK iu",
      category: "Cortesía",
      level: "A1"
    },
    {
      id: 4,
      english: "Please",
      spanish: "Por favor",
      pronunciation: "/pliːz/",
      phonetic: "PLIS",
      category: "Cortesía",
      level: "A1"
    },
    {
      id: 5,
      english: "Friend",
      spanish: "Amigo/a",
      pronunciation: "/frend/",
      phonetic: "FREND",
      category: "Relaciones",
      level: "A1"
    },
    {
      id: 6,
      english: "Family",
      spanish: "Familia",
      pronunciation: "/ˈfæməli/",
      phonetic: "FA-mi-li",
      category: "Relaciones",
      level: "A1"
    },
    {
      id: 7,
      english: "Beautiful",
      spanish: "Hermoso/a",
      pronunciation: "/ˈbjuːtɪfəl/",
      phonetic: "BIU-ti-ful",
      category: "Adjetivos",
      level: "A2"
    },
    {
      id: 8,
      english: "Important",
      spanish: "Importante",
      pronunciation: "/ɪmˈpɔːrtənt/",
      phonetic: "im-POR-tant",
      category: "Adjetivos",
      level: "A2"
    },
    {
      id: 9,
      english: "Restaurant",
      spanish: "Restaurante",
      pronunciation: "/ˈrestərɑːnt/",
      phonetic: "RES-to-rant",
      category: "Lugares",
      level: "A2"
    },
    {
      id: 10,
      english: "Airport",
      spanish: "Aeropuerto",
      pronunciation: "/ˈerˌpɔrt/",
      phonetic: "EIR-port",
      category: "Lugares",
      level: "A2"
    },
    {
      id: 11,
      english: "Coffee",
      spanish: "Café",
      pronunciation: "/ˈkɔːfi/",
      phonetic: "CO-fi",
      category: "Comida",
      level: "A1"
    },
    {
      id: 12,
      english: "Water",
      spanish: "Agua",
      pronunciation: "/ˈwɔːtər/",
      phonetic: "UO-ter",
      category: "Comida",
      level: "A1"
    },
    {
      id: 13,
      english: "Yesterday",
      spanish: "Ayer",
      pronunciation: "/ˈjestərdeɪ/",
      phonetic: "YES-ter-dei",
      category: "Tiempo",
      level: "A2"
    },
    {
      id: 14,
      english: "Tomorrow",
      spanish: "Mañana",
      pronunciation: "/təˈmɑːroʊ/",
      phonetic: "tu-MA-rou",
      category: "Tiempo",
      level: "A2"
    },
    {
      id: 15,
      english: "Happy",
      spanish: "Feliz",
      pronunciation: "/ˈhæpi/",
      phonetic: "JA-pi",
      category: "Emociones",
      level: "A1"
    },
    {
      id: 16,
      english: "Excited",
      spanish: "Emocionado/a",
      pronunciation: "/ɪkˈsaɪtɪd/",
      phonetic: "ek-SAI-ted",
      category: "Emociones",
      level: "A2"
    },
    {
      id: 17,
      english: "Computer",
      spanish: "Computadora",
      pronunciation: "/kəmˈpjuːtər/",
      phonetic: "com-PIU-ter",
      category: "Tecnología",
      level: "A2"
    },
    {
      id: 18,
      english: "Phone",
      spanish: "Teléfono",
      pronunciation: "/foʊn/",
      phonetic: "FOUN",
      category: "Tecnología",
      level: "A1"
    },
    {
      id: 19,
      english: "Money",
      spanish: "Dinero",
      pronunciation: "/ˈmʌni/",
      phonetic: "MA-ni",
      category: "Negocios",
      level: "A2"
    },
    {
      id: 20,
      english: "Work",
      spanish: "Trabajo",
      pronunciation: "/wɜːrk/",
      phonetic: "UORK",
      category: "Negocios",
      level: "A1"
    },
    {
      id: 21,
      english: "House",
      spanish: "Casa",
      pronunciation: "/haʊs/",
      phonetic: "JAUS",
      category: "Lugares",
      level: "A1"
    },
    {
      id: 22,
      english: "School",
      spanish: "Escuela",
      pronunciation: "/skuːl/",
      phonetic: "SKUL",
      category: "Lugares",
      level: "A1"
    },
    {
      id: 23,
      english: "Love",
      spanish: "Amor",
      pronunciation: "/lʌv/",
      phonetic: "LAV",
      category: "Emociones",
      level: "A1"
    },
    {
      id: 24,
      english: "Help",
      spanish: "Ayuda",
      pronunciation: "/help/",
      phonetic: "JELP",
      category: "Acciones",
      level: "A1"
    },
    {
      id: 25,
      english: "Understand",
      spanish: "Entender",
      pronunciation: "/ˌʌndərˈstænd/",
      phonetic: "an-der-STAND",
      category: "Acciones",
      level: "A2"
    }
  ]

  const toggleSave = (id: number) => {
    if (savedWords.includes(id)) {
      setSavedWords(savedWords.filter(wordId => wordId !== id))
    } else {
      setSavedWords([...savedWords, id])
    }
  }

  const getLevelColor = (level: string) => {
    switch(level) {
      case "A1": return "success"
      case "A2": return "info"
      case "B1": return "warning"
      case "B2": return "primary"
      default: return "secondary"
    }
  }

  return (
    <div 
  style={{ 
    background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)', 
    paddingTop: '5rem' // puedes ajustar a 8rem, 10rem, etc.
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
              <p className="text-white-50 mb-0">
                <i className="bi bi-collection me-2"></i>
                {words.length} palabras disponibles • {savedWords.length} guardadas
              </p>
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
                    {/* Header with Level and Category */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className={`badge bg-${getLevelColor(word.level)} px-3 py-2`}>
                        {word.level}
                      </span>
                      <span className="badge bg-light text-dark px-3 py-2">
                        {word.category}
                      </span>
                    </div>

                    {/* English Word */}
                    <div className="mb-3">
                      <h3 className="fw-bold text-primary mb-2" style={{ fontSize: '1.75rem' }}>
                        {word.english}
                      </h3>
                      <div className="text-muted small mb-1">
                        <i className="bi bi-music-note me-2"></i>
                        <span className="font-monospace">{word.pronunciation}</span>
                      </div>
                      <div className="text-info small">
                        <i className="bi bi-volume-up me-2"></i>
                        <span className="fw-medium">{word.phonetic}</span>
                      </div>
                    </div>

                    {/* Spanish Translation */}
                    <div className="mb-4 p-3 bg-light rounded-3">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-translate text-success fs-4 me-3"></i>
                        <div>
                          <small className="text-muted d-block">Español</small>
                          <h5 className="mb-0 fw-bold">{word.spanish}</h5>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2">
                      <button 
                        className="btn btn-primary flex-grow-1"
                        title="Escuchar pronunciación"
                      >
                        <i className="bi bi-volume-up-fill me-2"></i>
                        Escuchar
                      </button>
                      <button 
                        onClick={() => toggleSave(word.id)}
                        className={`btn ${savedWords.includes(word.id) ? 'btn-success' : 'btn-outline-success'} flex-grow-1`}
                        title={savedWords.includes(word.id) ? "Guardada" : "Guardar palabra"}
                      >
                        <i className={`bi bi-${savedWords.includes(word.id) ? 'bookmark-check-fill' : 'bookmark'} me-2`}></i>
                        {savedWords.includes(word.id) ? 'Guardada' : 'Guardar'}
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