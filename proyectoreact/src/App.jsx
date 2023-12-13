
import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart';



function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<ItemListContainer greeting= {'DECO EN CEMENTO'}/>}/>
        <Route path ='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path = '/Item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path= '*' element= {<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}


export default App
