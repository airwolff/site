import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
      <Image src={assets.header_bg_color} alt="background gradient"/>
    </div>
      <nav className='w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='#top'>
          <Image src={assets.logo} className="w-28 curser-pointer mr-14" alt='logo' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a href="#top" className= 'font-Ovo'>Home</a></li>
          <li><a href="#about" className= 'font-Ovo'>About</a></li>
          <li><a href="#services" className= 'font-Ovo'>Services</a></li>
          <li><a href="#work" className= 'font-Ovo'>Work</a></li>
          <li><a href="#contact" className= 'font-Ovo'>Contact</a></li>
        </ul>
        <div>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} className='w-3'alt='arrow'/></a>
        </div>
      </nav> 
    </>
  )
}

export default Navbar