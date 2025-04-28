import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const ComposeEmail = ({onhide}) => {
    console.log(onhide)
    const [formData, setFormData] = useState({
        recipients: "",
        subject: "",
        message: ""
    })
    const [open, setOpen] = useState(false)
    const submitHandler = (e) => {
         e.preventDefault();
    }
    const handleComposeInput = () =>{

    }
  return (
    <div className={`${open ? 'hidden' : 'block'} absolute right-3 bottom-3 w-full bg-white sm:max-w-7xl md:max-w-[20%] shadow-xl shadow-slate-600 rounded-t-md`}>
    <div className='flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md'>
        <h1>New Message</h1>
        <div onClick={onhide} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <RxCross2 />
        </div>
    </div>
    <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input  name="recipients" value={formData.recipients}
         type="text" 
         onChange={handleComposeInput}
        placeholder='Recipients' className='outline-none py-1' />
        <input  name="subject" value={formData.subject} 
        type="text"
        onChange={handleComposeInput}
         placeholder='Subject' className='outline-none py-1' />
        <textarea  name="message" value={formData.message} id=""
           onChange={handleComposeInput}
         cols="30" rows="10" className='outline-none py-1'></textarea>
        <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
    </form>
</div>
  )
}

export default ComposeEmail