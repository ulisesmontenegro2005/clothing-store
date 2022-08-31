import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../utils/getFirebase/getData';

export const Cart = () => {
    const { cartData, clearCart, totalQtty, calcTotal } = useContext(CartContext);

    const createOrder = () => {

        let nombre = document.getElementById('inputNombre').value;
        let email = document.getElementById('inputEmail').value;
        let numero = document.getElementById('inputNumero').value;

        const itemsForDB = cartData.map(item => ({
            id: item.id,
            title: item.nombre,
            price: item.precio
        }));

        let order = {
            buyer: {
                nombre: nombre,
                email: email,
                numero: numero
            },
            total: calcTotal(),
            items: itemsForDB,
            date: "30/8"
        }

        console.log(order);

        cartData.forEach(async (item) => {
            const itemRef = doc(db, "productos", item.id);
            await updateDoc(itemRef, {
            stock: increment(-item.ItemCantToAdd)
            });
        });

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
        .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
  
        clearCart();
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
                <p>No hay productos en el carrito! <Link className='linkNoItem' to={'/item'}>Ir de compras</Link></p>
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

             <a className='botonComprar' onClick={createOrder}> Terminar compra </a>

            </form>

        </main>
  );
}