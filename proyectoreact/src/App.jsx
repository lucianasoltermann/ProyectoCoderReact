
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'


function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting= {'DECO EN CEMENTO'}/>
    </div>
  )
}


export default App
