import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ({ sideBar, setSideBar }) => {
  return (
    <div className="text-white absolute top-0 left-0 w-full py-2 z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange<span className="px-2 font-normal text-xl">Mint</span>
          </h1>

          {/* Navbar link */}
          <ul className="lg:flex hidden space-x-4 text-xl ml-40">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Where to find</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* Hamburger menu */}
          <div onClick={() => setSideBar((prev) => !prev)}>
            <GiHamburgerMenu size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
