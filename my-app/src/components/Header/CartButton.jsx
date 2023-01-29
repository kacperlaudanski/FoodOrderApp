import React, { useContext, useEffect, useState } from 'react'
import './header.scss'
import CartIcon from './CartIcon'
import CartContext from '../../state/cart-context'

const CartButton = (props) => {

const cartCtx = useContext(CartContext); 
const {items} = cartCtx; 
const [buttonHighlight, setButtonHighlight] = useState(false)

const numberOfCartItems = items.reduce((currentNumber, item) => {
  return currentNumber + item.amount;
}, 0)

useEffect(() => {
  if (items.length ===0){
    return; 
  }
  setButtonHighlight(true)
  setTimeout(()=>{
    setButtonHighlight(false)
  }, 300)
}, [items])

    return (
           <button type='button' onClick={props.cartButtonHandler} className={buttonHighlight ? 'bump' : ''}>
             <CartIcon /> 
             <span className = 'cart-counter'>{numberOfCartItems}</span>
           </button>
    )
}

export default CartButton; 