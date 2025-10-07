import React from "react";
import AnimatedSidebarMenu from "../animation/AnimatedSidebarMenu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white relative">
      <div className="text-2xl font-bold">Logo</div>

      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="#" className="hover:text-black">
          Home
        </a>
        <a href="#" className="hover:text-black">
          Contact
        </a>
        <a href="#" className="hover:text-black">
          Policy
        </a>
      </div>

      <div className="md:hidden">
        <AnimatedSidebarMenu />
      </div>
    </nav>
  );
};

export default NavBar;
