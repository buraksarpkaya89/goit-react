import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginRegisterPage from '../pages/LoginRegisterPage'
import DashboardPage from '../pages/DashboardPage'

const AppLogin = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginRegisterPage/>}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>

        </Routes>
    </div>
  )
}

export default AppLogin