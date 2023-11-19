
import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path = '/' element={<ItemListContainer greeting= {'DECO EN CEMENTO'}/>}/>
        <Route path ='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path = '/Item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path= '*' element= {<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
