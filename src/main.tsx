import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { getCookieConsent, initAnalytics } from './lib/analytics'
import './index.css'

// Only fire analytics if the visitor has previously accepted cookies.
// First-time visitors are gated by <CookieBanner /> rendered inside App.
if (getCookieConsent() === 'accepted') {
  initAnalytics()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
