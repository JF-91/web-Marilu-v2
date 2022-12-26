import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'


import NewNavBarApp from './NewNavBarApp'
const RouterLayout:FC<{}> = () => {
  return (
    <>
        
        <NewNavBarApp />
        <Outlet />
        <Footer />
    </>
  )
}

export default RouterLayout