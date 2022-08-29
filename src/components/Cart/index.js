import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";

export const Cart = () => {
    const { cartData, clearCart, totalQtty, calcTotal } = useContext(CartContext);

    let nombre = document.getElementById('inputNombre');
    let email = document.getElementById('inputEmail');
    let numero = document.getElementById('inputNumero');

    const itemsForDB = cartData.map(item => ({
        id: item.id,
        title: item.nombre,
        price: item.precio
    }));

    const calculoTotal = (cartData.length == 0) ? 0 : calcTotal();

    let order = {
        buyer: {
            nombre: nombre,
            email: email,
            numero: numero
        },
        total: calculoTotal,
        items: itemsForDB,
        date: serverTimestamp()
    }

    return (
        <main className='mainCart'>

            <div className='cart'>
                <button onClick={clearCart} className='buttonVaciar'>
                    Vaciar Carrito
                </button>
                { (cartData.length > 0) ? cartData.map((item) => {
                    return <CartItem key={item.id} nombre={item.nombre} id={item.id} price={item.precio} ItemCantToAdd={item.ItemCantToAdd} />
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

             {
                 (cartData.length > 0) ? 
                    <p>Total: <span className='totalPrice'>{totalQtty()}</span></p>
                 :
                    <p>Total: <span className='totalPrice'>0</span></p>
             }

             <button className='botonComprar' onClick={console.log(order)}> Terminar la compra </button>

            </form>

        </main>
  );
}