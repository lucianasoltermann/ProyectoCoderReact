
import CartWidget from '../CartWidgets/CartWidgets'
import logo from '../assets/logo.svg'
import './NavBar.modules.css'

import React from 'react'

function Navbar () {
    return (
        <div className='navbar'>
            <img className='img'src={logo} alt="logo" />
        <nav className='nav'>
            <ul className='ul'>
                <li className='li'>INICIO</li>
                <li className='li'>
                    <select className='select' id="opciones" name="opciones">
                        <option value="opcion1">PRODUCTOS</option>
                        <option value="opcion2">VELAS</option>
                        <option value="opcion3">MACETAS</option>
                        <option value="opcion4">LÁMPARAS</option>
                        <option value="opcion5">FOGONEROS</option>
                    </select>
                </li>
                <li className='li'>CONTACTO</li> 
            </ul>
        </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar