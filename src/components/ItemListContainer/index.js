import './main.css'
import { ItemList } from '../ItemList';
import { useEffect, useState } from 'react';
import { getFetch } from '../../utils/getFetch';

export function ItemListContainer () {

    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {

        async function callFetch () {

        getFetch
        .then((res)=> setData(res))
        .catch((err)=> console.log('Ocurrio un error. ' + err))
        .finally(()=>setLoading(false))

        }

        callFetch();

    }, []);

    return (
        <main>
            <ItemList ItemList={Data} LoadingPage={Loading}/>
        </main>
    );
}