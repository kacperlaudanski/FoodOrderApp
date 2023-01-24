import React from 'react'

const FoodCard = (props) => {
    return (
        <li className={`food-card ${props.cardRoundTop} ${props.cardRoundBottom}`}>
          <div className='food-info'>
            <h3 className='food-name'>{props.foodName}</h3>
            <small className='food-description'>{props.foodDescription}</small>
            <span className='food-price'>${props.foodPrice}</span>
          </div>
          <form className='food-add'>
            <div className='amount-input'>
              <label htmlFor='amount-input'>Amount</label>
              <input type='number' id='amount-input'></input>
            </div>
            <button className='food-add-button' type='submit'>+Add</button>
          </form>
        </li>
    )
}

export default FoodCard; 