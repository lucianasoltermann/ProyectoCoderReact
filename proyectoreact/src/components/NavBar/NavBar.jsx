import CartWidget from '../CartWidgets/CartWidgets';
import logo from '../assets/logo.svg';
import './NavBar.modules.css';
import { Link } from 'react-router-dom';

import React from 'react';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to={'/'}>
            <img className='img' src={logo} alt="logo" />
        </Link>
      <nav className='nav'>
        <ul className='ul'>
          <li className='li'><Link to='/'>INICIO</Link></li>
          <li className='li'>
            <span className='select-label'>PRODUCTOS</span>
            <ul className='select'>
              <li><Link to={`/category/${'velas'}`}>VELAS</Link></li>
              <li><Link to={`/category/${'lamparas'}`}>LÁMPARAS</Link></li>
              <li><Link to={`/category/${'bandejas'}`}>BANDEJAS</Link></li>
            </ul>
          </li>
          <li className='li'><Link to='/contacto'>CONTACTO</Link></li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
}

export default Navbar;
