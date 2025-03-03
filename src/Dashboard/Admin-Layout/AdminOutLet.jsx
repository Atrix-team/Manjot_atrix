import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Admin-Components/AdminNavbar'
import AdminSidebar from '../Admin-Components/AdminSidebar'




export const AdminOutLet = () => {
  return (
    <div>

      <AdminNavbar />
      <div className='flex' >
        <div className=''><AdminSidebar /></div>
        <div className=''> <Outlet />
        </div>
      </div>

    </div>
  )
}