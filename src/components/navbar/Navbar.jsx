import React, { useContext } from 'react'
import CartButton from '../../layouts/cart-button/CartButton'

import './navbar.css'

const Navbar = (props) => {

  return (
    <nav className='foodOrder__navbar'>
      <div className='nav-logo'>
        <h1>foodix</h1> 
      
      </div>
      <div className='nav-links'>
       <CartButton onShow={props.onShowCart}></CartButton>
      </div>
    </nav>
  )
}

export default Navbar
