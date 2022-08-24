import './main.css'
import { StockCounter } from '../StockCounter';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';

export function ItemDetails ( {id,precio,nombre,desc,stock,img} ) {
    
    // CONTEXT

    const { addCartItem } = useContext(CartContext);

    const onAdd = () => {
        addCartItem({
            id, 
            nombre,
            ItemCantToAdd: stockCounter(),
            ImageInfo: img,
            desc,
            precio
        });

        setProductAdded(true);
    }

    // ESTADOS DE BOTONES

    const [productAdded, setProductAdded] = useState(false);

    // STOCK

    function stockCounter () {
        const contadorStock = document.getElementById('contadorStock').innerText;

        return parseInt(contadorStock);
    }

    return (
            <div className='contenedorItem'>
                <h2>{nombre}</h2>
                <p>{desc}</p>
                <img src={img}/>
                <StockCounter stock={stock}/>
                <p>${precio}</p>

                {productAdded ? 
                (                 
                    <Link to={`/cart`}>
                        <button id='terminarCompraButton' className='btn btn-primary botonDetails displayNone'>Ir al Carrito</button>
                    </Link>
                ) 
                : 
                (
                    <button onClick={onAdd} id='comprarButton' className='btn btn-primary botonDetails'>Agregar al Carrito</button>
                )}
                
            </div>
    );
}


