import React, { useState } from 'react'
import CounterDisplay from '../components/ReduxToolkit/CounterDisplay'
import PostList from '../components/ReduxToolkit/PostList'
import ProductList from '../components/ReduxToolkit/ProductList'
import Card from '../components/ReduxToolkit/Card'

const AppRedux = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {/* <CounterDisplay />
        <PostList /> */}
        <div>
          <h1>Alışveriş Sitesi</h1>
          <button
            onClick={() => setShow(!show)}
          >
            {
              show ? "Ürünlere Dön" : "Sepete git"
            }
          </button>
          {
            show ? <Card/> : <ProductList />
          } 
        </div>

     
    </div>
  )
}

export default AppRedux