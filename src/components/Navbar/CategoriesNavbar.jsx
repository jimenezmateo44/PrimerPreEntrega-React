import {useState} from 'react'
import vansLogo from '../../assets/vans.png'
import nikeLogo from '../../assets/nike.png'
import jordanLogo from '../../assets/jordan.png'
import { Link } from 'react-router-dom'

const CategoriesNavbar = () => {
  return (
    <div className='flex items-center justify-evenly w-full fixed top-20 h-9 bg-[#1f1f1f] shadow-md z-10 '>
        <div>
            <ul className='flex items-center flex-shrink-0 gap-5 font-sans font-bold text-[#F8EFE0] cursor-pointer'>
                <li>Nosotros</li>
                <Link to='/'>Ver todo</Link>
            </ul>
        </div>
        <div>
            <ul className='flex items-center flex-shrink-0 gap-5'>
            <Link to='categorias/nike'><img src={nikeLogo} alt='Nike' className='h-4 cursor-pointer invert'/></Link>
            <Link to='categorias/jordan'><img src={jordanLogo} alt='Jordan' className='h-7 cursor-pointer invert'/></Link>
            <Link to='categorias/vans'><img src={vansLogo} alt='Vans' className='h-8 cursor-pointer invert'/></Link>
        </ul>
        </div>
    </div>
  )
}

export default CategoriesNavbar