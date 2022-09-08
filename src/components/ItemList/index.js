import './main.css';
import { Item } from '../Item';

export function ItemList ({ ItemList, LoadingPage }) {

    return (
      <div className='contenedorItemList'>

            {LoadingPage ?  <ul className="loading">
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                              <li className="loadingList"></li>
                            </ul>:

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

