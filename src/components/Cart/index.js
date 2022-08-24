import React, { useContext } from 'react';
import './main.css';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export const Cart = () => {
    const { cartData, clearCart } = useContext(CartContext);

    return (
        <div className='cart'>
            <button onClick={clearCart} className='buttonVaciar'>
                Vaciar Carrito
            </button>
            { (cartData.length > 0) ? cartData.map((item) => {
                return <CartItem key={item.id} nombre={item.nombre} id={item.id} ItemCantToAdd={item.ItemCantToAdd} />
            })
            : 
            "No hay elementos en el Cart!"
            }
        </div>
  );
}