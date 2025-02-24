// import React from 'react';
// import { RxArrowTopRight } from "react-icons/rx";
// import { Link, useLocation } from 'react-router-dom';
// import Button from './Button';

// const Navbar = () => {
//   const location = useLocation();
//   return (
//     <header className="absolute top-0 left-0 w-full  z-10 p-4">
//       <div className="flex justify-between items-center text-center px-10">
       
//         <div>
//           <img
//             src="https://atrixitsolutions.com/wp-content/uploads/2024/07/ais-logo.png"
//             className="h-24 logo filter grayscale-100 brightness-800"
//             alt="atrixit solutions Logo"
//           />
//         </div>

//         <div>
//           <ul className="flex space-x-8 text-lg  font-bold text-(--white)">
//             <Link to='/'>
//             <li className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 hover:rounded-md cursor-pointer ${location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''}`}>Home</li>
//             </Link>
//             <Link to="/about">
//             <li className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''}`}>About Us </li>
//             </Link>
//             <li className=" hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Create Blog</li>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Our Services</li>
           
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">FAQ’s</li>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">Contact Us</li>
//           </ul>
//         </div>

      
//         <div> 
//         <Button  mybtn={"Let's Talk"}/>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { RxArrowTopRight } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from "../assets/ais-logo.png"

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 p-4">
      <div className="flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            className="h-16 md:h-24 logo filter grayscale-100 brightness-800"
            alt="atrixit solutions Logo"
          />
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg font-bold text-white list-none">
          <Link to="/">
            <li
              className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
                location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
                location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
              }`}
            >
              About Us
            </li>
          </Link>
          <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
            Create Blog
          </li>
          <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
            Our Services
          </li>
          <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
            FAQ’s
          </li>
          <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
            Contact Us
          </li>
        </nav>

        {/* Button (Desktop) */}
        <div className="hidden md:block">
          <Button mybtn={"Let's Talk"} />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-(--navbarUlbgcolor) mt-4 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-lg font-bold text-white">
            <Link to="/">
              <li
                className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
                  location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
                  location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
                }`}
              >
                About Us
              </li>
            </Link>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
              Create Blog
            </li>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
              FAQ’s
            </li>
            <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
              Contact Us
            </li>
          </ul>
          <div className="p-4">
            <Button mybtn={"Let's Talk"} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;