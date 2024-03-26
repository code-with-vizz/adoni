import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=' max-sm:hidden  flex items-center justify-between py-[3%] px-[4%] font-md ' style={{backgroundColor:'#00A859', color:'white'}}>
        <div className='grid grid-rows gap-4'>
            <div className='w-[5vh] h-[5vh] flex items-center justify-center  text-[2.5vh]' style={{borderRadius:'50%', backgroundColor:'#03753f ', color:'white'}}>
            <RiTwitterXLine />
            </div>
            <div    className='w-[5vh] h-[5vh] flex items-center justify-center  text-[2.5vh] ' style={{borderRadius:'50%', backgroundColor:'#03753f ', color:'white'}}>
            <GrInstagram />
            </div>
            <div className='w-[5vh] h-[5vh] flex items-center justify-center  text-[2.5vh] ' style={{borderRadius:'50%', backgroundColor:'#03753f ', color:'white'}}>
            <FaFacebookF />
            </div>

        </div>
        <div className='grid grid-rows gap-2'>
            <h1>
                Home
            </h1>
            <h1>
                Overview
            </h1>
            <h1>
                Contact
            </h1>
        </div>
        <div  className='grid grid-rows gap-2'>  
            <h1>
                Privacy Policy
            </h1>
            <h1>
                Terms & conditions
            </h1>
            <h1>
                Support
            </h1>

        </div>
        <div className='grid grid-rows gap-2'>
            <h1>
                Contact
            </h1>
            <div  className='flex items-cneter gap-2'>
               <IoCall />
               <h1>+91 9890 852 663</h1>

            </div>
            <div className='flex items-center gap-2'>
            <IoMdMail />
               
               <h1>sales@adonitech.co.in</h1>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
