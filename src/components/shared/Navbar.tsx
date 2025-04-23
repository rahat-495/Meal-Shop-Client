"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import websiteLogo from "../../assets/logos/Meal Moja Logo Teal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-black text-pretty font-ubuntu flex gap-2 justify-center items-center"
        >
          <Image
            src={websiteLogo}
            alt="Register Now"
            height={40}
            width={40}
            className="aspect-square"
          />
          <p>
            <span className="text-emerald-500 mr-1">Meal</span>Moja
          </p>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </svg>
        </button>

        {/* Links + Login (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-center items-center"
          >
            <IoMdHome /> Home
          </Link>
          <Link
            href="/find-meals"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-center items-center"
          >
            <IoSearch />
            Find Meals
          </Link>
          <Link
            href="/order-meal"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-center items-center"
          >
            <ImSpoonKnife />
            Order Meal
          </Link>
          <Link
            href="/login"
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-700 font-medium"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 absolute z-10 bg-white w-full">
          <Link
            href="/"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-start items-center"
          >
            <IoMdHome /> Home
          </Link>
          <Link
            href="/find-meals"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-start items-center"
          >
            <IoSearch />
            Find Meals
          </Link>
          <Link
            href="/order-meal"
            className="hover:text-emerald-500 font-medium flex gap-1 justify-start items-center"
          >
            <ImSpoonKnife />
            Order Meal
          </Link>
          <Link
            href="/login"
            className="block bg-emerald-500 text-white text-center py-2 font-medium rounded hover:bg-emerald-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
