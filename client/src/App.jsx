import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const App = () => {

  


  return (
    <>
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={<AppLayout/>}>
                      <Route path="/" element={<Home/>}></Route>
                      <Route path="/events" element={<FeaturedEvents/>}></Route>
                      <Route path="/services" element={<Services/>}></Route>
                      <Route path="/contact" element={<Contact/>}></Route>
                  </Route>

                  <Route path="/dashboard" element={<DashboardLayout/>}>
                      <Route path="addexpo" element={<AddExpo/>}></Route>
                      <Route path="viewexpos" element={<ViewExpos/>}></Route>
                  </Route>


                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
              </Routes>
              
        </BrowserRouter>
    </>
  )
}

export default App
