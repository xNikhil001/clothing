import React from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'

export default function CartDropdown() {
  const navigate = useNavigate()
  const {cartItems} = useContext(CartContext)
  const gotoCheckout = () => navigate('/checkout')
  return (
    
    <div className="cart-dropdown-container">
        <div className='cart-items'>
          {
            cartItems.map((cartItem)=>{
              return <CartItem key={cartItem.id} cartItem={cartItem} />
            })
          }
        </div>
        <Button onClick={gotoCheckout}>Checkout</Button>
    </div>
  )
}
