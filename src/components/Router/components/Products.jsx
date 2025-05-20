import React from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>Ürünler</h1>
        <div>
            {
                products.map((product) => (
                    <Link to= {`/products/${product.id}`} key={product.id} >
                        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
                            <img src={product.image} alt="image" width={200}/>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>  
                    </Link>
                   
                ))
            }
        </div>
    </div>
  )
}

export default Products