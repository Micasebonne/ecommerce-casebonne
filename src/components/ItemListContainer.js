import React from 'react';
import '../App.css';
import ItemCount from './ItemCount';
function ItemListContainer(prop) {
    return(
        <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">{prop.greeting}</h2>    
        <ItemCount max={15} initial={1}/>
        </>
    );
}

export default ItemListContainer;