import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2000 milisegundos (2 segundos)
  }, []);

  if (isLoading) {
    return (
        <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center'>
          <img src='https://miro.medium.com/v2/resize:fit:1400/0*ptDX0HfJCYpo9Pcs.gif' alt='success' className='h-[200px] bg-inherit' />
          <h1 className='font-paytone text-[1.5rem]'>Espera un momento. Procesando tu compra...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center gap-5'>
        <img src='https://assets-v2.lottiefiles.com/a/71ac41e2-1162-11ee-be2b-8f2f0c77c8e9/LRcSqC0pln.gif' alt='success' className='h-[250px] bg-inherit' />
        <h1 className='font-paytone text-[1.5rem]'>Compra realizada con éxito!</h1>
        <Link to='/' className='bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0 w-fit'>Volver a inicio</Link>
      </div>
    </div>
  );
}

export default Checkout;
