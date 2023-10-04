import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CategoriesNavbar from './components/Navbar/CategoriesNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <CategoriesNavbar />
      <ItemListContainer greeting = "Bienvenido a mi tienda de zapatillas. Proximamente..." />
    </div> 
  )
}

export default App