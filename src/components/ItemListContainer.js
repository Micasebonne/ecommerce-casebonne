import React from 'react';
import '../App.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
function ItemListContainer(prop) {
    return(
        <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">{prop.greeting}</h2>
        <ItemList />    
        <ItemCount max={15} initial={1}/>
        </>
    );
}

export default ItemListContainer;