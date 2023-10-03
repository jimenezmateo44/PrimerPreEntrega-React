import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <ItemListContainer greeting = "Bienvenido a mi tienda de zapatillas. Proximamente..." />
    </div> 
  )
}

export default App