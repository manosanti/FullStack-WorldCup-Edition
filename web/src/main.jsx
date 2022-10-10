import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './assets/pages/index'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
