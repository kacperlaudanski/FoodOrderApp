import React from 'react'
import './header.scss'
import CartButton from './CartButton'

const Header = (props) => {
    return (
        <>
         <header>
            <h1>ReactFood</h1>
            <CartButton />
         </header>
        </>
    )
}

export default Header; 