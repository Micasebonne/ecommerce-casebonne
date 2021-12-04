import '../App.css';
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router';
import firestoreFetch from '../utils/firestoreFetch';
const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { categoryName } = useParams();

    useEffect(() => {
        firestoreFetch()
        .then((result) => setDatos(result))
        .catch(err => console.log(err));
    }, [categoryName]);

    return <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">Todo lo que en el mundo mágico se necesita</h2>

        <ItemList items={datos} />
    </>
};

export default ItemListContainer;