import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { ItemCategoryContainer } from './components/ItemCategoryContainer';
import { Products } from './pages/Products';
import { CartCustomContext } from '../src/context/CartContext';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Cabezal } from './components/Cabezal';


function App() {

  return (
    <div className="App">
        <CartCustomContext>
            <BrowserRouter>

                <Cabezal/>

                <Routes>

                  <Route path='/' element={<Home/>}/>

                  <Route path='/item/' element={<Products/>} />

                  <Route path='/item/:idItem' element={<ItemDetailsContainer/>}/>

                  <Route path='/item/categories/:idCategory' element={<ItemCategoryContainer/>}/>

                  <Route path='/cart' element={<Cart/>}/>

                </Routes>

                <Footer/>

            </BrowserRouter>
        </CartCustomContext>
    </div>
  );
}

export default App;
