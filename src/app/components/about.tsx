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
        <div className='flex-1'>
          <p className='mb-6 max-w-2xl font-Ovo'>
            I'm a technical developer specializing in email marketing automation and modern web development.
          </p>

          <p className='mb-6 max-w-2xl font-Ovo'>
            After seven years building digital solutions—from managing 120+ e-commerce sites to developing lifecycle campaigns for Fortune 500 brands—I focus on creating email and web systems that solve real technical challenges. Whether building responsive email templates in Salesforce Marketing Cloud or developing React applications, I approach each project with the same principle: clean code, thorough testing, and solutions that scale.
          </p>

          <p className='mb-10 max-w-2xl font-Ovo'>
            Currently based in Maine and seeking opportunities in email marketing development, marketing automation, or front-end development roles.
          </p>
          
          {/* First row: Core Skills + Development Tools */}
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
          
          {/* Second row: Education centered */}
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