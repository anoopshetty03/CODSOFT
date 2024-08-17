import React from 'react';
import heroPhoto from '../assets/Photo.jpg';
import resume from '../assets/resume.pdf';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen flex items-center justify-center px-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center'>
        {/* Text Content */}
        <div className='flex flex-col justify-center lg:w-2/3 lg:pr-8 text-center lg:text-left'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6]'>
            ANOOP SHETTY
          </h1>
          <h2 className='text-3xl sm:text-4xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px] mx-auto lg:mx-0'>
            I’m a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
          <div className='flex justify-center lg:justify-start space-x-4'>
            <a
              href={resume}
              download="Anoop_Shetty_Resume.pdf"
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Hero Image */}
        <div className='mt-8 lg:mt-0 lg:w-1/3 lg:flex lg:justify-end lg:items-center lg:pl-8'>
          <img
            src={heroPhoto}
            alt="Hero"
            className='rounded-2xl w-full md:w-4/5 lg:w-full xl:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
