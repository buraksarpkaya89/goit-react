import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../../ReduxStore/slice/cartSlice';

const Card = () => {
    const items = useSelector((state) => state.cart.items)
    const total = useSelector((state) => state.cart.total)

    const dispatch = useDispatch()

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }
    const handlePurchase = () => {
        alert("Satın alındı")
        dispatch(clearCart())
    }
    return (
        <div className='cart-container'>
            <h2>Sepetim</h2>
            {
                items.length === 0 ? (
                    <p>Sepetiniz Boş</p>
                ) :
                    <div className='cart-items'>
                        {
                            items.map((item) => (
                                <div key={item.id} className='cart-item'>
                                    <img
                                        src={item.thumbnail}
                                        alt='img'
                                        className='cart-item-image'
                                    />
                                    <div className='cart-item-details'>
                                        <h3 className='cart-item-title'>{item.title}</h3>
                                        <div>
                                            <span>Adet:{item.quantity}</span>
                                        </div>
                                        <div className='cart-item-price'> {item.price}</div>
                                    </div>
                                    <button
                                        className='remove-button'
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        Kaldır
                                    </button>
                                    <div>
                                        <p>Toplam: <span>{total}</span></p>

                                    </div>
                                </div>

                            ))
                        }
                        <button onClick={handlePurchase}>
                            Satın al
                        </button>
                    </div>
            }

        </div>
    )
}

export default Card