import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Carritos from "./views/Carritos"
import Home from "./views/Home"
import Plantas from "./views/Plantas"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Logout from './views/Logout';
import Success from './views/Success';
import Miscompras from './views/Miscompras';
import './assets/css/bootstrap.min.css';
import CartContext from "./contexts/CartContext"
import ProductContext from "./contexts/ProductContext"

function App() {
  const [data, setData] = useState()
  const sharedState = {data, setData}
  
  const [products, setProducts] = useState([])
  const productState = {products, setProducts}
  

  return (
        <ProductContext.Provider value={productState}>
          <CartContext.Provider value={sharedState}>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Signup" element={<Signup/>} />
                  <Route path="/Carrito" element={<Carritos />} />
                  <Route path="/Plantas/:id" element={<Plantas />} />
                  <Route path='/Logout' element={<Logout />} />
                  <Route path='/Success' element={<Success />} />
                  <Route path='/Miscompras' element={<Miscompras />} />
                  <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
          </CartContext.Provider>
        </ProductContext.Provider>
   );
}

export default App;
