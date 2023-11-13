import { useState } from 'react'
import CartWidget from '../SVGIcons/CartWidget'
import SignInSVG from '../SVGIcons/SignInSVG'
import ToggleSVG from '../SVGIcons/ToggleSVG'
import ToggleCloseSVG from '../SVGIcons/ToggleCloseSVG'
import logo from '../../assets/unveil.png'
import { Link } from 'react-router-dom'
import CategoriesNavbar from './CategoriesNavbar'
import Busqueda from '../Categories/Busqueda'

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    return (
      <nav className='font-sans bg-[#F8EFE0] w-full fixed top-0 left-0 z-10'>
        <div className='lg:flex items-center justify-between h-20 mx-auto p-4'>
          <div className="flex items-center w-100 min-[1024px]:w-[100vw] justify-between">
             <div className="max-sm:block flex flex-shrink-0 mt-2">
               <Link to="/">
                 <img src={logo} alt="logo" className="h-8" />
               </Link>
             </div>
             <div className='hidden lg:flex items-center gap-2  '>
              <Busqueda />
             </div>
             <div className='hidden lg:flex items-center gap-5'>
              <Link to='/carrito'><CartWidget /></Link>
              <Link to='/'><SignInSVG /></Link>
             </div>
             <div className="lg:hidden ml-4 cursor-pointer" onClick={toggleMenu}>
               {menuOpen ? <ToggleCloseSVG /> : <ToggleSVG />}
             </div>
           </div>
          <div className='w-full fixed left-0 z-10 max-[1023px]:hidden'>
            <CategoriesNavbar />
          </div>
        </div>
        <div
            className={`${
              menuOpen ? 'lg:hidden' : 'hidden lg:flex flex-row justify-evenly items-center '
            } flex flex-col justify-center lg:flex-row items-center gap-2`}
          >
            <div className='flex flex-col gap-5 font-sans font-bold lg:hidden'>
              <Link to='/'>Ingresar</Link>
              <Link to='/carrito'>Carrito</Link>
              <div className="relative group">
                <button
                  onClick={toggleDropdown}
                  className=" hover:text-gray-900 group-hover:text-gray-900 mb-3"
                >
                  Categorías
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 py-2 bg-white border border-gray-200 shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/categorias/nike">Nike</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/categorias/jordan">Jordan</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/categorias/vans">Vans</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>            
          </div>     
      </nav>
  );
};

export default Navbar;