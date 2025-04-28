import React from 'react'
import { FaRegGrinStars } from 'react-icons/fa'
import { MdCropSquare } from 'react-icons/md'
import { IoIosStarOutline } from "react-icons/io";
import {useNavigate} from 'react-router-dom'



const Message = () => {
   const navigate = useNavigate();

    const handleSingleMessge = () =>{
        navigate("/mailbox/1234456")

    }
  return (
    <div onClick={handleSingleMessge} className='flex py-3 items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md'>
        <div className="flex items-center gap-3">
            <div className="flex-none text-gray-300">
                <MdCropSquare className='w-5 h-5' />
            </div>
            <div className="flex-none text-gray-300">
                {/* <FaRegGrinStars className='w-5 h-5' /> */}
                <IoIosStarOutline className='w-5 h-5'  />
            </div>
        </div>
        <div className="flex-1 ml-4">
            <p className='text-gray-600 truncate inline-block max-w-full'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae corporis ipsam enim.
            </p>
        </div>
        <div className="flex-none text-gray-400 text-sm">
            Time picker
        </div>
    </div>
  )
}

export default Message