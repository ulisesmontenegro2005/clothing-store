import React, { memo, useContext } from 'react';
import { CartContext } from '../../../context/CartContext'
import './main.css';

function CartItem({ id, ItemCantToAdd, nombre}) {

  const { deleteItem } = useContext(CartContext);

  return (
    <div className='itemCarrito'>
        <div>
            Nombre: <span>{nombre}</span>
            <br />
            ID: <span>{id}</span>
            <br />
            Cantidad: <span>{ItemCantToAdd}</span>
            <br />
            <button className='botonEliminar' onClick={() => deleteItem(id)}>Eliminar</button>
        </div>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;