import React, {useContext} from "react";
import CartContext from "../../state/cart-context";

const CartElement = (props) => {

    const cartCtx = useContext(CartContext); 


    
    return (
      <div className="cart-element">
        <div className="food-info">
          <h2 className="food-name">{props.name}</h2>
          <span className="food-price">${props.price}</span>
        </div>
        <div className="counter">x{props.amount}</div>
        <div className="buttons">
            <button type='button' className="cart-counter-button" onClick={props.removeHandler}>-</button>
            <button type='button' className="cart-counter-button" onClick={props.incrementHandler}>+</button>
        </div>
      </div>
    )
}

export default CartElement; 