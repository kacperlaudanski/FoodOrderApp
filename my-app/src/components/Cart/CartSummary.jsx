import React from 'react'; 

const CartSummary = (props) => {
    return (
        <>
        <div className="cart-summary">
          <h2>Total Amount</h2>
          <h2>$88.99</h2>
        </div>
        <div className="cart-handling-buttons">
          <button type='button' className="close-button" onClick={props.closingHandler}>Close</button>
          <button type='button' className="order-button">Order</button>
        </div>
        </>
    )
}
export default CartSummary; 