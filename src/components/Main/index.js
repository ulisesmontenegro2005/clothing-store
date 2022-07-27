import { useEffect, useState } from 'react';
import './main.css';

export function Main (props){
    return (
    <main className='main'>

      <ItemListContainer greeting='hola mundo'/>

      <ItemCount/>

    </main>
    );
}

const ItemListContainer = (props) => {
    return(
        <p>{props.greeting}</p>
    );
}

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    function aumentarContadorFunction () {
        const aumentarBoton = document.getElementById('aumentarBoton');

        (contador >= 4) ? (aumentarBoton.disable = true) : (aumentarBoton.disable = false) (setContador(contador + 1));
    }

    function disminuirContadorFunction () {
        const disminuirBoton = document.getElementById('disminuirBoton');

        (contador > 0) ? (disminuirBoton.disable = false) (setContador(contador - 1)) : (disminuirBoton.disable = true);
    }

    return(
        <div className='containerContador'>

            <p> ej: hay stock de 4 </p>

            <button id='disminuirBoton' onClick={disminuirContadorFunction} className='disminuirContador'>-</button>

            <p className='numeroContador'>
                {contador}
            </p>

            <button id='aumentarBoton' onClick={aumentarContadorFunction} className='aumentarContador'>+</button>

        </div>
    );
}

