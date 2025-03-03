import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Admin-Components/AdminNavbar'
import AdminSidebar from '../Admin-Components/AdminSidebar'




export const AdminOutLet = () => {
  return (
    <div>

          <AdminNavbar />
          <div className='flex'>
          <AdminSidebar />
          <Outlet/>     
          </div>
     
    </div>
  )
}