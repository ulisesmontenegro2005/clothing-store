import { useState, useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './main.css';

export function StockCounter (props){

    // BUTTON STATES

    const [contador, setContador] = useState(1);
    const [productAdded, setProductAdded] = useState(false);


    // CONTADOR FUNCTIONS

    const aumentarContadorFunction = () => {
        const aumentarBoton = document.getElementById('aumentarBoton');

        (contador >= (props.stock)) ? (aumentarBoton.disable = true) : (aumentarBoton.disable = false) (setContador(contador + 1));
    }

    const disminuirContadorFunction = () => {
        const disminuirBoton = document.getElementById('disminuirBoton');

        (contador > 1) ? (disminuirBoton.disable = false) (setContador(contador - 1)) : (disminuirBoton.disable = true);
    }

    // USE CONTEXT AND ORDER

    const { addCartItem } = useContext(CartContext);

    const onAdd = () => {
        addCartItem({
            id: props.id,
            nombre: props.nombre,
            ItemCantToAdd: contador,
            precio: props.precio,
            img: props.img
        });

        setProductAdded(true);
    }

    return(
        <div>
            <p className='stockCant'>En stock: {props.stock} unidades</p>


            <div className='componenteMayorStock'>

                    <div id='componenteStock' className='containerContador'>

                        <button id='disminuirBoton' onClick={disminuirContadorFunction} className='disminuirContador btn'>-</button>

                        <p id='contadorStock' className='numeroContador'>
                            {contador}
                        </p>

                        <button id='aumentarBoton' onClick={aumentarContadorFunction} className='aumentarContador btn'>+</button>

                    </div>
            </div>

            <p className='priceDetails'>${props.precio}</p>
    
                    {productAdded ? 
                    (  
                        <div>               
                            <Link to={`/cart`}>
                                <p id='terminarCompraButton' className='linkFinallyAdded'>Ir al Carrito</p>
                            </Link>
                            <p>o</p>
                            <a href="javascript:history.back()">
                                <p id='terminarCompraButton' className='linkFinallyAdded'>Seguir Comprando</p>
                            </a>
                        </div> 
                    ) 
                    : 
                    (
                        props.stock === 0 ? <p>No hay stock.</p> : <button onClick={onAdd} id='comprarButton' className='btn btn-primary botonDetails'>Agregar al Carrito</button>
                    )}
        </div>
    );
}
