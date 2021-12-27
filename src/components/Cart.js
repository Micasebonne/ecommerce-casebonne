import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';


const Cart = () => {
    const context = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                name: document.getElementById("nombre").value,
                surname: document.getElementById("apellido").value,
                phone: document.getElementById("celular").value,
                email: document.getElementById("email").value
            },
            items: context.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.priceItem,
                cantidad: item.cantItem
            })),
            fecha: context.dateAndHour(),
            total: context.totalCompra()
        };
        console.log(order);

        const createOrderInFireStore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFireStore()
            .then(result => alert("Su número de orden de compra es " + result.id + ". Por consola verá los detalles de la misma. ¡Gracias por su visita!"))
            .catch(err => console.log(err));

        context.cartList.forEach(async (item) => {
            const itemRef = doc(db, "data", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.cantItem)
            })
        })
        context.clear();
    }

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
                                <img src={item.imgItem} title={item.imgItem} alt={item.imgItem}></img>
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
                    <h3 className="compraText" style={{ textDecoration: "underline" }}><b>Compra total:</b> $ {context.totalCompra()}  </h3>
                    <p className="text-center">Por favor, ingrese sus datos para generar la orden de compra</p>
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <label>Nombre</label>
                                    <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" required
                                        className="form-control"></input>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Apellido</label>
                                    <input type="text" name="apellido" id="apellido" placeholder="Tu apellido" required
                                        className="form-control"></input>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Teléfono</label>
                                    <input type="number" name="celular" id="celular" className="form-control" placeholder="Ingrese su número de teléfono">
                                    </input>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Ingrese su mail">
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contenedorBoton">
                        <button className="botonCount" onClick={createOrder}>Finalizar compra</button>
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;