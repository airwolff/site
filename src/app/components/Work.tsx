import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  bgImage: string;
  mobileImage: string;
  technologies: string[];
  codeRepo: string;
}

const Work = () => {
  if (!workData || workData.length < 3) {
    return null;
  }

  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Portfolio
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Email Templates
      </h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Responsive HTML email templates. Hover to see mobile versions on desktop, tap on mobile.
      </p>
      
      {/* First row: Fireworks + Villain */}
      <div className='flex flex-wrap justify-center items-start gap-12 mb-12'>
        <WorkCard project={workData[1]} />
        <WorkCard project={workData[2]} />
      </div>
      
      {/* Second row: ACME Newsletter centered */}
      <div className='flex justify-center'>
        <WorkCard project={workData[0]} />
      </div>
    </div>
  );
}; 

const WorkCard = ({ project }: { project: Project }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Desktop dimensions (50% scale)
  const desktopWidth = 300;
  const desktopHeight = 350;
  const mobileWidth = 188;
  const mobileHeight = 400;
  
  // Mobile crop height
  const mobileCropHeight = 250;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobileView) return; // Disable hover on mobile
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    hoverTimeoutRef.current = setTimeout(() => {
      setShowMobile(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (isMobileView) return;
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowMobile(false);
  };

  const handleClick = () => {
    // Toggle on mobile only
    if (isMobileView) {
      setShowMobile(!showMobile);
    }
  };

  // On mobile: crop height and show full-size link
  // On desktop: normal behavior
  const displayWidth = isMobileView ? '100%' : (showMobile ? mobileWidth : desktopWidth);
  const displayHeight = isMobileView ? mobileCropHeight : (showMobile ? mobileHeight : desktopHeight);

  return (
    <div 
      className='flex flex-col items-center w-full md:w-auto'
      style={{ maxWidth: isMobileView ? '100%' : desktopWidth }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Image container */}
      <div 
        className='relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 w-full'
        style={{ 
          width: displayWidth,
          height: displayHeight
        }}
      >
        <Image
          src={showMobile ? project.mobileImage : project.bgImage}
          alt={project.title}
          fill
          className='object-cover object-top'
          priority
        />
        
        {/* Mobile: Show "Tap to toggle" hint */}
        {isMobileView && (
          <div className='absolute bottom-2 left-0 right-0 text-center'>
            <span className='text-xs bg-black/70 text-white px-3 py-1 rounded-full'>
              Tap to {showMobile ? 'see desktop' : 'see mobile'}
            </span>
          </div>
        )}
      </div>
      
      {/* "View Full Size" link on mobile */}
      {isMobileView && (
        <a 
          href={showMobile ? project.mobileImage : project.bgImage}
          target="_blank"
          rel="noopener noreferrer"
          className='text-xs text-blue-600 mt-2 underline'
        >
          View Full Email →
        </a>
      )}
      
      {/* Info card */}
      <div 
        className='mt-4 p-4 bg-white rounded-lg border border-gray-200 w-full'
        style={{ width: displayWidth }}
      >
        <div className='flex items-start justify-between gap-3'>
          <div className='flex-1 min-w-0'>
            <h3 className='font-semibold text-sm mb-1 font-Ovo leading-tight'>{project.title}</h3>
            <p className='text-xs text-gray-600 mb-2 leading-relaxed'>{project.description}</p>
            
            {/* Technology tags */}
            <div className='flex flex-wrap gap-1'>
              {project.technologies.slice(0, 2).map((tech, idx) => (
                <span 
                  key={idx}
                  className='px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded whitespace-nowrap'
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className='px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded'>
                  +{project.technologies.length - 2}
                </span>
              )}
            </div>
          </div>
          
          {/* GitHub link */}
          <a 
            href={project.codeRepo}
            target="_blank"
            rel="noopener noreferrer"
            className='flex-shrink-0 border border-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-customBlue transition'
            aria-label={`View code for ${project.title}`}
          >
            <Image src={assets.send_icon} alt='' className='w-4'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;