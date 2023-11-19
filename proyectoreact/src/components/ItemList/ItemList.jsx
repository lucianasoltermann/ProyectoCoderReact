import React from 'react';
import Item from '../Item/Item';
import './ItemList.modules.css'


const ItemList= ({products}) =>{
    return(
        <div className='ItemListContainer'>
            {products.map(prod=> <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList