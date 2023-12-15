import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.modules.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdd, setQuantityAdeed] = useState(0);


  const addItem = (item, quantity) => {

    console.log('Item añadido:', item, 'Cantidad:', quantity);
  };

  const handleOnAdd = (quantity) => {
    setQuantityAdeed(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

    return(
        <article className='CardItem'>
        <header>
            <h2 className='itemHeader'>{name}</h2>
        </header>
        <picture>
            <img src={img} alt=""  className='itemImg'/>
        </picture>
        <section>
            <p className='info'>
                Categoría {category}
            </p>
            <p className='info'>
                Descripción {description}
            </p>
            <p className='info'>
                Precio ${price}
            </p>
        </section>
        <footer className='itemFooter'>
            {
                quantityAdd > 0 ?(
                    <Link to ='/cart' className='Option'>Terminar compra</Link>
                    ) :(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
            }
 
        </footer>
    </article>
    )
}
export default ItemDetail