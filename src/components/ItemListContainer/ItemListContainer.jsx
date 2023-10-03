import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className='h-screen flex justify-center items-center text-lg italic font-bold'>
    <h1 className='font-mono'>{props.greeting}</h1>
  </div>
  )
}

export default ItemListContainer