import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="text-2xl font-bold">Logo</div>
      <div className="flex gap-6 text-gray-700">
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
    </nav>
  );
};

export default NavBar;
