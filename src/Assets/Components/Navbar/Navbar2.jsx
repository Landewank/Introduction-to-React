import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Lanafa.png';

export const Navbar2 = () => {
  const Menu = [
    { name: "Home", path: '/' },
    { name: "Portofolio", path: '/about' },
    { name: "Service", path: '/service' },
    { name: "About", path: '/contact' }
  ];
  let [openMenu, setopenMenu] = useState(false);

  return (
    <nav className="w-full bg-blue-300 py-3 px-5 flex justify-between items-center lg:px-16 lg:py-3 md:px-10">
      {/* Logo */}
      <div className="w-12 h-12">
        <img src={logo} alt="Logo Lanafa Temani" />
      </div>

      {/* Hamburger Icon */}
      <div onClick={() => setopenMenu(!openMenu)} className="text-3xl lg:hidden cursor-pointer">
        <ion-icon name={openMenu ? 'close' : 'menu'}></ion-icon>
      </div>

      {/* Menu (for all screen sizes) */}
      <div className={`lg:flex flex-col lg:flex-row lg:items-center lg:gap-5 absolute lg:static w-full lg:w-auto left-0 top-[80px] bg-blue-300 lg:bg-transparent z-50 transition-transform duration-300 ease-in-out transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <ul className='flex flex-col lg:flex-row items-center gap-5 p-5 lg:p-0'>
          {Menu.map((menu) => (
            <li key={menu.name}>
              <Link className='cursor-pointer' to={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className='bg-primary text-white rounded-full px-5 py-2 items-center flex gap-3 mt-3 lg:mt-0 lg:flex cursor-pointer'>
          <ion-icon name="call"></ion-icon>
          <button className='text-white ml-2'>Contact Us</button>
        </div>
      </div>
    </nav>
  );
}
