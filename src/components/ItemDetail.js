import React from "react";
import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
  return (
    <>
      {
        item && item.img
        ?
          <div className="containerItemDetail">
            <div key={item.id}>
              <div className="imgItemDetail">
                <img src={item.img} alt={item.title}></img>
                <div className="itemDetail">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <h4>Precio: $ {item.price}</h4>
                  <p>Stock: {item.stock}</p>
                </div>
              </div>
              <div className="containerItemCount">
                <ItemCount key={item.id} max={item.stock} initial={1} />
              </div>
            </div>
          </div>
          : <p>Cargando...</p>
      }
    </>
  );
};

export default ItemDetail;
