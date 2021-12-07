import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [cantidadItem, setCantidadItem] = useState(0);

  useEffect(() => {
    setCantidadItem(initial)
  }, [initial]);

  const increment = () => {
    if (cantidadItem < stock) {
      setCantidadItem(cantidadItem + 1);
    }
  };

  const decrement = () => {
    if (cantidadItem > initial) {
      setCantidadItem(cantidadItem - 1);
    }
  };

  return (
    <div className="contenedorBoton">
      <button onClick={decrement} className="botonCount">
        -
      </button>
      <p>{cantidadItem}</p>
      <button onClick={increment} className="botonCount">
        +
      </button>
      {
        cantidadItem 
      ? <button className="botonCount" onClick={() => onAdd(cantidadItem)}>
          Agregar al carrito
        </button>
    : <button className="botonInactivo" disabled>
      Agregar al carrito
    </button>
    }
    </div>
  );
};

export default ItemCount;