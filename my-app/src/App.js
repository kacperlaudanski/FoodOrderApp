import React, { useState, useRef, useContext } from 'react'; 
import Header from './components/Header/Header';
import './index.scss'
import Meals from './images/meals.jpg'
import Main from './components/Main/Main'
import Intro from './components/Main/Intro';
import DUMMY_MEALS from './components/DummyData';
import FoodList from './components/Main/FoodList';
import FoodCard from './components/Main/FoodCard';
import CartModule from './components/Cart/CartModule';
import CartStateProvider from './state/CartStateProvider';

function App() {

  const foodMenu = DUMMY_MEALS; 

  const [isClicked, stateHandler] = useState(false); 

  const cartButtonHandler = () => {
    stateHandler(true); 
  }

  const closingHandler = () => {
    stateHandler(false); 
  }


  return (
   
    <div className="App">

    <CartStateProvider>
      <Header 
        cartButtonHandler = {cartButtonHandler}
      /> 
      <CartModule 
        closingHandler = {closingHandler}
        overlayClass = {`overlay ${!isClicked && 'hidden'}`}
        cartClass = {`cart-container ${!isClicked && 'hidden'}`}
      /> 
      <div className='image-box'>
         <img src={Meals} alt='meals-background' className='meals-img'></img>
         <div className='img-crop'></div> 
      </div>
      <Main>
        <Intro /> 
        <FoodList>
           {foodMenu.map((item, index) => {
             return (
              <FoodCard 
                key = {item.id}
                id = {item.id}
                foodName = {item.name}
                foodDescription = {item.description}
                foodPrice = {item.price}
                cardRoundTop = {index === 0 ? 'card-round-top' : ''}
                cardRoundBottom = {index === foodMenu.length-1 ? 'card-round-bottom' : ''}
              />
             )
           })}
        </FoodList>
      </Main>
     </CartStateProvider>
    </div>
  );
}

export default App;
