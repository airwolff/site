import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About Me
      </h2>
      
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Profile image */}
        <div className='lg:w-1/3'>
          <div className='relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0'>
            <Image 
              src={assets.user_image} 
              alt="Andy Wolff profile photo" 
              fill
              className='rounded-3xl object-cover'
              priority
            />
          </div>
        </div>
        
        {/* Bio and skills */}
        <div className='flex-1'>
          <p className='mb-6 max-w-2xl font-Ovo'>
            Software Developer with 6 years of professional experience in email development, 
            enterprise web apps, and front-end engineering — plus 14+ years of Emergency Department 
            clinical operations. Recent focus on AI agent workflow design.
          </p>

          <p className='mb-4 max-w-2xl font-Ovo'>
            <strong>Core Strengths:</strong>
          </p>
          
          <ul className='mb-6 max-w-2xl font-Ovo list-disc list-inside space-y-2 text-gray-700'>
            <li>Enterprise email automation (Salesforce Marketing Cloud, 500k–750k send campaigns 
            for Fortune 500 clients)</li>
            <li>AI agent workflows (self-directed multi-agent systems with 10k–50k word knowledge bases)</li>
            <li>Healthcare domain expertise (Epic EHR, ED workflows, HIPAA, patient communication 
            under pressure)</li>
          </ul>

          <p className='mb-6 max-w-2xl font-Ovo'>
            <strong>Clinical Background:</strong> 7 years as Emergency Department Technician managing 
            40-50 patients per shift in high-stakes emergency care. Epic EHR power user providing 
            informal technical training. 14+ years total healthcare operations including EMT-B, ED tech, 
            and laboratory work.
          </p>

          <p className='mb-10 max-w-2xl font-Ovo'>
            Currently seeking remote developer roles in email marketing development (SFMC, marketing 
            automation), healthcare IT, front-end/full-stack development, or AI implementation consulting.
          </p>
          
          {/* Skills grid - 2 wide top row, 1 centered bottom */}
          <div className='flex flex-wrap justify-start gap-6 mb-6'>
            {infoList.slice(0, 2).map(({icon, title, description}: {icon: StaticImageData, title: string, description: string}, index: number)=>(
              <div 
                className='border-[0.1rem] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black flex-1 min-w-[280px] max-w-[calc(50%-12px)]' 
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </div>
            ))}
          </div>
          
          <div className='flex justify-center'>
            <div className='border-[0.1rem] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black w-full max-w-[calc(50%-12px)] min-w-[280px]'>
              <Image src={infoList[2].icon} alt={infoList[2].title} className='w-7 mt-3'/>
              <h3 className='my-4 font-semibold text-gray-700'>{infoList[2].title}</h3>
              <p className='text-gray-600 text-sm'>{infoList[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About