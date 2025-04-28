import React from 'react'
import Navbar from "../elements/Navbar";
import Sidebar from '../pages/Sidebar'
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='flex w-full h-full'>
        <Sidebar />
        <div className='flex flex-1'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout