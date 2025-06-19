import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../ReduxStore/slice/auth/operations'

const DashboardPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <button onClick={() => dispatch(logOut())}>Çıkış Yap</button>


    </div>
  )
}

export default DashboardPage