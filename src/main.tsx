import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Leaflet's stylesheet stays ahead of the site's own so index.css keeps overriding it
// exactly as designed. Leaflet's JavaScript loads with the Atlas chunk.
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
