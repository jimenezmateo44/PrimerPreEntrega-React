import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';

const ItemListContainer = () => {
  return (
    <div className='bg-[#F2F3F4]' >
      <h1 className='flex items-center justify-center mt-[5rem] p-5 text-[2rem] text-bold font-paytone font-bold'>UNVEIL YOUR STYLE</h1>
      <ProductCard />
  </div>
  )
}

export default ItemListContainer