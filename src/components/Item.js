import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <>
            <div className="itemContainer">
                <div key={item.id}>
                    <div className="itemImg">
                        <img src={item.img} alt={item.title}></img>
                    </div>
                    <div className="itemInfo">
                        <h3>{item.title}</h3>
                        <p>{item.des}</p>
                        <h4>$ {item.price}</h4>
                        <Link to={`/item/${item.id}`}><button className="botonCount">Ver detalles</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;