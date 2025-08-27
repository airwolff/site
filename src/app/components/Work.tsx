import { assets, workData } from '@/assets/assets';
import Image from 'next/image'
import React from 'react';

const Work = () => {
  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Portfolio:
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Work:
      </h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here are some examples of my recent email marketing projects, showcasing my skills in AMPscript, responsive design, and automation using Salesforce Marketing Cloud.
      </p>
      <div className={`grid gap-5 mt-10 ${workData.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
      {workData.map((project, index)=>(
        <div key={index} className='aspect-[3/2] bg-no-repeat bg-cover bg-center rounded-1g relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <Image src={assets.send_icon} alt='send icon' className='w-5'/>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Work;