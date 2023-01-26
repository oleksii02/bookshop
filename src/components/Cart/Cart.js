import React from 'react';
import './Cart.scss'

const Cart = ({ordersPrice}) => {
    return (
        <div className='cart'>
            <div className='cart_body'>
                <p><b>Total Price:</b> {ordersPrice} $</p>
            </div>
        </div>
    )
}

export default Cart;