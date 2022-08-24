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

    return (
        <CartContext.Provider value={ {deleteItem, addCartItem, clearCart, qtty, cartData: cart} }>
            {children}
        </CartContext.Provider>
    );
}