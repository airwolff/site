import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl sm:text-6xl lg:text-[4.125rem] font-Ovo'>
        Email & Web Developer
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        Building marketing automation systems and modern web applications with Salesforce Marketing Cloud and React
      </p>
      
      {/* CTA buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a 
          href="#contact" 
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-black/80 transition'
        >
          contact me 
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </a>
        <a 
          href="/Andy_Wolff_Email_Marketing_Developer.pdf" 
          download 
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:border-gray-700 hover:bg-gray-50 transition'
        >
          my resume
          <Image src={assets.download_icon} alt='' className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header