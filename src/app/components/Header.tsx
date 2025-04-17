import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt="profile image"/>
      </div>
    </div>
  )
}

export default header
