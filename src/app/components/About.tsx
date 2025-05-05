import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction:
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About Me:
      </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div>
          <Image src={assets.user_image} alt="user" className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
          <p className='mb-10 Inax-w-2xl font-Ovo'>
            A results-driven web professional with a proven track record of success across diverse environments, from managing large-scale websites for major corporations to crafting tailored solutions for individual businesses. My core skills include front-end development, CMS management, and website optimization. This breadth of experience allows me to adapt quickly to different project scopes and deliver high-quality results, whether it's a complex enterprise platform or a simple, effective website for a local startup.
          </p>
          <ul className='grid grid-cols-2 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
              <li className='border-[0.1rem] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                <Image src={icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>
          {/* <h4 className='my-6 text-gray-700 font-Ovo'>Tools I Use</h4>
          <ul className='flex flex-wrap items-center gap-4 sm:gap-6'>
            {toolsData.map((tool, index)=>(
              <li className='flex items-center justify-center w-20 sm:w-22 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                <Image src={tool} alt='Tool' className='w-10 sm:w-12'/>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default About
