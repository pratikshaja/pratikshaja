import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User from './User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <User/>
  </StrictMode>,
)
