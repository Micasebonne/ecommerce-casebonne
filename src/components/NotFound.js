import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h1 className="tituloNotFound">¡Lo sentimos! La página a la que está intentado acceder no existe.</h1>
            <Link to='/' style={{textDecoration: "none"}}><h2 className="subtituloNotFound">Volver al menú principal</h2></Link>
        </div>
    )
}

export default NotFound;