import React from 'react';
import { RxArrowTopRight } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="absolute top-0 left-0 w-full  z-10 p-4">
      <div className="flex justify-between items-center text-center px-10">
       
        <div>
          <img
            src="https://atrixitsolutions.com/wp-content/uploads/2024/07/ais-logo.png"
            className="h-24 logo filter grayscale-100 brightness-800"
            alt="atrixit solutions Logo"
          />
        </div>

        <div>
          <ul className="flex space-x-8 text-lg  font-bold text-(--white)">
            <Link to='/'>
            <li className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 hover:rounded-md cursor-pointer ${location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''}`}>Home</li>
            </Link>
            <Link to="/about">
            <li className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''}`}>About Us </li>
            </Link>
            <li className=" hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Create Blog</li>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Our Services</li>
           
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">FAQ’s</li>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Contact Us</li>
          </ul>
        </div>

      
        <div> 
        <Button  mybtn={"Let's Talk"}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;