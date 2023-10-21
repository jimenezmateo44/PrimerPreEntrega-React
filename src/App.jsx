import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CategoriesNavbar from './components/Navbar/CategoriesNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ImageSlider from './components/ImageSlider/ImageSlider'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <CategoriesNavbar />
      <ImageSlider />
      <ItemListContainer />
      {/* <ProductDetailContainer /> */}
    </div> 
  )
}

export default App