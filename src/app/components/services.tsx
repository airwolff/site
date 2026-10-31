import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I Offer
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Services
      </h2> 
      
      {/* Service descriptions */}
      <div className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm leading-relaxed'>
        <p className='mb-6'>
          <strong>SFMC Email Development</strong><br/>
          Email Studio and Content Builder development from design specifications: reusable templates,
          dynamic content blocks, and responsive layouts with dark mode support. 100+ campaigns at
          500K–750K send volumes for Wyndham Hotels &amp; Resorts.
        </p>
        <p className='mb-6'>
          <strong>AMPscript &amp; Personalization</strong><br/>
          Conditional logic, data-driven content, and internationalization. 52+ international emails
          across 6 regions with language, currency, and time-zone handling.
        </p>
        <p className='mb-6'>
          <strong>Email QA &amp; Rendering</strong><br/>
          Systematic cross-client testing in Litmus and Email on Acid across 90+ client and device
          environments, with a track record of zero reported rendering failures.
        </p>
        <p className='mb-6'>
          <strong>Web Development</strong><br/>
          Next.js, React, and TypeScript applications, plus WordPress. Enterprise experience on a
          hospitality SaaS platform (Hilton, Hyatt, Wyndham). Independent practice: Wolff Digital.
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}: {icon: StaticImageData, title: string, description: string, link: string}, index: number)=>(
          <div 
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
          >
            <Image src={icon} alt={title} className='w-10'/>
            <h3 className='text-lg my-4 text-gray-700 font-Ovo'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>
              {description}
            </p>
            {link && (
              <a href={link} className='flex items-center gap-2 text-sm mt-5 hover:gap-3 transition-all'>
                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services