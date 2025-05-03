import { assets, infoList } from '@/assets/assets'
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
          <ul className='flex flex-col gap-4'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
              <li key={index}>
                <Image src={icon} alt={title} className='w-6 inline-block'/>
                <h3 className='inline-block ml-2 text-lg font-Ovo'>{title}</h3>
                <p className='text-gray-500 font-Ovo'>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
