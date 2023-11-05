import {useState} from 'react'
import { getProductos } from '../../asyncmock';

const Carrito = () => {
  return (
   <container className='w-screen h-screen'>
    <div className='mt-[100px] md:mt-[130px] sm:mt-[110px]'>
        <h1 className='flex justify-center font-paytone text-[2rem]'>CARRITO</h1>
        <div className='flex flex-row gap-3'>
            <div>
            <p>NOMBRE</p>
            <p>Dunk Mocha Travis</p>
            </div>
            
            <div>
                <p>PRECIO</p>
                <p>$320000</p>
            </div>
            
            <div>
                <p>CANTIDAD</p>
                <p>1</p>
            </div>
            
            <div>
                <p>SUBTOTAL</p>
                <p>$320000</p>
            </div>
            
        </div>
        
    </div>
   </container>
  )
}

export default Carrito