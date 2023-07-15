import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from '../data.js';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-6 bg-neutral-100 text-slate-600 z-50 sticky top-0">

        <div>
          <h1 className="font-signature text-5xl">Nicholas Tse</h1>
        </div>
        <ul className="hidden md:flex lg:text-lg xl:text-xl">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className="px-3 cursor-pointer font-medium text-slate-600 hover:text-black"
              >
                {link.linkName}
              </li>
            );
          })}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 md:hidden text-gray-500"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaXmark size={30} /> : <FaBars size={30} />}
        </div>

        {openMenu && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-300 to-gray-100">
            {navLinks.map((link) => {
              return <li key={link.id} className="p-4 cursor-pointer text-3xl hover:text-gray-800">{link.linkName}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
