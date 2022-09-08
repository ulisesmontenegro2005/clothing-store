import './main.css';
import { useParams } from 'react-router-dom';
import { ItemDetails } from '../ItemDetails';
import { useEffect, useState } from 'react';
import { getItemById } from '../../utils/getFirebase/FetchData';

export function ItemDetailsContainer () {

    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { idItem } = useParams();

    console.log(idItem);

    useEffect(() => {

        getItemById(idItem)
        .then(item =>{
            setData(item[0])
        })
        .catch((err)=> console.log('Ocurrio un error. ' + err))
        .finally(()=>setLoading(false))

    }, [idItem]);

    return (
            <main className='mainDetails'>
                <ItemDetails 
                {...Data}
                LoadingPage={loading}
                />
            </main>
    );
}