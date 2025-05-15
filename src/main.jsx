import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppAxios from './Apps/AppAxios.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <AppAxios/>
)
