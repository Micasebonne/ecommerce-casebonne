import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const context = useContext(CartContext);

    return (
        <>
            <h1 className="cartText">Tu carrito de compras</h1>
            {
                (context.cartList.length > 0)
                    ? <div className="contenedorBotonCart"> 
                    <Link to='/'><button className="botonCount">Continuar comprando</button></Link>
                    <button onClick={context.clear} className="botonCount">Vaciar carrito</button>
                    </div>
                    : <p className="cartSubText">¡Tu carrito se encuentra vacío! :( </p>
            }
            {
                context.cartList.length > 0
                    ? context.cartList.map(item =>
                        <div key={item.idItem} className="cartContainer">
                            <div className="imgCart">
                                <img src={item.imgItem} title={item.img}></img>
                            </div>
                            <div className="cartDetail">
                                <p className="cartSubText">Producto: {item.nameItem}</p>
                                <button onClick={() => context.removeItem(item.idItem)} className="botonCount">Borrar producto</button>
                            </div>
                            <div className="precioCart">
                                <p className="cartSubText">{item.cantItem} item(s)</p>
                                <p className="cartSubText">$ {item.priceItem} cada uno</p>
                            </div>
                        </div>
                    )
                    : <div className="contenedorBotonCart">
                    <Link to='/'><button className="botonCount">Ir a comprar</button></Link>
                    </div>
                     
            }
        </>
    );
}

export default Cart;