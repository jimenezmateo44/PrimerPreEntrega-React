import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const ImageSlider = () => {
    const imagenes = [
        // 'https://www.ourdailydose.net/media/odd-images/NIKE_DUNK_LOW_lottery_green_banner.jpg',
        // 'https://www.ourdailydose.net/media/wysiwyg/WEB_1_1_.jpg',
        // 'https://www.ourdailydose.net/media/odd-images/web_banner_NIKE_DUNK_LOW_racer_blue.jpg',
        // 'https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1590764257694-8b1b85d60e89?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1593126929111-08ae75f19917?auto=format&fit=crop&q=80&w=2128&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1531185038189-41815d864f32?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <div className="w-full h-auto max-h-screen relative top-[5rem] backdrop-opacity-95">
      <motion.img
        key={indice}
        src={imagenes[indice]}
        alt={`Imagen ${indice + 1}`}
        className="w-full max-h-[65vh] object-cover"
        initial={{ opacity: 0 }} // Establecer la opacidad inicial en 0
        animate={{ opacity: 1 }} // Animar la opacidad a 1
        exit={{ opacity: 0 }} // Animar la salida
        transition={{ duration: .5 }} // Duración de la animación en segundos
      />
    </div>
  );


}

export default ImageSlider