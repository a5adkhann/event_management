import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './AppLayout'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import FeaturedEvents from './pages/FeaturedEvents'
import Services from './pages/Services'
import Contact from './pages/Contact'
import DashboardLayout from './dashboard/DashboardLayout'
import AddExpo from './dashboard/pages/AddExpo'
import ViewExpos from './dashboard/pages/ViewExpos'
import ExibiterRegisteration from './dashboard/pages/ExibiterRegisteration'

const App = () => {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user")) || "");

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser("");
  }

  return (
    <>
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={user ? <AppLayout/> : <Navigate to="/login"/>}>
                      <Route path="/" element={<Home/>}></Route>
                      <Route path="/events" element={<FeaturedEvents/>}></Route>
                      <Route path="/services" element={<Services/>}></Route>
                      <Route path="/contact" element={<Contact/>}></Route>
                  </Route>

                  <Route path="/dashboard" element={user ? <DashboardLayout logoutUser = {logoutUser}/> : <Navigate to="/login"/>}>
                      <Route path="addexpo" element={<AddExpo/>}></Route>
                      <Route path="viewexpos" element={<ViewExpos/>}></Route>

                      <Route path="exibiter-register" element={<ExibiterRegisteration/>}></Route>
                  </Route>


                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
              </Routes>
              
        </BrowserRouter>
    </>
  )
}

export default App
