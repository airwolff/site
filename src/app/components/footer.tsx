import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="Andy Wolff logo" className='w-36 mx-auto mb-2'/>
        
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' aria-hidden="true"/>
          <a href="mailto:andy@andywolff.dev" className='hover:text-customBlue transition'>
            andy@andywolff.dev
          </a>
        </div>
      </div>
      
      {/* Footer links */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='font-Ovo'>© {new Date().getFullYear()} Andy Wolff. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a 
              href='https://github.com/airwolff' 
              target='_blank' 
              rel='noopener noreferrer'
              className='hover:text-customBlue transition font-Ovo'
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href='https://linkedin.com/in/andywolff' 
              target='_blank' 
              rel='noopener noreferrer'
              className='hover:text-customBlue transition font-Ovo'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href='/Andy_Wolff_Email_Marketing_Developer.pdf' 
              download
              className='hover:text-customBlue transition font-Ovo'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer