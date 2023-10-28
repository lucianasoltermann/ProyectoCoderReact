import cart from '../assets/carrito.svg'
import './CartWidgets.modules.css'
import React from 'react'

function CartWidget () {
    return (
        <div>
          <img className="imgcarrito" src={cart} alt="carrito" />
          0
        </div>
      )
  }
  
export default CartWidget;