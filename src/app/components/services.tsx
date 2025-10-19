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
          <strong>Email Marketing Development</strong><br/>
          Salesforce Marketing Cloud implementation including AMPscript development, Journey Builder automation workflows, responsive email templates with dark mode support, and cross-client testing. Specialized in lifecycle campaigns, personalization logic, and data-driven segmentation.
        </p>
        <p className='mb-6'>
          <strong>Web Development</strong><br/>
          Modern front-end applications using Next.js, React, and TypeScript. Component-based architecture, mobile-first responsive design, and production-ready code. Experience with WordPress, Drupal, and Magento CMS platforms from managing 120+ client sites.
        </p>
        <p className='mb-6'>
          <strong>Process & Collaboration</strong><br/>
          Technical documentation, cross-functional team coordination, and systematic troubleshooting. Background in support operations and project management from building managed services teams.
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