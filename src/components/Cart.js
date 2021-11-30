import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const context = useContext(CartContext);

    return (
        <>
            <h1>Checkout</h1>
            <p>Soy el componente Cart</p>
            <Link to='/'><button>Continuar comprando</button></Link>
            {
                (context.cartList.length > 0)
                    ? <button onClick={context.clear}>Borrar todos los productos</button>
                    : <p>Tu carrito está vacío</p>
            }
            {
                context.cartList.length > 0
                    ? context.cartList.map(item =>
                        <div key={item.idItem} className="cartContainer">
                            <div className="imgCart">
                                <img src={item.imgItem} title={item.img}></img>
                            </div>
                            <div className="cartDetail">
                                <p>Producto: {item.nameItem}</p>
                                <button onClick={() => context.removeItem(item.idItem)}>Borrar producto</button>
                            </div>
                            <div className="precioCart">
                                <p>{item.cantItem} item(s)</p>
                                <p>$ {item.priceItem} cada uno</p>
                            </div>
                        </div>
                    )
                    : <p>Falló</p>
            }
        </>
    );
}

export default Cart;