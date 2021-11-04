import React from 'react';
import '../App.css';
function ItemListContainer(prop) {
    return(
        <>
        <h1 className="estilosTitulos tituloTienda">Der Zauberladen</h1>
        <h2 className="estilosTitulos subtituloPrincipal">{prop.greeting}</h2>    
        </>
    );
}

export default ItemListContainer;