import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginRegisterPage from '../pages/LoginRegisterPage'
import DashboardPage from '../pages/DashboardPage'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectIsRefreshing } from '../ReduxStore/selectors/selectors'
import { refreshUser } from '../ReduxStore/slice/auth/operations'

const AppLogin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(()=> {
    dispatch(refreshUser())
  },[dispatch])

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard")
    }
  },[isLoggedIn,navigate])

  if(isRefreshing){
    return <div>Sayfa Yükleniyor...</div>
  }

  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginRegisterPage/>}/>
            <Route path='/dashboard' element={isLoggedIn ? <DashboardPage/> : <Navigate to="/" replace />}/>

        </Routes>
    </div>
  )
}

export default AppLogin