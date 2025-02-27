
// import React, { useState } from 'react';
// import { RxArrowTopRight } from 'react-icons/rx';
// import { Link, useLocation } from 'react-router-dom';
// import Button from './Button';
// import Logo from "../assets/ais-logo.png"

// const Navbar = () => {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu toggle

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="absolute top-0 left-0 w-full z-10 p-4">
//       <div className="flex justify-between items-center px-4 md:px-10">
//         {/* Logo */}
//         <div>
//           <img
//             src={Logo}
//             className="h-16 md:h-24 logo filter grayscale-100 brightness-800"
//             alt="atrixit solutions Logo"
//           />
//         </div>

//         {/* Hamburger Menu Icon (Mobile) */}
//         <div className="md:hidden flex">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <nav className="hidden md:flex space-x-8 text-lg font-bold text-white list-none">
//           <Link to="/">
//             <li
//               className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
//                 location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
//               }`}
//             >
//               Home
//             </li>
//           </Link>
//           <Link to="/about">
//             <li
//               className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
//                 location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
//               }`}
//             >
//               About Us
//             </li>
//           </Link>
//           <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//             Create Blog
//           </li>
//           <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//             Our Services
//           </li>
//           <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//             FAQ’s
//           </li>
//           <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//             Contact Us
//           </li>
//         </nav>

//         {/* Button (Desktop) */}
//         <div className="hidden md:block">
//           <Button mybtn={"Let's Talk"} />
//         </div>
//       </div>

//       {/* Mobile Menu (Dropdown) */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-(--navbarUlbgcolor) mt-4 rounded-lg shadow-lg">
//           <ul className="flex flex-col space-y-4 p-4 text-lg font-bold text-white">
//             <Link to="/">
//               <li
//                 className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
//                   location.pathname === '/' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
//                 }`}
//               >
//                 Home
//               </li>
//             </Link>
//             <Link to="/about">
//               <li
//                 className={`hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer ${
//                   location.pathname === '/about' ? 'text-(--blue) bg-(--navbarUlbgcolor) px-3 py-1 rounded-md' : ''
//                 }`}
//               >
//                 About Us
//               </li>
//             </Link>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//               Create Blog
//             </li>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//               Our Services
//             </li>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//               FAQ’s
//             </li>
//             <li className="hover:text-(--blue) hover:bg-(--navbarUlbgcolor) px-3 py-1 hover:rounded-md cursor-pointer">
//               Contact Us
//             </li>
//           </ul>
//           <div className="p-4">
//             <Button mybtn={"Let's Talk"} />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




import React from 'react';
import Logo from "../assets/ais-logo.png"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from "react-router-dom"
import Button from './Button';

const navigation = [
  { name: 'Home', path: '/', current: true },
  { name: 'About Us', path: '/about', current: false },
  { name: 'Our Services', path: '/services', current: false },
  { name: 'FAQ’s', path: '/faqs', current: false },
  { name: 'Contact Us', path: '/contact', current: false },
]

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="absolute top-0 left-0 w-full z-10">
      <div className="mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative flex h-32 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={Logo}
                className="w-auto h-16 md:h-24 logo filter grayscale-100 brightness-800"
              />
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={`${
                    location.pathname === item.path ? 'bg-(--navbarUlbgcolor) text-(--blue)' : 'text-(--white) hover:bg-(--navbarUlbgcolor) hover:text-(--blue)'
                  } rounded-md px-3 py-1 lg:text-lg md:text-sm sm:text-sm text-[2px] font-bold`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
            <Button className="relative" mybtn={"Let's Talk"} />
          </div>

          <div className="left-0 flex items-center justify-end sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-end rounded-md p-2 text-(--white) bg-(--navbarUlbgcolor) hover:bg-(--black) hover:text-(--white) focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden bg-(--navbarUlbgcolor)" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block bg-(--navbarUlbgcolor)" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-(--navbarUlbgcolor) z-50">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.path}
              aria-current={location.pathname === item.path ? 'page' : undefined}
              className={`${
                location.pathname === item.path ? 'bg-(--navbarUlbgcolor) text-(--blue)' : 'text-(--white) hover:bg-(--navbarUlbgcolor) hover:text-(--blue)'
              } block rounded-md px-3 py-2 text-base font-medium`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}