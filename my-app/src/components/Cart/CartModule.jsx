import React, {useContext} from "react";
import './cart.scss'
import CartElement from "./CartElement";
import CartSummary from "./CartSummary";
import ReactDOM from "react-dom";
import CartContext from "../../state/cart-context";


const CartBox = (props) => {

    const cartCtx = useContext(CartContext); 

    const incrementHandler = (item) => {
      cartCtx.addItem({...item, amount:1})
    }

    const removeHandler = (id) => {
       cartCtx.removeItem(id)
    }

    return (
        <div className= {props.className}>
          {cartCtx.items.map((item, index) => {
            return (
                <CartElement 
                    key = {item.id}
                    name = {item.name}
                    price = {item.price}
                    amount = {item.amount}
                    incrementHandler = {incrementHandler.bind(null, item)}
                    removeHandler = {removeHandler.bind(null, item.id)} 
                />
            ) 
          })}
          <CartSummary 
            closingHandler = {props.closingHandler}
           /> 
        </div>
    )
}

const Overlay = (props) => {
    return (
       <div className={props.overlayClass}>
        <CartBox
          closingHandler = {props.closingHandler}
          className = {props.cartClass}
        /> 
       </div>
    )
}

const CartModule = (props) => {
    return (
        <>
          {ReactDOM.createPortal(<Overlay 
            closingHandler = {props.closingHandler} 
            overlayClass={props.overlayClass} 
            cartClass={props.cartClass}/>,
         document.getElementById('cart-modal'))}
        </>

    )
}
export default CartModule; 

