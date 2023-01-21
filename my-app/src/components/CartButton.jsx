import React from 'react'
import './header.scss'
import CartIcon from './CartIcon'

const CartButton = (props) => {
    return (
        <>
          <button type='button'>
            <CartIcon /> 
            <span className = 'cart-counter'>5</span>
          </button>
        </>
    )
}

export default CartButton; 