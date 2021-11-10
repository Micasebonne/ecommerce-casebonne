import React from 'react';
import CartWidget from './CartWidget';
import '../App.css';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">der Zauberladen</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pociones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Varitas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Escobas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Golosinas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mascotas</a>
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