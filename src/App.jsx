import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'  
import NikeCategory from './components/Categories/NikeCategory'
import JordanCategory from './components/Categories/JordanCategory'
import VansCategory from './components/Categories/VansCategory'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import { CarritoProvider} from './context/CarritoContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CheckoutSuccess from './components/Checkout/CheckoutSuccess'
import ResultadoBusqueda from './components/Categories/ResultadoBusqueda'

const App = () => {
  return (
    <BrowserRouter>
     <CarritoProvider>
      <div className='w-full h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/producto/:idProducto' element={<ProductDetailContainer />} /> 
            <Route path='/categorias/nike' element={<NikeCategory />} /> 
            <Route path='/categorias/jordan' element={<JordanCategory />} /> 
            <Route path='/categorias/vans' element={<VansCategory />} /> 
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout-success' element={<CheckoutSuccess />} />
            <Route path="/busqueda" element={<ResultadoBusqueda />} />
          </Routes>
          <ToastContainer />
          <Footer />
      </div> 
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App