import React, { useRef, useState } from 'react';
// import heroimage from './assets/profile2.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Memulai ulang video ketika video selesai
    videoRef.current.play();
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
      
      <img src='/assets/images/gif.gif' alt="hero" className=" transform scale-[250%] w-80 h-auto  object-fit  "  style={{ bottom: '13.8rem' }}></img> 
    
      <img src='/assets/images/profile2.jpg' alt="hero" className=" absolute ml-10 w-60 h-60 rounded-full "  style={{ bottom: '13.8rem' }}></img>

      </div>

      
     
            
            
            
  
      <div className='relative cols-span-2 flex px-5 my-auto'>
        <div>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>
            I'm 
          </span><br/>
          <TypeAnimation
            sequence={[
              "Your",
              1000,
              "Future",
              1000,
              "Wife",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          /><br/>
        </h1> 
        <p className='text-white sm:text-lg my-6 lg:textxl'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p> 

        <div className='my-8 grid grid-cols-1 sm:grid-cols-2'>
          <button className='px-6 py-3 w-21 rounded-xl mr-4
          bg-gradient-to-br from-violet-500 to-pink-500 text-white'>Download CV</button>

         <button className=' px-6 py-3 w-32 rounded-xl
          bg-transparant border-2 border-white text-white'>Contact</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
