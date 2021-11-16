import React from 'react';
import {data} from './data';
import Item from './Item';

const ItemList = () => {
    return (
        data.map((item) =>(
            <>
            <Item item={item} />
        </>
        )
            
    ))};

export default ItemList;