import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import './CartItem.module.css'



const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {
        // Elimina el producto
        removeItem(item.id);
    };

    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={item.img} alt={item.nombre} />
            </div>
            <div className="item-details">
                <h5>Producto: {item.name}</h5>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: $ {item.price}</p>
                <button className="remove-button" onClick={handleRemoveItem}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};



export default CartItem;