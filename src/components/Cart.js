import { useContext } from 'react';
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
                                <p className="cartSubText">{item.cantItem} item(s) / $ {item.priceItem} cada uno</p>
                                <p className="cartSubText">Total: $ {context.totalItems(item.idItem)}</p>
                            </div>
                        </div>
                    )
                    : <div className="contenedorBotonCart">
                        <Link to='/'><button className="botonCount">Ir a comprar</button></Link>
                    </div>

            }
            {
                context.cartList.length > 0 &&
                <div className="containerCompra">
                    <h2 className="cartText">Resumen de tu compra</h2>
                    <p className="compraText"><b>Subtotal:</b> $ {context.subtotalItems()}</p>
                    <p className="compraText"><b>Impuesto IVA (21%):</b> $ {context.sumaIva()} </p>
                    <p className="compraText"><b>Promociones y descuentos:</b> -$ {context.descuento()}</p>
                    <hr></hr>
                    <h3 className="compraText" style={{textDecoration: "underline"}}><b>Compra total:</b> $ {context.totalCompra()}  </h3>
                    <div className="contenedorBoton">
                    <button className="botonCount">Finalizar compra</button>
                    </div>
                </div> 
            }
        </>
    );
}

export default Cart;