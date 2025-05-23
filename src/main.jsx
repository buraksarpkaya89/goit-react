import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppAxios from './Apps/AppAxios.jsx'
import AppHook from './Apps/AppHook.jsx'
import AppContext from './Apps/AppContext.jsx'
import DataProvider from './store/DataContext.jsx'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Apps/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    // <AppAxios/>
    // <AppHook/>
    // <DataProvider>
    //    <AppContext />
    //  </DataProvider>
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
)
