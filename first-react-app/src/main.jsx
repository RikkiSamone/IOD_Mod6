import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { ErrorBoundary } from 'react-error-boundary'
//import { ErrorMessage } from './error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App /> {/* can wrap App or other high-level parent components */}
    
  </StrictMode>,
)
