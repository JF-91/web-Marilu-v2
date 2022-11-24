import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

import NavBarApp from './NavBarApp'
const RouterLayout:FC<{}> = () => {
  return (
    <>
        <NavBarApp />
        <Outlet />
        <Footer />
    </>
  )
}

export default RouterLayout