import React from 'react'
import DropdownSVG from '../SVGIcons/DropdownSVG'
import vansLogo from '../../assets/vans.png'
import nikeLogo from '../../assets/nike.png'
import jordanLogo from '../../assets/jordan.png'

const CategoriesNavbar = () => {
  return (
    <div className='flex items-center justify-evenly w-full fixed top-20 h-9 bg-[#E9BF59] shadow-md '>
        <div>
            <ul className='flex items-center flex-shrink-0 gap-5 font-mono cursor-pointer'>
                <li>Nosotros</li>
                <li className='flex items-center flex-shrink-0 gap-1 cursor-pointer'>Marcas <DropdownSVG /></li>
                <li>Ver todo</li>
            </ul>
        </div>
        <div>
            <ul className='flex items-center flex-shrink-0 gap-2'>
            <li><img src={nikeLogo} alt='Nike' className='h-3 cursor-pointer'/></li>
            <li><img src={jordanLogo} alt='Jordan' className='h-5 cursor-pointer'/></li>
            <li><img src={vansLogo} alt='Vans' className='h-5 cursor-pointer'/></li>
        </ul>
        </div>
    </div>
  )
}

export default CategoriesNavbar