import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 my-auto mx-auto">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="font-bold text-2xl text-green-500">
            Ottawa Bites 🥖
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 font-semibold text-lg ">
          <Link href="/Menu">
            <div className="text-gray-700 hover:text-gold-500  hover:rounded-md  transition duration-300 ease-in-out">
              Menu
            </div>
          </Link>
          <Link href="/About">
            <div className="text-gray-700 hover:text-gold-500 hover:bg-green-500 hover:rounded-md  transition duration-300 ease-in-out">
              About
            </div>
          </Link>
          <Link href="/">
            <div className="text-gray-700 hover:text-gold-500 hover:bg-green-500 hover:rounded-md  transition duration-300 ease-in-out">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
