import React, { memo, useContext } from 'react';
import { CartContext } from '../../../context/CartContext'
import './main.css';

function CartItem({ id, ItemCantToAdd, nombre, img, price }) {

  const { deleteItem, totalQttyPerItem } = useContext(CartContext);

  return (
    <div className='generalContainer'>
        <div className='containerImgCart'>
          <img className='imgCart' src={img} alt='imagen producto'></img>
        </div>

        <div className='itemCart'> 
            <span>{nombre}</span>
            <span>Precio unitario: ${price}</span>
            <span>{ItemCantToAdd}</span>
            <span>Total: ${totalQttyPerItem(id)}</span>
            <button className='botonEliminar' onClick={() => deleteItem(id)}>Eliminar</button>
        </div>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;