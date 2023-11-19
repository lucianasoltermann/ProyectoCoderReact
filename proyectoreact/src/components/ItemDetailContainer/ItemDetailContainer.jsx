import './ItemDetailContainer.modules.css'
import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMonk'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =() =>{
    const [product, setProdut] = useState(null)
    
    const {itemId} = useParams()
    useEffect(()=>{
        getProductById(itemId)
        .then(response =>{
            setProdut(response)
        })
        .catch((error=>{
            console.error(error)
        }))
    },[itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer