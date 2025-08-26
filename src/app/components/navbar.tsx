import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Navbar = () => {
  const [isScroll, setScroll] = React.useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = ()=>{
    if (sideMenuRef.current) { // Check if current is not null
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  }
  const closeMenu = ()=>{
    if (sideMenuRef.current) { // Check if current is not null
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="background gradient"/>
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href='#top'>
          <Image src={assets.logo} alt='logo' priority={true} className="w-28 cursor-pointer mr-14" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a href="#top" className='font-Ovo'>Home</a></li>
          <li><a href="#about" className='font-Ovo'>About</a></li>
          <li><a href="#work" className='font-Ovo'>Work</a></li>
          <li><a href="#contact" className='font-Ovo'>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="moon icon" priority={true} className='w-6' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='arrow' className='w-3' /></a>
          <button className='block md:hidden ml-3' onClick={openMenu} >
            <Image src={assets.menu_black} alt="menu icon" priority={true} className='w-6' />
          </button>
        </div>
        {/* ------------mobile menu------------ */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt="close button" className='w-5 cursor-pointer'/>
          </div>
          <li><a href="#top" onClick={closeMenu} className='font-Ovo'>Home</a></li>
          <li><a href="#about" onClick={closeMenu} className='font-Ovo'>About</a></li>
          <li><a href="#work" onClick={closeMenu} className='font-Ovo'>Work</a></li>
          <li><a href="#contact" onClick={closeMenu} className='font-Ovo'>Contact</a></li>
        </ul>
      </nav> 
    </>
  )
}

export default Navbar