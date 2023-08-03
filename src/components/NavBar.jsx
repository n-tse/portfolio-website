import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../data.js";
import { Link } from "react-scroll";
import PersonalLogo from "/PersonalLogo.png";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-center bg-neutral-100 text-gray-600 z-50 sticky top-0">
      <div className="flex justify-between items-center w-full h-20 px-6 max-w-screen-2xl">
        <div>
          <Link
            to={"Home"}
            smooth
            duration={500}
            offset={-210}
            className="cursor-pointer flex items-center"
          >
            <img src={PersonalLogo} className="rounded-md mr-3 w-14" />
            <h1 className="font-signature text-4xl py-1 pr-1 sm:flex sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-600">Nicholas Tse</h1>
          </Link>
        </div>
        <ul className="hidden md:flex lg:text-lg xl:text-xl">
          {navLinks.map(({ id, linkName }) => {
            return (
              <li
                key={id}
                className="px-3 cursor-pointer font-medium text-gray-600 hover:text-black"
              >
                <Link
                  to={linkName}
                  smooth
                  duration={500}
                  offset={linkName === "Home" ? -210 : -80}
                  className="py-4"
                >
                  {linkName}
                </Link>
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
            {navLinks.map(({ id, linkName }) => {
              return (
                <li
                  key={id}
                  className="p-4 cursor-pointer text-3xl hover:text-gray-800"
                >
                  <Link
                    to={linkName}
                    smooth
                    duration={500}
                    offset={linkName === "Home" ? -130 : -80}
                    className="py-4"
                    onClick={() => setOpenMenu(false)}
                  >
                    {linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
