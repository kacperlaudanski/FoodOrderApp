import React from "react";

const CartElement = (props) => {
    return (
      <div className="cart-element">
        <div className="food-info">
          <h2 className="food-name">Sushi</h2>
          <span className="food-price">$22.99</span>
        </div>
        <div className="counter">x4</div>
        <div className="buttons">
            <button type='button' className="cart-counter-button">-</button>
            <button type='button' className="cart-counter-button">+</button>
        </div>
      </div>
    )
}

export default CartElement; 