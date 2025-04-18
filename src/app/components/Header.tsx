import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt="profile image" className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo'>
        Hi! I'm Andy Wolff 
        <Image src={assets.hand_icon} alt='' className='W-6'/>
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Web Developer based in Mid-Coast Maine.
      </h1>
      {/* <p className='max-w-2x1 mx-auto font-Ovo'></p> */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          contact me 
          <Image src={assets.right_arrow_white} alt='arrow icon' className='w-4'/>
        </a>
        <a href="/resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
          my resume
          <Image src={assets.download_icon} alt='arrow icon' className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
