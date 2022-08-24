import { useState } from 'react'; 
import './main.css';

export function StockCounter (props){
    const [contador, setContador] = useState(1);

    function aumentarContadorFunction () {
        const aumentarBoton = document.getElementById('aumentarBoton');

        (contador >= (props.stock)) ? (aumentarBoton.disable = true) : (aumentarBoton.disable = false) (setContador(contador + 1));
    }

    function disminuirContadorFunction () {
        const disminuirBoton = document.getElementById('disminuirBoton');

        (contador > 1) ? (disminuirBoton.disable = false) (setContador(contador - 1)) : (disminuirBoton.disable = true);
    }

    return(
        <div id='componenteMayorStock'>

                <div id='componenteStock' className='containerContador'>

                    <button id='disminuirBoton' onClick={disminuirContadorFunction} className='disminuirContador btn'>-</button>

                    <p id='contadorStock' className='numeroContador'>
                        {contador}
                    </p>

                    <button id='aumentarBoton' onClick={aumentarContadorFunction} className='aumentarContador btn'>+</button>

                </div>
        </div>
    );
}
