/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-centter justify-between">
        <div className="flex items-center space-x-20">
          <img src="images/logo.svg" alt="" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a href="" className="text-gray-500 hover:text-gray-800">
              Menu
            </a>
            <a href="" className="text-gray-500 hover:text-gray-800">
              Pricing
            </a>
            <a href="" className="text-gray-500 hover:text-gray-800">
              Resources
            </a>
          </div>
        </div>
        {/* Right Button Menu */}
        <div className="hidden items-center space-x-6 font-bold text-gray-600 lg:flex">
          <div className="hover:text-gray-800">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold text-white bg-green-600 rounded-full hover:opacity-90"
          >
            Sign up
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
