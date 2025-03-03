
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminOutLet } from './Admin-Layout/AdminOutLet';
import AdminHome from './Admin-Pages/AdminHome';
import Login from './Admin-Pages/Login';



export default function AdminIndex() {
    return (

        <BrowserRouter>

            <Routes>

                <Route path="/adminhomepage" element={<AdminOutLet />}>
                    <Route index element={<AdminHome />} />
                    {/* <Route path='/about' element={<About />} /> */}
                 </Route>
                 <Route path='/admin' element={<Login />} />

            </Routes>

        </BrowserRouter>

    )
}