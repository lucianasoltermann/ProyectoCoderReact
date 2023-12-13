import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import cart from '../assets/carrito.svg'
import './CartWidgets.modules.css'
import React, { useContext } from 'react'

const CartWidget =() =>{
  const {totalQuantity} = useContext(CartContext)
  
  return(
    <Link to= '/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className="imgcarrito" src={cart} alt="carrito" />
      {totalQuantity}
    </Link>
  )
}

export default CartWidget;