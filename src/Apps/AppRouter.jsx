import React, { lazy, Suspense, use } from 'react'
import { Routes, Route, NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";
import Products from '../components/Router/components/Products';
import ProductDetail from '../components/Router/components/ProductDetail';
import Home from '../components/Router/components/Home';
import About from '../components/Router/components/About';
import Test from '../components/Router/components/Test';
import SearchParamsExample from '../components/Router/components/lesson2/SearchParamsExample';
import LocationExample from '../components/Router/components/lesson2/LocationExample';


const LazyHelp = lazy(() => import('../components/Router/components/lesson2/LazyComponents/Help'));

const ContactLazy = lazy(() => import("../components/Router/components/lesson2/LazyComponents/Contact"))




//useNavigate örneği
const NavigateExample = () => {
    const navigate = useNavigate();

    const admin = "burak.sarpkaya@gmail.com"

    const handleClick = () => {
        admin === "burak.sarpkaya@gmail.com" ? navigate('/products') : navigate('/');
    }
    return (
        <div>
            <button onClick={handleClick}>Ürünlere Git</button>
        </div>
    )
}

//Navigate örneği
const NavigateExample2 = ({ children }) => {

    const admin = "burak.sarpkaya@gmail.com"
    const isAuthenticated = admin === "burak.sarpkaya@gmail.com" ? true : false;

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }
    return children
}





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
            <NavigateExample />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route index path='test' element={<Test />} />
                </Route>

                
                <Route path="/lazyhelp" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyHelp />
                    </Suspense>
                } />
                <Route path="/lazycontact" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactLazy />
                    </Suspense>
                } />

                <Route path="/search-params" element={<SearchParamsExample />} />
                <Route path='location-test' element={<LocationExample />} />
                <Route path="/products" element={
                    <NavigateExample2>
                        <Products />
                    </NavigateExample2>
                } />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}
export default AppRouter