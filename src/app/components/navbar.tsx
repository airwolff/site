import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='#top'>
          <Image src={assets.logo} className="w-28 curser-pointer mr-14" alt='logo' />
        </a>
        <ul className='hidden md:flex items-center'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div>
          <a href="#contact">Contact <Image src={assets.arrow_icon} className='w-3'alt='arrow'/></a>
        </div>
      </nav> 
    </>
  )
}

export default Navbar