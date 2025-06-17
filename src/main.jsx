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
import AppRedux from './Apps/AppRedux.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './ReduxStore/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import AppThunk from './Apps/AppThunk.jsx'
import AppSelector from './Apps/AppSelector.jsx'
import AppLogin from './Apps/AppLogin.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    // <AppAxios/>
    // <AppHook/>
    // <DataProvider>
    //    <AppContext />
    //  </DataProvider>
    // <BrowserRouter>
    //     <AppRouter />
    // </BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            {/* <AppRedux /> */}
            {/* <AppThunk/> */}
            {/* <AppSelector/> */}
            <BrowserRouter>
                <AppLogin />
            </BrowserRouter>

        </PersistGate>

    </Provider>,

)
