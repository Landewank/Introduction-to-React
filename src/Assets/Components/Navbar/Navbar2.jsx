import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import logo from '../../images/Lanafa.png'

export const Navbar2 = () => {
  const Menu = [
    { name: "Home", path: '/' },
    { name: "Portofolio", path: '/about' },
    { name: "Service", path: '/service' },
    { name: "About", path: '/contact' }
  ]
  let [openMenu, setopenMenu] = useState(false)

  return (
    <nav>
      <div className="w-full bg-blue-300 py-3 px-5 flex justify-between lg:px-16 lg:py-3 items-center  md:px-10">
        {/* Logo */}
        <div className="w-12 h-12">
          <img src={logo} alt="Logo Lanafa Temani" />
        </div>

        {/* Hamburger Icon */}
        <div onClick={() => setopenMenu(!openMenu)} className="text-3xl lg:hidden cursor-pointer md:absolute md:left-[71%] md:top-[20px]">
          <ion-icon name={openMenu ? 'close' : 'menu'}></ion-icon>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className='flex items-center gap-5'>
            {Menu.map((menu) => (
              <li key={menu.name}>
                <Link className='cursor-pointer' to={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Button */}
        <div className='bg-primary text-white rounded-full px-5 py-2 items-center flex gap-3 xs:hidden md:block lg:flex cursor-pointer'>
          <ion-icon name="call"></ion-icon>
          <button className='text-white ml-2'>Contact Us</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-19 left-0 h-auto xs:w-full md:w-[75%] bg-blue-500 transition-transform transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <ul className="flex flex-col items-start p-5 gap-5">
          {Menu.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.path} className="block py-2 px-4 text-white">{menu.name}</Link>
            </li>
          ))}
            {/* Contact Button */}
          <div className='bg-primary text-white rounded-full px-5 py-2 items-center flex gap-3  md:hidden lg:flex'>
          <ion-icon name="call"></ion-icon>
            <button className='text-white ml-2'>Contact Us</button>
          </div>
        </ul>
      </div>
    </nav>
  )
}
