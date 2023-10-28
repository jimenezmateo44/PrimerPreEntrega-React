import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';

const ItemListContainer = () => {
  return (
    <div className='bg-[#F0F0F0]' >
      <h1 className='flex items-center justify-center mt-[5rem] p-5 text-[2rem] text-bold font-paytone font-bold'>CHOOSE YOUR FIT</h1>
      <ProductCard />
  </div>
  )
}

export default ItemListContainer