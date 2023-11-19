import React, { useState } from 'react';
import './ItemCount.modules.css'

const ItemCount = ({stock, initial, onAdd}) =>{
  const [quantity, SetQuanty] = useState(initial)

  const increment =() =>{
    if(quantity < stock){
      SetQuanty(quantity+1)
    }
  }
  const decrement =() =>{
    if (quantity >1){
      SetQuanty(quantity-1)
    }
  }
  return(  
  <div className='contador'>
  <div className='controles'>
    <button className='boton' onClick={decrement}>-</button>
    <h3>{quantity}</h3>
    <button className='boton' onClick={increment}>+</button>
  </div>
  <div>
    <button className='botonAgregar' onClick={() => onAdd (quantity)} disabled={!stock}>AGREGAR AL CARRITO</button>
  </div>
</div>
)
}


export default ItemCount