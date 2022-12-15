import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Nav from './Nav'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout