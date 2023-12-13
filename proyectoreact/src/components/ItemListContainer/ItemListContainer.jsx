

import React, { useEffect, useState } from 'react';
import './ItemListContainer.modules.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    const fetchData = async () => {
      try {
        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]); 

  return (
    <div>
      <div className='nombre'>{greeting}</div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
