import React from 'react'
import SearchSVG from '../SVGIcons/SearchSVG'
import CartWidget from '../SVGIcons/CartWidget'
import SignInSVG from '../SVGIcons/SignInSVG'
import logo from '../../assets/unveil.png'

const Navbar = () => {
  return (
    <div className='font-mono lg:bg-[#F8EFE0] flex items-center justify-around shadow-md w-full h-20 fixed top-0 left-0 min-[320px]:flex-wrap'>
       <div className='max-sm:block flex flex-shrink-0 min-[320px]:flex-shrink-1'>
           <img src={logo} alt='logo' className='h-8'/>
       </div>
       <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Buscar"
          className="border rounded-l px-2 py-1 w-80"
        />
        <SearchSVG />
      </div>
       <div className='flex flex-shrink-0 gap-7 mr-10'>
        <CartWidget />
        <SignInSVG />
       </div>
    </div>
  )
}

export default Navbar