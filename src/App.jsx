import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'  

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/producto/:idProducto' element={<ProductDetailContainer />} />  
          </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default App