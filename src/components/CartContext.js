import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (item, cant) => {
        let found = cartList.find(element => element.idItem === item.id);
        if (found === undefined) {
        setCartList([
            ...cartList,
        {
            idItem : item.id,
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
    let result = cartList.filter(item => item.idItem != itemId);
    setCartList(result);
}

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            removeItem
        }}>
        {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;