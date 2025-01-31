import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import NavOptions from './NavOptions';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed z-10 h-20 w-full flex justify-center items-end text-white">
        <div className={`h-[80%] w-[80vw] flex justify-between items-center border-b-2 border-white rounded-t-4xl px-4 py-2 text-xl max-text-[18px] ${isScrolled ? ' backdrop-blur-sm' : 'bg-transparent'}`}>
          <div className='text-2xl md:hidden block' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoIosMenu />
          </div>
          <div className={`absolute top-20 left-0 h-screen w-full transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} onClick={closeMenu}>
            <div className="h-1/2 w-2/3 backdrop-blur-lg" onClick={(e) => e.stopPropagation()}>
              <NavOptions closeMenu={closeMenu} />
            </div>
          </div>
          <div className='h-full w-1/6'>
            <NavLink to='/'>
              <img className='h-12' src="/logo.png" alt="Logo" />
            </NavLink>
          </div>
          <div className='h-full w-2/3 hidden md:block'>
            <NavOptions />
          </div>
          <div className=' w-1/6 flex justify-end'>
            <CiSearch className=' text-white text-3xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;