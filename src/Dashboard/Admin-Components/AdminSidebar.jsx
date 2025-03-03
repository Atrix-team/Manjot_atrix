import React from "react";
import { FaHome, FaCog, FaSignInAlt, FaUserPlus } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 

const AdminSidebar = () => {
  return (
    <div className="bg-(--black) lg:w-64 md:w-48 w-0 transition-all duration-200  z-50">
      <div className="flex-col flex h-screen">
        <div className="flex-col pt-5 flex overflow-y-auto">
          <div className="h-full flex-col justify-between px-4 flex">
            <div className="space-y-4">  
              <Link
                to="/dashboard" 
                className="font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
              >
                <FaHome className="flex-shrink-0 w-5 h-5 mr-4" /> 
                <span>Dashboard</span>
              </Link>

        
              <div>
                <p className="px-4 font-bold text-md tracking-widest uppercase">
                  Component
                </p>
                <div className="mt-4 space-y-1">
                  <Link
                    to="/technology" 
                    className="font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                  >
                    <FaCog className="flex-shrink-0 w-5 h-5 mr-4" /> 
                    <span>Technology</span>
                  </Link>
                </div>
              </div>

            
              <div>
                <p className="px-4 font-semibold text-md tracking-widest uppercase">
                  Pages
                </p>
                <div className="mt-4 space-y-1">
                  <Link
                    to="/login" 
                    className="font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                  >
                    <FaSignInAlt className="flex-shrink-0 w-5 h-5 mr-4" /> 
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup" // Replace with your actual route
                    className="font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                  >
                    <FaUserPlus className="flex-shrink-0 w-5 h-5 mr-4" /> 
                    <span>Signup</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;