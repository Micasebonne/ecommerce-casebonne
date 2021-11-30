import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext }  from "./CartContext";
const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);

  const onAdd = (cant) => {
    alert(`Se añadieron ${cant} Item(s) al carrito`);
    setItemCount(cant);
    context.addItem(item, cant);
  };

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
              {
                itemCount === 0
                  ? <div className="containerItemCount">
                    <ItemCount key={item.id} stock={item.stock} initial={itemCount} onAdd={onAdd} />
                  </div>
                  : <div className="contenedorBoton">
                    <Link to='/cart'><button className="botonCheckout">Checkout</button></Link>
                  </div>
              }
            </div>
          </div>
          : <>
            <br></br>
            <p className="spinner">Cargando...</p>
            <div className="d-flex justify-content-center">
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div><div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
      }
    </>
  );
};

export default ItemDetail;