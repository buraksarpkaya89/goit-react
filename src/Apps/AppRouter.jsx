import React from 'react'
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Products from '../components/Router/components/Products';
import ProductDetail from '../components/Router/components/ProductDetail';
import Base from '../components/Router/components/Base';
import Home from '../components/Router/components/Home';
import About from '../components/Router/components/About';
import Test from '../components/Router/components/Test';

const AppRouter = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Ana Sayfa</NavLink></li>
                    <li><NavLink to="/about">Hakkında</NavLink></li>
                    <li><NavLink to="/products">Ürünler</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route index path='test' element={<Test />} />
                </Route>

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}
export default AppRouter