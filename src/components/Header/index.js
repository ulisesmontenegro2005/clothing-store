import './main.css';
import { HiShoppingCart } from "react-icons/hi";


export function Container (props){
    return (
    <header>

        <MenuTitulo texto="CLOTHING STORE"/>

        <MenuNavegacion/>

        <CartWidget/>

    </header>
    );
}

const MenuNavegacion = () => {
    return (
    <nav className="contenedorNav">
        <ul className="listaUl">
            <li className="lista"><a className="link" href="index.html">Inicio</a></li>
            <li className="lista"><a className="link" href="">Productos</a></li>
            <li className="lista"><a className="link" href="">Contacto</a></li>
        </ul>
    </nav>
    );
}

const MenuTitulo = (props) => {
    return (
        <div className="contenedorLogo">
            <h1> {props.texto} </h1>
        </div>
    );
}

const CartWidget = () => {
    return (
        <div>
            <i href=''>
                <HiShoppingCart className='carrito'></HiShoppingCart>
                <span className='cantidad_carrito'>0</span>
            </i>
        </div>
    );
}