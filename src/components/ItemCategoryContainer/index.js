import './main.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList';
import { getItemByCategory } from '../../utils/getFirebase/FetchData';

export function ItemCategoryContainer () {

    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])

    const { idCategory } = useParams();

    useEffect(() => {

        async function callFetch () {

        getItemByCategory(idCategory)
        .then((res)=> setData(res))
        .catch((err)=> console.log('Ocurrio un error. ' + err))
        .finally(()=>setLoading(false))


        }

        callFetch();

    }, [idCategory]);

    return (
            <main className='mainProducts'>
                <ItemList ItemList={Data} LoadingPage={Loading}/>
            </main>
    );
}