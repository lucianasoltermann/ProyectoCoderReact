import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.module.css'



const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(item.id);
    };

    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={item.item.img} alt=''/>
            </div>
            <div className="item-details">
                <h5>Producto: {item.item.name}</h5>
                <p>Cantidad: {item.item.quantity}</p>
                <p>Precio: $ {item.item.price}</p>
                <button className="remove-button" onClick={handleRemoveItem}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};



export default CartItem;