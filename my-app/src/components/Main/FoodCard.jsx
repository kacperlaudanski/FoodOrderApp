import React, {useRef, useContext} from 'react'
import CartContext from '../../state/cart-context';

const FoodCard = (props) => {

const amountRef = useRef(); 
const cartCtx = useContext(CartContext); 

const submitHandler = (event) => {
  event.preventDefault(); 
  const enteredAmount = amountRef.current.value; 
  const enteredAmountNumber = +enteredAmount; 

    cartCtx.addItem({
      name: props.foodName, 
      price: props.foodPrice, 
      id: props.id,
      amount: enteredAmountNumber
    })
}

    return (
        <li className={`food-card ${props.cardRoundTop} ${props.cardRoundBottom}`}>
          <div className='food-info'>
            <h3 className='food-name'>{props.foodName}</h3>
            <small className='food-description'>{props.foodDescription}</small>
            <span className='food-price'>${props.foodPrice}</span>
          </div>
          <form className='food-add' onSubmit={submitHandler}>
            <div className='amount-input'>
              <label htmlFor='amount-input'>Amount</label>
              <input  ref = {amountRef} type='number' id='amount-input' defaultValue='1' min='1' max='5'></input>
            </div>
            <button className='food-add-button' type='submit'>+Add</button>
          </form>
        </li>
    )
}

export default FoodCard; 