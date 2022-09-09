import './main.css';
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Cabezal (props){
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
            <Link className="link lista" to="/">Inicio</Link>
            <a className="nav-link dropdown-toggle link lista" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to="/item/">Todos</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to={`/item/categories/accesorios`}>Accesorios</Link></li>
                <li><Link className="dropdown-item" to={`/item/categories/sacos`}>Sacos</Link></li>
                <li><Link className="dropdown-item" to={`/item/categories/buzos`}>Buzos</Link></li>
            </ul>
        </ul>
    </nav>
    );
}

const MenuTitulo = (props) => {
    return (
        <div className="contenedorLogo">
            <a href="/" className='linkTitulo'>
            <h1> {props.texto} </h1>
            </a>
        </div>
    );
}

const CartWidget = () => {
    const { cartData, qtty } = useContext(CartContext);



    return(
        <div>
            <Link className='linkCarrito' to="/cart">
                <HiShoppingCart className='carrito'></HiShoppingCart>
                {(cartData.length > 0) ?  <span className='cantidadCarrito'>{qtty()}</span> : <span></span>}
            </Link>
        </div>
    );
}