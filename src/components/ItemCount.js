import React from "react";
import "../App.css";
import { useState } from "react";

const ItemCount = (props) => {
  const [cantidadItem, setCantidadItem] = useState(1);

  const increment = () => {
    if (cantidadItem < props.max) setCantidadItem(cantidadItem + 1);
  };

  const decrement = () => {
    if (cantidadItem > 0) setCantidadItem(cantidadItem - 1);
  };

  const agregar = () => {
    alert(`Se añadieron ${cantidadItem} Item(s) al carrito`);
  };

  return (
    <div className="contenedorItemCount">
      <button onClick={decrement}>
        -
      </button>
      <p>{cantidadItem}</p>
      <button onClick={increment}>
        +
      </button>
      <button className="botonAgregar" onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;