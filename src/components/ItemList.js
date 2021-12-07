import React from 'react';
import Item from './Item';
import "../App.css";

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.length > 0
                    ? <ul className="cardsItems">
                        {items.map((item) => (
                            <Item key={item.id} item={item} id={item.id} />
                        ))}
                    </ul>
                    : <>
                        <br></br>
                        <p className="spinner">Cargando...</p>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div><div className="spinner-grow text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default ItemList;