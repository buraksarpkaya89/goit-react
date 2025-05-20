import React from 'react'
import products from '../data/products';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const {id,elma} = useParams()

    console.log(id);
    console.log(elma);

    const product = products.find((product) => product.id === Number(id))
  return (
    <div>
        <h1>Ürün Detayı</h1>
        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <img src={product.image} alt="image" width={200}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </div>
    </div>
  )
}

export default ProductDetail