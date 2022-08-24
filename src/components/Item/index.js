import './main.css'
import { Link } from "react-router-dom";


export function Item ({ ...item }) {

    return (
        <div className='card cardItem'>

          <img className='card-img-top imagenItem' src={item.img}/>

            <div className="card-body bodyItem">

              <p className='card-title'>{item.nombre}</p>

              <p> ${item.precio} </p>

              <Link to={`/item/${item.id}`}>
                <button href="#" className="btn btn-primary botonItem">Ver Detalles</button>
              </Link>

            </div>
        </div>
    );
}
