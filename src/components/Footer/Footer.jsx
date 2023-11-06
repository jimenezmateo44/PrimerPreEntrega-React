import React from 'react'
import X from '../SVGIcons/Socials/X'
import Facebook from '../SVGIcons/Socials/Facebook'
import WhatsApp from '../SVGIcons/Socials/WhatsApp'

const Footer = () => {
  return (
    <container className="h-fit w-screen lg:h-[400px]">
        <div className='w-screen flex flex-col justify-evenly bg-[#1f1f1f] lg:flex-row'>
            <div className='flex flex-col items-center mt-[50px] gap-2'>
                <h2 className='font-bold font-antonio text-white text-[1.5rem]'>Suscribite a nuestro NewsLetter</h2>
                <div className='flex flex-row items-center gap-2'>
                    <input 
                    type='email'
                    placeholder='Ingresa tu email'
                    className='rounded w-[15rem] p-2 lg:w-full'
                    />

                    <button className='bg-[#F8EFE0] p-2.5 rounded font-paytone text-sm'>ENVIAR</button>
                </div>
                
            </div>

            <div className='flex flex-col items-center mt-[50px]'>
                <h2 className='font-bold font-antonio text-white  text-[1.5rem]'>Politicas de UNVEIL</h2>
                <div className='flex flex-col items-start mt-3 gap-2 lg:flex-row'>
                    <a href='/' className='text-white '>Devoluciones</a>
                    <a href='/' className='text-white '>Envios</a>
                    <a href='/' className='text-white '>Servicio al cliente</a>
                </div>
            </div>

            <div className='flex flex-col items-center mt-[50px]'>
                <h2 className='font-bold font-antonio text-white  text-[1.5rem]'>Nuestras Redes</h2>
                <div className='flex flex-row gap-5 cursor-pointer mt-3 mb-5'>
                    <Facebook/>
                    <X />
                    <WhatsApp />
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-evenly bg-[#1f1f1f]'>
            <img src='https://elalquimistagrow.com/wp-content/uploads/2021/05/formas-pago-mercadopago.png' alt='metodos-pago' className='mt-5 h-[100px]'/>
            <img src='https://www.itcsoluciones.com/assets/img-data.jpg' alt='data-fiscal' className='mt-5 h-[100px]' />
        </div>
        <h1 className='bg-[#1f1f1f] font-antonio font-bold text-white flex justify-center p-5'>Todos los derechos reservados. Mateo Jimenez</h1>
    </container>
  )
}

export default Footer