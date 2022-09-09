import './main.css'
import { StockCounter } from '../StockCounter';
import { useState } from 'react'
import { Link } from 'react-router-dom'


export function ItemDetails ( { id,precio,nombre,desc,stock,img,LoadingPage } ) {

    return (
        <main className='mainDetails'>

            {LoadingPage ?              

            <ul className="loading">
                <li className="loadingList"></li>
                <li className="loadingList"></li>
                <li className="loadingList"></li>
                <li className="loadingList"></li>
                <li className="loadingList"></li>
            </ul>
                            
                            :
                            
            <div className='containerDetailsAll'>
                            
                <div className='containerImg'>
                    <img className='imgDetails' src={img} alt='prenda de ropa'/>
                </div>

                <div className='contenedorItem'>
    
                    <div className='backContainer'>
                        <a className='backLink' href="javascript:history.back()">
                            <svg className='backDetails' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </a>
                    </div>
    
                    <h2 className='tittleDetails'>{nombre}</h2>
                    <p className='descDetails'>{desc}</p>

                    <StockCounter id={id} img={img} nombre={nombre} precio={precio} stock={stock}/>

                </div>

            </div>
            }


            </main>
    );
}


