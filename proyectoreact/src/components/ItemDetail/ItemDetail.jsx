import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.modules.css'

const ItemDetail =({ id, name, img, category, description, price, stock})=>{
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}
></ItemCount>
        </footer>
    </article>
    )
}
export default ItemDetail