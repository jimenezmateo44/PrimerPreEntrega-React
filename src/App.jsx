import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CategoriesNavbar from './components/Navbar/CategoriesNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ImageSlider from './components/ImageSlider/ImageSlider'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'  

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
          <Navbar />
          <CategoriesNavbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/producto/:idProducto' element={<ProductDetailContainer />} />  
          </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default App