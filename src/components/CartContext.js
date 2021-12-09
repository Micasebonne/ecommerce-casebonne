import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, cant) => {
        let found = cartList.find(element => element.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.title,
                    priceItem: item.price,
                    cantItem: cant
                }
            ]);
        } else {
            found.cantItem += cant
        }
    }

    function clear() {
        setCartList([]);
    }

    const removeItem = (itemId) => {
        let result = cartList.filter(item => item.idItem !== itemId);
        setCartList(result);
    }

    const totalItems = (idItem) => {
        let total = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[total].cantItem * cartList[total].priceItem;
    }

    const subtotalItems = () => {
        let subtotal = cartList.map(item => totalItems(item.idItem));
        return subtotal.reduce((valorPrevio, valorActual) => valorPrevio + valorActual)
    }

    const cantidadItems = () => {
        let cantidad = cartList.map(item => item.cantItem);
        return cantidad.reduce(((valorPrevio, valorActual) => valorPrevio + valorActual), 0);
    }

    const sumaIva = () => {
        return subtotalItems() * 0.21
    }

    const descuento = () => {
        return ((subtotalItems() + sumaIva()) * 0.20).toFixed(2);
    }

    const totalCompra = () => {
        return subtotalItems() + sumaIva() - descuento()
    }

    const dateAndHour = () => {
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1 ) + '-' + today.getFullYear();
        const hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateAndHour = date + ' ' + hour;
        return dateAndHour
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            removeItem,
            totalItems,
            subtotalItems,
            cantidadItems,
            sumaIva,
            descuento,
            totalCompra,
            dateAndHour
        }}>
            {children}
        </CartContext.Provider>

    );
}

export default CartContextProvider;