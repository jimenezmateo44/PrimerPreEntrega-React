import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CategoriesNavbar from './components/Navbar/CategoriesNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ImageSlider from './components/ImageSlider/ImageSlider'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <CategoriesNavbar />
      <ImageSlider />
      <ItemListContainer greeting = "Bienvenido a mi tienda de zapatillas. Proximamente..." />
    </div> 
  )
}

export default App