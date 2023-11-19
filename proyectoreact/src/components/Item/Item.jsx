import React from 'react';
import './item.modules.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock})=>{
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
                    Precio ${price}
                </p>
                <p className='info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <Link to= {`/item/${id}`} className='option'> Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item