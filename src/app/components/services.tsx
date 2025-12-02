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
          <strong>Enterprise Email Automation</strong><br/>
          Salesforce Marketing Cloud implementation including AMPscript development, 
          Content Builder email development, responsive templates with dark mode support, 
          and cross-client testing. Built 52+ international emails with 6-language conditional 
          logic for 500k–750k send campaigns for Fortune 500 clients.
        </p>
        <p className='mb-6'>
          <strong>AI Agent Workflow Systems</strong><br/>
          Self-directed multi-agent systems with 10,000–50,000 word structured knowledge bases. 
          Role specialization, sequential workflows, systematic task delegation patterns. 
          Workflow orchestration and knowledge base architecture applicable to enterprise AI implementation.
        </p>
        <p className='mb-6'>
          <strong>Healthcare Domain Expertise</strong><br/>
          14+ years clinical operations including 7 years Emergency Department Technician at Allina Health. 
          Epic EHR power user, HIPAA compliance, clinical workflow optimization, stakeholder management 
          under pressure. Bridges clinical and technical teams for healthcare IT implementations.
        </p>
        <p className='mb-6'>
          <strong>Web Development</strong><br/>
          Modern front-end applications using Next.js, React, and TypeScript. Component-based architecture, 
          mobile-first responsive design, production-ready code. Enterprise SaaS experience with major 
          hotel chains (Hilton, Hyatt, Wyndham).
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