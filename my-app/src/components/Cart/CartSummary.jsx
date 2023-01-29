import React, {useContext} from 'react'; 
import CartContext from '../../state/cart-context';

const CartSummary = (props) => {

    const cartCtx = useContext(CartContext); 

    return (
        <>
        <div className="cart-summary">
          <h2>Total Amount</h2>
          <h2>${cartCtx.totalAmount}</h2>
        </div>
        <div className="cart-handling-buttons">
          <button type='button' className="close-button" onClick={props.closingHandler}>Close</button>
          <button type='button' className="order-button">Order</button>
        </div>
        </>
    )
}
export default CartSummary; 