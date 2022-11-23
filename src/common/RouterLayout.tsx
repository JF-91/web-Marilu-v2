import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import NavBarApp from './NavBarApp'
const RouterLayout:FC<{}> = () => {
  return (
    <>
        <NavBarApp />
        <Outlet />
    </>
  )
}

export default RouterLayout