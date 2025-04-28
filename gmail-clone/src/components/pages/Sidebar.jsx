import React, { useState } from 'react'
import { GoPencil } from "react-icons/go";
// import { Link, Links } from 'react-router-dom';
import { FaEnvelope , FaRegStar ,FaClock } from "react-icons/fa6";
import { IoSendOutline ,IoDocumentOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import ComposeEmail from './ComposeEmail'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const hideComposeMail = () =>{
        setOpen(false)
    }
    const showComposeMail = () =>{
        console.log("Modal Clciked")
        setOpen(true)
    }
    const sidebarItems = [
        {
            name: "Inbox",
            icon: <FaEnvelope />,
        },
        {
            name: "Starred",
            icon: <FaRegStar />,
        },
        {
            name: "Snoozed",
            icon: <FaClock  />,
        },
        {
            name: "Sent",
            icon: <IoSendOutline />,
        },
        {
            name: "Drafts",
            icon: <IoDocumentOutline />,
        },
        {
            name: "Categories",
            icon: <BiCategory />,
        },
        {
            name: "More",
            icon: <MdExpandMore />,
        }
    ]
    console.log(open)
  return (
    <>
      {
        open ? <ComposeEmail  onhide ={hideComposeMail}/> : null
      }
      <nav className='flex flex-col justify-start items-center w-full md:w-[12%] px-4'>
          <div className="flex w-full">
            <button onClick={showComposeMail} className='w-full max-w-[80%] mx-auto px-3 py-2 bg-gray-300 gap-2 cursor-pointer hover:shadow-lg rounded-3xl flex items-center justify-center' >
               <GoPencil size={"1rem"}  />
                Compose
            </button>
          </div>
          <div className="flex flex-col w-full gap-2 mt-2">
         {
             sidebarItems.map((item) => (
                <button key={item.name} className='px-2 py-1 bg-gray-100 hover:bg-gray-200 gap-2 cursor-pointer hover:shadow-lg rounded-3xl flex items-center justify-center'>
                    <span className='mr-2'>{item.icon}</span>
                     {item.name}</button>
             ))
         }
          </div>
      </nav>
    </>
  )
}

export default Sidebar