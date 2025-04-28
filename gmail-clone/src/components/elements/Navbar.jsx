import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoAppsSharp } from "react-icons/io5";



const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between mx-3 h-16">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <div className="d-flex">
            <img
              src="data:image/png;base64,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"
              alt="Gamil"
              className="w-10"
            />
          </div>
          <h1 className="text-2xl text-gray-500 font-medium">Gamil</h1>
        </div>
        <div className="md:block hidden w-[50%] mr-60">
             <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
               <IoIosSearch size={"20px"} className="txt-gray-700" />
               <input type="text" 
               placeholder="Search ..."
               className="rounded-full w-full bg-transparent outline-none px-1" />
             </div>
        </div>
        <div className="md:block hidden">
            <div className="flex items-center gap-2"> 
                 <div className="flex items-center justify-center rounded-full hover:bg-[#eaeaea] cursor-pointer w-10 h-10 ">
                   <FaRegQuestionCircle size="1.1rem" />
                 </div>
                 <div className="flex items-center justify-center rounded-full hover:bg-[#eaeaea] cursor-pointer w-10 h-10 ">
                   <CiSettings size="1.1rem" />
                 </div>
                 <div className="flex items-center justify-center rounded-full hover:bg-[#eaeaea] cursor-pointer w-10 h-10 ">
                   <IoAppsSharp size="1.1rem" />
                 </div>
                 <div className="flex items-center justify-center rounded-full hover:bg-[#eaeaea] cursor-pointer w-10 h-10 ">
                    <img src="https://lh3.googleusercontent.com/ogw/AF2bZygI_TuMsLYIoo5hvuVHPaeE2i6RAVSf5TGxORTJjwHWpxM=s32-c-mo" 
                      className="w-9" alt="User"
                    />

                 </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
