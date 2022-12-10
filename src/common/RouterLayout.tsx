import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

import NavBarApp from './NavBarApp'
import NewNavBarApp from './NewNavBarApp'
const RouterLayout:FC<{}> = () => {
  return (
    <>
        {/* <NavBarApp /> */}
        <NewNavBarApp />
        <Outlet />
        <Footer />
    </>
  )
}

export default RouterLayout