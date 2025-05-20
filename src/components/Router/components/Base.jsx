import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Base = () => {
  return (
    <div>
        <nav>
                <ul>
                    <li><NavLink to="/">Ana Sayfa</NavLink></li>
                    <li><NavLink to="/about">Hakkında</NavLink></li>
                    <li><NavLink to="/products">Ürünler</NavLink></li>
                </ul>
            </nav>
            <Outlet />
    </div>
  )
}

export default Base