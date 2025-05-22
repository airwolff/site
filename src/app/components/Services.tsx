import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I Offer:
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My Services:
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Building on years of experience in both enterprise and small business settings, I offer adaptable web development services to meet your unique needs and goals.</p>
      <div className='grid grid-cols-4 gap-6 my-12'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div className='flex flex-col items-center justify-center gap-4 p-6 border-[0.1rem] border-gray-400 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
            <Image src={icon} alt={title}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
