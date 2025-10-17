import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ()=> {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="logo" className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6'/>
          <a href="mailto:andy@andywolff.dev">andy@andywolff.dev</a>
        </div>
      </div>
      <div >
        <p>© {new Date().getFullYear()} Andy Wolff. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer