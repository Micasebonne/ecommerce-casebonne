import React from 'react';
import '../App.css';
import { data } from './data';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

    const getDatos = new Promise((resolve, reject) => {
        if (data.length > 0) {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        } else {
            reject("Error")
        }
    });

    useEffect(() => {
        getDatos.then((res) => { setDatos(res) })
        getDatos.catch((err) => console.log(err))
    }, []);

    return <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">Todo lo que en el mundo mágico se necesita</h2>
        <ItemList items={datos} />
    </>
};

export default ItemListContainer;