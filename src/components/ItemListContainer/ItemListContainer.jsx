import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';

const ItemListContainer = () => {
  return (
    <div >
      <h1 className='flex items-center justify-center mt-5 text-[2rem] text-bold font-mono'>OUR PRODUCTS</h1>
      <ProductCard />
  </div>
  )
}

export default ItemListContainer