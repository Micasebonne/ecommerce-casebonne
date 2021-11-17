import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { data } from './data';

let is_ok = true;

const getItem = new Promise((resolve, reject) => {
    if (is_ok) {
        setTimeout(() => {
            resolve(data[0])
        }, 2000);
    } else {
        reject("Error")
    }
});

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem.then((res) => { setItem(res) })
        getItem.catch((err) => alert(err))
    }, []);

    return <>
        <ItemDetail item={item} />
    </>
}

export default ItemDetailContainer;