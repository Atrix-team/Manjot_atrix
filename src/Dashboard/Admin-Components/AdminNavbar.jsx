import React from "react";
import Logo from "../../assets/ais-logo.png";

const AdminNavbar = () => {
  return (
    <div className=" ">
    <div className="bg-(--black)  w-full  ">
      <div className=" justify-between py-2 items-center mx-auto px-4 flex">
      
        <div>
          <img alt="Your Company" src={Logo} className="w-auto h-12 md:h-24" />
        </div>

       
        <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
          <div className="justify-center items-center flex relative">
            <img
              src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
              className="object-cover h-9 w-9 rounded-full mr-2 "
              alt="User Profile"
            />
            <p className="font-semibold text-sm">Marrie Currie</p>
          </div>
        </div>
      </div>
  
    </div>
    </div>
  );
};

export default AdminNavbar;