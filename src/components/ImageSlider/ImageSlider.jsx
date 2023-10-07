import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const ImageSlider = () => {
    const imagenes = [
        {
            url: 'https://www.ourdailydose.net/media/odd-images/nike_dunk_low_panda_web_banner.jpg'
        },
        {
            url: 'https://images.unsplash.com/photo-1695753648663-72cc4dd99449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1560858001-2a568c6ea1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1579199265916-436a773ce30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1626379625260-7111605463e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const imagenAnterior = () => {
        const esPrimerImagen = currentIndex === 0;
        const nuevoIndex = esPrimerImagen ? imagenes.length - 1 : currentIndex - 1;
        setCurrentIndex(nuevoIndex);
    }

    const imagenSiguiente = () => {
        const esUltimaImagen = currentIndex === imagenes.length - 1;
        const nuevoIndex = esUltimaImagen ? 0 : currentIndex + 1;
        setCurrentIndex(nuevoIndex);
    }

  return (
    <div className='max-w-[100vw] h-[780px] mx-auto mt-12 py-16 static group'>
        <div style={{backgroundImage: `url(${imagenes[currentIndex].url})`}} className='w-full h-full -2xl bg-center bg-cover duration-500'>
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={imagenAnterior} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={imagenSiguiente} size={30} />
            </div>
        </div>
    </div>
  )
}

export default ImageSlider