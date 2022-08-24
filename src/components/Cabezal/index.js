import './main.css';
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
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
            <Link className="link lista" to="/item/">Productos</Link>
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
                {(cartData.length > 0) ?  <a className='cantidadCarrito'>{qtty()}</a> : <a></a>}
            </Link>
        </div>
    );
}