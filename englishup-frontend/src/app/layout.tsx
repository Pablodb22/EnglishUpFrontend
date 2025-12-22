// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EnglishUp - Aprende Inglés Fácilmente',
  description: 'Aplicación educativa para mejorar tu inglés con gramática, vocabulario y más.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={inter.className}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}
      >
        <Navbar />
        <main style={{ flex: 1, paddingTop: '70px', width: '100%' }}>{children}</main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
