import React from 'react'
import Logo from "../../assets/ais-logo.png"

const AdminNavbar = () => {
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-(--black)">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-(--blue)">
            <div className="bg-(--black)  justify-between py-2 items-center mx-auto px-4 flex">
              <div>
                <img
                  alt="Your Company"
                  src={Logo}
                  className="w-auto h-12 md:h-24 logo filter grayscale-100 brightness-800"
                />
              </div>
              
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
            
               
                <div className="justify-center items-center flex relative">
                  <img
                    src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                    alt=""
                  />
                  <p className="font-semibold text-sm">Marrie Currie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
