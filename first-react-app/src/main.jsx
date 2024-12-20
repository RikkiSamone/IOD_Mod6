import React from 'react'
import ReactDOM from 'react-dom/client'
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import { ErrorBoundary } from 'react-error-boundary'
//import { ErrorMessage } from './error.jsx'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App /> {/* can wrap App or other high-level parent components }
    
  </StrictMode >,}*/


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  {/* All other routing components need this to work */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>,
)
