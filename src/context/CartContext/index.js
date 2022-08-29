import React, { useState } from 'react';

export const CartContext = React.createContext(true);

export function CartCustomContext ({children}) {

    const [cart, setCart] = useState([]);

    const addCartItem = (item) => {
        const listaActualizada = cart.find(
            (itemEnCarrito) => itemEnCarrito.id === item.id
        )
            ? cart.map((itemEnCarrito) => {
                  if (itemEnCarrito.id === item.id) {
                      return {
                          ...itemEnCarrito,
                          ItemCantToAdd: itemEnCarrito.ItemCantToAdd + item.ItemCantToAdd,
                      };
                  }
                  return itemEnCarrito;
              })
            : [...cart, item];
        setCart(listaActualizada);
    };

    const deleteItem = (iDparam) => {
        const result = cart.filter(item => item.id != iDparam) 

        setCart(result)
    }

    const clearCart = () => {
        setCart([])
    }

    const qtty = () => {
        let quantity = cart.map(el => el.ItemCantToAdd);
        return quantity.reduce((prev, curr) => prev + curr);
    }

    const totalQttyPerItem = (idItem) => {
        let index = cart.map(item => item.id).indexOf(idItem);
        return cart[index].precio * cart[index].ItemCantToAdd;
    }

    const totalQtty = () => {
        let total = cart.map(item => totalQttyPerItem(item.id));
        return total.reduce((prev, curr) => prev + curr);
    }

    const calcTotal = () => {
        return totalQtty();
    }

    return (
        <CartContext.Provider value={ {calcTotal, totalQttyPerItem, totalQtty,deleteItem, addCartItem, clearCart, qtty, cartData: cart} }>
            {children}
        </CartContext.Provider>
    );
}