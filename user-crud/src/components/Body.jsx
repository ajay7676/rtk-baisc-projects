import React from 'react'
import { Outlet  } from "react-router";

import Header from './Header'


const Body = () => {
   
  return (
    <>
       <Header />
       <Outlet /> {/* This is where child routes will render */}
    </>
  )
}

export default Body