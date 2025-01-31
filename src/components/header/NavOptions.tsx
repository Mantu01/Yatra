import { NavLink } from 'react-router-dom';

function NavOptions({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <div className="h-full w-2/3 dark:text-white font-medium flex flex-col md:flex-row gap-10 md:justify-end p-4">
      {[
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'About', path: 'about' },
        { name: 'Contact', path: 'contact' },
      ].map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }: { isActive: boolean }) =>`relative transition-all duration-300 ${isActive ? 'text-[#C2302B] font-bold' : 'hover:scale-110'}`
          }
          onClick={closeMenu}
        >
          {name}
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#C2302B] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </NavLink>
      ))}
    </div>
  );
}

export default NavOptions;
