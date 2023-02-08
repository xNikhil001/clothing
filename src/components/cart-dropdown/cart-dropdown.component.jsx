import React from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

export default function CartDropdown() {
  return (
    
    <div className="cart-dropdown-container">
        <div className='cart-items'></div>
        <Button>Checkout</Button>
    </div>
  )
}
