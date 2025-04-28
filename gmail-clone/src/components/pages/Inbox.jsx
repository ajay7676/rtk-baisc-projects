import React, { useState } from 'react'
import { FaCaretDown,FaAngleLeft, FaAngleRight, FaUserFriends  } from 'react-icons/fa'
import { MdCropSquare, MdInbox } from 'react-icons/md'
import { IoReload } from "react-icons/io5";
import { GoTag } from 'react-icons/go';
import Messages from './Messages';


const Inbox = () => {
    const [isActiverTab, setIsActiverTab] = useState(0)
    const mailType = [
        {
         text: "Primary",
         icon: <MdInbox size={"20px"} />
        },
        {
         text: "Promotions",
         icon: <GoTag size={"20px"} />
        },
        {
         text: "Social",
         icon: <FaUserFriends size={"20px"} />
        }
]
 const handleTab = (index) =>{
    setIsActiverTab(index)

 }
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
        <div className="flex items-center justify-between px-4 ">
            <div className="flex items-center gap-2 text-gray-700 py-2">
                <div className="flex  items-center gap-1">
                    <MdCropSquare  size={"20px"}/>
                    <FaCaretDown  size={"20px"} />
                    <IoReload  size={"18px"}/>
                </div>
            </div>
            <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">1-50 of 1000</p>
            <button className='hover:rounded-full cursor-pointer  hover:bg-gray-100'>
                <FaAngleLeft  />
            </button>
            <button className='hover:rounded-full cursor-pointer  hover:bg-gray-100'>
                <FaAngleRight  />
            </button>
            </div>
        </div>
        <div className="h-[calc(100vh-64px)] overflow-y-auto ">
            <div className="flex items-center gap-1">
                {
                    mailType.map((type , index) => (
                        <button key={type.text} onClick={() => handleTab(index)} className={isActiverTab === index ? "border-b-4 border-b-blue-500 text-blue-500 cursor-pointer flex items-center gap-5 p-4 w-52 hover:bg-gray-100" : "border-b-4 border-b-transparent text-black cursor-pointer flex items-center gap-5 p-4 w-52 hover:bg-gray-100"}><span className='mr-3'>{type.icon}</span>{type.text}</button>

                    ))
                }
            </div>
            <div className='flex items-center'>
                <Messages />
            </div>
        </div>
    </div>
  )
}

export default Inbox