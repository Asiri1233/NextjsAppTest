"use client"
import Link from 'next/link';
import React, { useState } from 'react';

function NavBar({background}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${background}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://i.imgur.com/gsetHBj.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pixel MP
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 duration-200 "
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          onClick={handleMobileMenuToggle}
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
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? '' : 'hidden '
          }w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-500 hover:scale-105 duration-300" >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/buy"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-500 hover:scale-105 duration-300"
              >
                Redeem/Buy
              </Link>
            </li>
            
            <li>
              <a
                href="https://t.me/+9Z92reCYmx5hODBl" target="_blank"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-500 hover:scale-105 duration-300"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://t.me/WRestocker " target='_blank'
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-500 hover:scale-105 duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
