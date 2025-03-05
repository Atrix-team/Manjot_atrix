import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OutLet } from './OutLet/OutLet';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Dashboard/Admin-Pages/Login';
import AdminHome from './Dashboard/Admin-Pages/AdminHome';
import { AdminOutLet } from './Dashboard/Admin-Layout/AdminOutLet';




export default function App() {
    return (

        <BrowserRouter>

            <Routes>
                  <Route path="/" element={<OutLet />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                  </Route>



                  {/* <Route path="/adminhomepage" element={<AdminOutLet />}>
                  <Route index element={<AdminHome/>} />
                  </Route>
                  <Route path='/admin' element={<Login/>} /> */}

            </Routes>


        </BrowserRouter>

    )
}