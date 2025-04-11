import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <>
      <nav>
        <a href=''>
          <Image src='../../assets/logo.png' alt='logo' />
        </a>
      </nav> 
    </>
  )
}

export default navbar
