import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './component/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from './pages/Order';
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <div className='container mt-5'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/order' element={<Order />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
