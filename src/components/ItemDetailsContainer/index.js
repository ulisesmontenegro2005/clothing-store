import './main.css';
import { useParams } from 'react-router-dom';
import { ItemDetails } from '../ItemDetails';
import { useEffect, useState } from 'react';
import { getItemById } from '../../utils/getFirebase/FetchData';

export function ItemDetailsContainer () {

    const [Data, setData] = useState([])

    const { idItem } = useParams();

    useEffect(() => {

        getItemById(idItem)
        .then(item =>{
            setData(item[0])
        })

    }, []);

    console.log(Data);

    return (
            <main className='mainDetails'>
                <ItemDetails 
                {...Data}
                />
            </main>
    );
}