import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Anoop Shetty, nice to meet you. Please take a look around.</p>
            </div>
            <div>
            <p>
              As a dedicated full stack developer, I am passionate about crafting robust
              and scalable web applications that provide seamless user experiences. With
              expertise spanning front-end and back-end technologies, I have successfully
              developed a variety of projects during my college education. My commitment
              to continuous learning and adapting to the latest industry trends ensures
              that I deliver innovative and efficient solutions.
            </p> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
