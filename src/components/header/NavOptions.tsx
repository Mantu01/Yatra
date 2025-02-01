import { NavLink } from 'react-router-dom';

function NavOptions({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <div className="h-full w-2/3 font-medium flex flex-col items-center md:flex-row gap-10 p-4">
      {[
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Explore', path: '/explore' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
      ].map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }: { isActive: boolean }) =>`relative transition-all duration-300 ${isActive ? 'text-orange-500 font-bold' : 'hover:scale-110'}`
          }
          onClick={closeMenu}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavOptions;
