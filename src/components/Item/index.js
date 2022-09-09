import './main.css'
import { Link } from "react-router-dom";


export function Item ({ ...item }) {

    return (
        <div className='card cardItem'>

          {item.stock === 0 ? <div>
                                <Link to={`/item/${item.id}`}>
                                  <div className='noStock'>
                                  </div> 
                                  <p className='noStockText'>No hay stock</p> 
                                </Link>
                              </div> 
                                  
                                  : 
                                  
                                  <div>
                                  </div>}

          <Link to={`/item/${item.id}`}>

          <img className='card-img-top imagenItem' src={item.img} alt='prenda de ropa'/>
          
          </Link>
        </div>
    );
}
