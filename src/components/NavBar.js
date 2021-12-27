import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/' style={{textDecoration: "none"}} className="navbar-brand">der Zauberladen</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/category/sw1LqCOZTucSCl3AMMKB' style={{textDecoration: "none"}} className="nav-link">Pociones</Link>
            </li>
            <li className="nav-item">
            <Link to='/category/yZxh6cb8uG0gTplFpEEa' style={{textDecoration: "none"}} className="nav-link">Varitas</Link>
            </li>
            <li className="nav-item">
            <Link to='/category/2KASdxodk71N8pe2B2j7' style={{textDecoration: "none"}} className="nav-link">Escobas</Link>
            </li>
            <li className="nav-item">
            <Link to='/category/l1WbHMcGk8s0tr2LrHKb' style={{textDecoration: "none"}} className="nav-link">Golosinas</Link>
            </li>
            <li className="nav-item">
              <Link to='/category/TY4d7NcEWR1tqwW3moTs' style={{textDecoration: "none"}} className="nav-link">Mascotas</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="cartWidget">
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar;