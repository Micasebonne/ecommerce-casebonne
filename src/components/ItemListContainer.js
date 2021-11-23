import React from 'react';
import '../App.css';
import { data } from './data';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router';
import customFetch from './customFetch';
const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(2000, data.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then((res) => { setDatos(res) })
            .catch((err) => console.log(err))
    }, [datos]);

    return <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">Todo lo que en el mundo mágico se necesita</h2>
        <ItemList items={datos} />
    </>
};

export default ItemListContainer;