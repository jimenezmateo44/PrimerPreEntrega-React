import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'  
import NikeCategory from './components/Categories/NikeCategory'
import JordanCategory from './components/Categories/JordanCategory'
import VansCategory from './components/Categories/VansCategory'
import Carrito from './components/Carrito/Carrito'
import { CarritoProvider} from './context/CarritoContext';

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
          </Routes>
      </div> 
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App