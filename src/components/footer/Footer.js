import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='h-80 flex'>
        <div className='bg-cyan-100 w-full divide-y divide-neutral-300'>
            <div className='w-full h-1/5 flex items-center '>
                <div className='w-1/2 pl-5 font-bold text-lg'>
                    <h1>Get connected with us on social networks</h1>
                </div>
                <div className='w-1/2 flex justify-end gap-4 text-2xl pr-5'>
                    <button><FaYoutube/></button>
                    <button><FaInstagram/></button>
                    <button><FaLinkedin/></button>
                    <button><IoLogoGithub/></button>
                </div>
            </div>
            <div className='h-3/5 flex w-5/5 mx-auto pl-96 items-center'>
                <div className='w-1/2 flex flex-col'>
                    <div className='flex gap-2 items-center mb-2'>
                        <GiCutDiamond />
                        <h1 className='font-bold pb-1 mt-1'>WINTER OF CODE</h1> 
                    </div>
                    <p className='w-1/2'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur. 
                    </p>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <h1 className='font-bold pb-3'>CONTACT</h1>
                    <div className='flex gap-2 items-center mb-2'>
                        <AiFillHome />
                        <p>GANDHINAGAR,INDIA</p>
                    </div>
                    <div className='flex gap-2 items-center mb-2'>
                        <IoMdMail />
                        <p>irctc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='h-1/5 flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-cyan-100/50'>
                <a href="/" className='underline underline-offset-1'>WINTER OF CODE</a>
            </div>
        </div>
    </div>
  )
}

export default Footer