import React from "react";
import './cart.scss'
import CartElement from "./CartElement";
import CartSummary from "./CartSummary";
import ReactDOM from "react-dom";


const CartBox = (props) => {
    return (
        <div className= {props.className}>
          <CartElement /> 
          <CartSummary 
            closingHandler = {props.closingHandler}
           /> 
        </div>
    )
}

const CartModule = (props) => {
    return (
        <>
          {ReactDOM.createPortal(<CartBox closingHandler = {props.closingHandler} className={props.className}/> , document.getElementById('cart-modal'))}
        </>

    )
}
export default CartModule; 
