import { useState } from 'react'
import SearchSVG from '../SVGIcons/SearchSVG'
import CartWidget from '../SVGIcons/CartWidget'
import SignInSVG from '../SVGIcons/SignInSVG'
import ToggleSVG from '../SVGIcons/ToggleSVG'
import ToggleCloseSVG from '../SVGIcons/ToggleCloseSVG'
import logo from '../../assets/unveil.png'
import { Link } from 'react-router-dom'
import CategoriesNavbar from './CategoriesNavbar'

const Navbar = () => {
  
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <nav className="font-mono bg-[#F8EFE0] w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between h-20 mx-auto p-4">
        <div className="flex items-center w-100 max-[1024px]:w-[100vw] justify-between">
          <div className="max-sm:block flex flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="logo" className="h-8" />
            </Link>
          </div>
          <div className="lg:hidden ml-4 cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <ToggleCloseSVG /> : <ToggleSVG />}
          </div>
        </div>
        <div
          className={`${
            menuOpen ? 'lg:hidden' : 'hidden lg:flex'
          } flex flex-col lg:flex-row items-center gap-2`}
        >
          <input
            type="text"
            placeholder="Buscar"
            className="border rounded-l px-2 py-1 w-80"
          />
          <SearchSVG />
        </div>
        <div
          className={`${
            menuOpen ? 'lg:hidden' : 'hidden lg:flex'
          } flex flex-col lg:flex-row items-center gap-7`}
        >
          <CartWidget />
          <SignInSVG />
        </div>
      </div>
      <CategoriesNavbar />
    </nav>
  );
};

export default Navbar;