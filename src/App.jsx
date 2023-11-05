import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'  
import NikeCategory from './components/Categories/NikeCategory'
import JordanCategory from './components/Categories/JordanCategory'
import VansCategory from './components/Categories/VansCategory'
import Carrito from './components/Carrito/Carrito'

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App