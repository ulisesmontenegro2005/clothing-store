import './main.css';
import { useParams } from 'react-router-dom';
import { ItemDetails } from '../ItemDetails';
import { useEffect, useState } from 'react';
import { getItemById } from '../../utils/getFetch';

export function ItemDetailsContainer () {

    const [Data, setData] = useState([])

    const { idItem } = useParams();

    useEffect(() => {

        getItemById(idItem)
        .then(Item => {
            setData(Item)
        })

    }, []);

    return (
            <main className='mainDetails'>
                <ItemDetails 
                {...Data} 
                />
            </main>
    );
}