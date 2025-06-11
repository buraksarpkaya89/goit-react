import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ProductList.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../ReduxStore/slice/cartSlice'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const dispatch =useDispatch()
    
    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            console.log(response);
            setProducts(response.data.products)
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleAddToCart =(product) => {
        dispatch(addToCart(product))
    }


    return (
        <div className='product-list'>

            {
                products && products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <div className='product-image-container'>
                            <img
                                src={product?.thumbnail}
                                alt='image'
                                className='product-image'
                            />
                        </div>
                        <h2 className='product-title'>{product.title}</h2>
                        <div className='price'> {product.price}</div>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className='add-to-cart-button'
                        >
                            Sepete Ekle
                        </button>
                    </div>

                ))
            }

        </div>
    )
}

export default ProductList