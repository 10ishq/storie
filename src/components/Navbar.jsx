import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";


const Navbar = () => {
  // calculate the total number of items in the cart using each cart item's quantity
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="relative bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-2xl">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Storie
            </span>
          </a>
          <button
            onClick={() => {setIsOpen(!isOpen); console.log(isOpen)}}
            type="button"
            className={'inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                
              ></path>
            </svg>
          </button>
          <div className={` w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`} id="navbar-default">
            <ul className="flex flex-col md:mr-10 p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/home"
                  className="block text-lg  py-2 pl-3 pr-4 transition-all duration-200 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-lg  py-2 pl-3 pr-4 transition-all duration-200 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              
              <li>
                <Link
                  href="/product"
                  className="block text-lg py-2 pl-3 pr-4 transition-all duration-200 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
              <li className="flex justify-center w-full">
                <Link
                  href="/cart"
                  className="flex w-full md:block text-lg py-2 pl-3 pr-4 transition-all duration-200 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  
                  <span className="relative md:absolute text-center w-full md:w-7">
                    <span className="absolute top-3 md:left-6 md:top-1 text-xl dark:text-white bg-blue-700 mx-1 px-1 rounded-full">{itemCount}</span>
                    <img className="h-7 hover:h-8  w-full " src="cart.svg" alt="" />
                    
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
