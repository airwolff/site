import { assets } from '@/assets/assets';
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Handle potential undefined environment variable
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult("Configuration error: Missing access key");
      return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h2 className='text-center text-5xl font-Ovo'>
        Contact
      </h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-2 font-Ovo'>
        Feel free to reach out about open positions or to discuss how I can contribute to your team. Currently seeking full-time email marketing developer or front-end developer roles, with a focus on SFMC implementation and modern web development.
      </p>
      <p className='text-center max-w-2xl mx-auto mb-12 font-Ovo'>
        Based in Maine, open to remote opportunities.
      </p>
      
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <input 
            type="text" 
            name="name"
            placeholder='Enter your name' 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' 
          />
          <input 
            type="email" 
            name="email"
            placeholder='Enter your email' 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
          />
        </div>
        <textarea 
          rows={6} 
          name="message"
          placeholder='Enter your message' 
          required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
        ></textarea>
        <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
          Send Message <Image src={assets.right_arrow_white} alt='Right arrow' className='w-4'/>
        </button>
      </form>
      
      {result && <p className='mt-4 text-center'>{result}</p>}
    </div>
  )
}

export default Contact