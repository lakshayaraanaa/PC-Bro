import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
  <>
      <div className="d-flex flex-column min-vh-100">

    <Navbar/>
     <Outlet/>
    <Footer/>

    </div>
  </>
  )
}

export default Layout;
