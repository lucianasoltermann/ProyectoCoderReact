import './ItemDetailContainer.modules.css'
import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMonk'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../firebase/client'

const ItemDetailContainer =() =>{
    const [product, setProdut] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()
    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProdut(productAdapted)
        })
        .catch((error=>{
            console.error(error)
        }))
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer