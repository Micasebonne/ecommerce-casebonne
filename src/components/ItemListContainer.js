import React from 'react';
import '../App.css';
import { data } from './data';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const getItems = new Promise((resolve, reject) => {
        if (data.length > 0) {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        }else {
            reject("Error")
        }
    });

useEffect(() => {
    getItems.then((res) => {setItems(res)})
    getItems.catch((err) => console.log(err))
}, []);

return <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">Todo lo que en el mundo mágico se necesita</h2>
        <ItemList items={items} /> 
        </>
};

 export default ItemListContainer;