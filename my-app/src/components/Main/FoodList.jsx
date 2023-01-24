import React from 'react'

const FoodList = (props) => {
    return (
        <ul className='food-list'>
            {props.children}
        </ul>
    )
}

export default FoodList;