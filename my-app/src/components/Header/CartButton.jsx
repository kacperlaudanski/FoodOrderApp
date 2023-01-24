import React, {useContext, useState} from 'react'
import './header.scss'
import CartIcon from './CartIcon'
import CartState from '../state/cart-button-state'

const CartButton = (props) => {

    return (
        <CartState.Provider>
           <button type='button' onClick={props.cartButtonHandler}>
             <CartIcon /> 
             <span className = 'cart-counter'>5</span>
           </button>
        </CartState.Provider>
    )
}

export default CartButton; 