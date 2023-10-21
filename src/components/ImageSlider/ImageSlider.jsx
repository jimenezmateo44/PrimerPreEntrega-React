import React from 'react'
import { useState, useEffect } from 'react'

const ImageSlider = () => {
    const imagenes = [
        'https://www.ourdailydose.net/media/odd-images/NIKE_DUNK_LOW_lottery_green_banner.jpg',
        'https://www.ourdailydose.net/media/wysiwyg/WEB_1_1_.jpg',
        'https://www.ourdailydose.net/media/odd-images/web_banner_NIKE_DUNK_LOW_racer_blue.jpg',
        // Agrega más URLs de imágenes según sea necesario
      ];
    
      const [indice, setIndice] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndice((indice + 1) % imagenes.length);
        }, 3000); // Cambia el valor 3000 para ajustar la velocidad del slider
    
        return () => {
          clearInterval(interval);
        };
      }, [indice]);
    
      return (
        <div className="max-w[100vw] h-[850px] mx-auto">
          <img src={imagenes[indice]} alt={`Imagen ${indice + 1}`} className="w-full h-full bg-center bg-contain opacity-1" />
        </div>
      );
}

export default ImageSlider