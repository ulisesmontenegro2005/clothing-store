import './main.css';
import { Item } from '../Item';

export function ItemList ({ ItemList, LoadingPage }) {

    return (
      <div className='contenedorItemList'>

            {LoadingPage ? <h1 className='loadingPage'> CARGANDO </h1>:

            ItemList.map((item) => {
            return (
                <Item 
                key={item.id}
                {...item}
                />
            );
            })}
            
      </div>
    );
}

