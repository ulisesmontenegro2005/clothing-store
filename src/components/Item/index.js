import './main.css'
import { Link } from "react-router-dom";


export function Item ({ ...item }) {

    return (
        <div className='card cardItem'>
          <Link to={`/item/${item.id}`}>

          <img className='card-img-top imagenItem' src={item.img}/>
          
          </Link>
        </div>
    );
}
