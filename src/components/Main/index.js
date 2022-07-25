import './main.css';

export function Main (props){
    return (
    <main>

      <ItemListContainer greeting='hola mundo'/>

    </main>
    );
}

const ItemListContainer = (props) => {
    return(
        <p>{props.greeting}</p>
    );
}

