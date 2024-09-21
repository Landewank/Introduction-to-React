import React, { useState } from "react";
import logo from "../../images/Lanafa.png";
import { Link } from "react-router-dom";

export const Navbar3 = () => {
  const navLink = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Servive", path: "/service" },
    { name: "About", path: "/about" },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="bg-slate-300 flex items-center px-20  xl:justify-between md:px-10 md:justify-between s:px-5 s:justify-between ">
      <div className="flex items-center gap-4 py-4">
        <div className="order-2 s:hidden">
          <span className="text-2xl text-primary">Lanafa</span>{" "}
          <span className="text-2xl text-secondary">Temani</span>
        </div>
        <div className="w-12 h-auto">
          <img src={logo} alt="logo lanafa temani" />
        </div>
      </div>
      <div
        className={`font-medium absolute lg:static  left-0 top-[80px] w-[550px] bg-blue-300 lg:bg-transparent transition-transform duration-300 ease-in-out  ${
          toggleMenu ? "translate-x-0" : "-translate-x-full "
        } lg:translate-x-0 lg:transition-none`}
      >
        <ul className="lg:flex lg:flex-row lg:static lg:justify-center lg:items-center text-lg lg:gap-5 md:flex md:flex-col md:px-10  py-5 s:px-5 ">
          {
            navLink.map((menu) => (
                <li key={menu.name} className="mb-4 lg:mb-0 ">
                <Link to={menu.path} className={`hover:text-secondary duration-300 ease-in-out ${window.location.pathname === menu.path ?'text-secondary':''}`}>{menu.name}</Link>
                </li>
            ))
          }
          <li>
            <button className="flex gap-2 bg-primary text-white px-4 py-2 rounded-lg md:order-3 lg:hidden md:hidden  relative">
              <div>
                 <ion-icon name="call"></ion-icon>
              </div>
              <span>Hubungi Kami</span>
            </button>
          </li>
        </ul>
      </div>
      <button className="flex  bg-primary text-white px-4 py-3 rounded-full  md:order-3 md:block s:hidden">
        <ion-icon name="call"></ion-icon>
        <span className="ml-2">Hubungi Kami</span>
      </button>
      <div
        className="lg:hidden text-3xl md:absolute left-[520px]"
        onClick={() => setToggleMenu(toggleMenu ? false : true)}
      >
        <ion-icon name={toggleMenu ? "close" : "menu"}></ion-icon>
      </div>
    </nav>
  );
};
// absolute lg:static  w-[550px] top-[80px] bg-blue-300 md:left-0 transition-transform duration-300 ease-in-out ${toggleMenu?'translate-x-0':'-translate-x-full'}`
