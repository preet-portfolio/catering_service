import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <p className="font-bold text-xl tracking-tight">Ottawa Bites</p>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/Menu">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Menu
            </p>
          </Link>
          <Link href="/about">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;