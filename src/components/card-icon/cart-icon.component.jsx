import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

export default function CartIcon() {
  const {isOpen,setIsOpen,cartCount} = useContext(CartContext)

  const toggleCart = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
    </div>
  )
}