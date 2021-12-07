import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
                .then(result => setItem(result))
                .catch(err => console.log(err))
        }, [idItem]);
        
    return <>
        <ItemDetail item={item} />
    </>
}

export default ItemDetailContainer;