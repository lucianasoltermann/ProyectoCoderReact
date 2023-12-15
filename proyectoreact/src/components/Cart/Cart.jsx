import './Cart.modules.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  
    console.log(cart); 
  
    if (totalQuantity === 0) {
      return (
        <div className="cart-empty">
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="Option">
            Productos
          </Link>
        </div>
      );
    }
  
    return (
      <div className="cart-container">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
          ))}
        <h3>Total $ {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</h3>

        <button onClick={() => clearCart()} className="cart-button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="Option">
          CheckOut
        </Link>
      </div>
    );
  };
  
export default Cart
