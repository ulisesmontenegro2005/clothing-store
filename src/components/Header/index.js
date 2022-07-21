import './main.css';

export function Container (props){
    return (
    <header>

        <MenuTitulo texto="CLOTHING STORE"/>

        {/* <div className="contenedorItems">

            <a id="carritoDeCompras"><img src="./carrito-copia.svg" alt="carrito de compras"/></a> 

        </div> */}

        <MenuNavegacion/>

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