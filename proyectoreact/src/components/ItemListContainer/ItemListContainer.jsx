import React, { useEffect, useState } from 'react';
import './ItemListContainer.modules.css'
import {  getProducts, getProductsByCategory} from '../../asyncMonk';
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { getProductById  } from '../../asyncMonk';


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])

  const {categoryId}= useParams()

  useEffect(() =>{
    const asyncFunc =categoryId ? getProductsByCategory:getProducts
  
    asyncFunc(categoryId)
      .then (response => {
        setProducts(response)
      })
      .catch(error =>{
        console.error(error)
      })
  } , [categoryId])

  return (
    <div>
    <div className='nombre'>{greeting}</div>
    <ItemList products = {products} />
    </div>
  )
  }

export default ItemListContainer