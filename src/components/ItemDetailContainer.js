import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { data } from './data';
import { useParams } from 'react-router-dom'
import customFetch from './customFetch';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
        .then((res) => { setItem(res) })
        .catch((err) => alert(err))
    }, [item]);

    return <>
        <ItemDetail item={item} />
    </>
}

export default ItemDetailContainer;