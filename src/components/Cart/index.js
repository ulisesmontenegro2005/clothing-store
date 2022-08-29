import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export const Cart = () => {
    const { cartData, clearCart } = useContext(CartContext);

    return (
        <main className='mainCart'>

            <div className='cart'>
                <button onClick={clearCart} className='buttonVaciar'>
                    Vaciar Carrito
                </button>
                { (cartData.length > 0) ? cartData.map((item) => {
                    return <CartItem key={item.id} nombre={item.nombre} id={item.id} ItemCantToAdd={item.ItemCantToAdd} />
                })
                : 
                <a>No hay productos en el carrito! <Link className='linkNoItem' to={'/item'}>Ir de compras</Link></a>
                }
            </div>

            <form className='checkout'>

             <label className='checkoutLabel'>
                 Nombre: <br/>
                 <input id='inputNombre' type="text"></input>
             </label>

             <label className='checkoutLabel'>
                 Email: <br/>
                 <input id='inputEmail' type="email"></input>
             </label>

             <label className='checkoutLabel'>
                 Numero: <br/>
                 <input id='inputNumero' type="number"></input>
             </label>

            </form>

        </main>
  );
}