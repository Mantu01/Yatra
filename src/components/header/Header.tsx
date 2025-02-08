import { useState, useEffect, ChangeEvent } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import NavOptions from './NavOptions';
import { useAppSelector } from '../../store/store';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const {isLoggedIn}=useAppSelector(state=>state.user);

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClickOutside = (e: any) => {
    if (isSearchOpen && !e.target.closest('.search-container')) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      navigate('/userProfile');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className="fixed z-10 h-20 w-full flex justify-center items-end text-white">
        <div className={`h-[80%] w-[80vw] flex justify-between items-center border-b-2 border-white rounded-t-4xl px-4 py-2 ${isScrolled ? ' backdrop-blur-sm' : 'bg-transparent'}`}>
          <div className='text-2xl md:hidden block' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoIosMenu />
          </div>
          <div className={`absolute z-20 top-20 left-0 h-screen w-full transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} onClick={closeMenu}>
            <div className="h-1/2 w-2/3 backdrop-blur-lg" onClick={(e) => e.stopPropagation()}>
              <NavOptions closeMenu={closeMenu} />
            </div>
          </div>
          <div className='h-full w-1/6'>
            <NavLink to='/'>
              <img className='h-10' src="/logo.png" alt="Logo" />
            </NavLink>
          </div>
          <div className='h-full w-2/3 hidden md:block'>
            <NavOptions />
          </div>
          <div className='w-1/6 flex justify-end items-center gap-5 search-container relative'>
            <CiSearch className='text-white text-3xl cursor-pointer' onClick={toggleSearch} />
            {isSearchOpen && (
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="absolute top-full mt-5 border-2 border-black backdrop-blur-2xl outline-none rounded-md px-2 py-1 w-48 shadow-inner shadow-black"
                placeholder="Search..."
              />
            )}
            {location.pathname !== '/login' && location.pathname !== '/signup' && (
              <FaUserCircle className='text-white text-3xl cursor-pointer' onClick={handleUserIconClick} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;