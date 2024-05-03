import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TokenAuth from './ContextAPI/TokenAuth.jsx'

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenAuth>
    <BrowserRouter>
        <App />
      </BrowserRouter>
    </TokenAuth>
  </React.StrictMode>,
)
