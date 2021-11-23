import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <>
        {
        items.length > 0
        ? <ul className="cardsItems">
            {items.map((item) => (
                <Item key={item.id} item={item} id={item.id}/>
            ))}
        </ul>
        : <p>Cargando...</p>
        }
        </>
    );
};

export default ItemList;