import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/' style={{textDecoration: "none"}}><a className="navbar-brand">der Zauberladen</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to='/' style={{textDecoration: "none"}}><a className="nav-link active" aria-current="page">Inicio</a></Link>
            </li>
            <li className="nav-item">
            <Link to='/category/25' style={{textDecoration: "none"}}><a className="nav-link">Pociones</a></Link>
            </li>
            <li className="nav-item">
            <Link to='/category/52' style={{textDecoration: "none"}}><a className="nav-link">Varitas</a></Link>
            </li>
            <li className="nav-item">
            <Link to='/category/92' style={{textDecoration: "none"}}><a className="nav-link">Escobas</a></Link>
            </li>
            <li className="nav-item">
            <Link to='/category/41' style={{textDecoration: "none"}}><a className="nav-link">Golosinas</a></Link>
            </li>
            <li className="nav-item">
              <Link to='/category/29' style={{textDecoration: "none"}}><a className="nav-link">Mascotas</a></Link>
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