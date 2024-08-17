import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/apjmlmxa" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - shettyanoop2003@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
      </form>
      {/* Social Icons */}
      <div className='flex justify-center space-x-6 mt-6 lg:hidden'>
        <a
          className='flex justify-center items-center w-[60px] h-[60px] text-gray-300 bg-blue-600 rounded-full hover:bg-blue-700 duration-300'
          href='https://linkedin.com/in/anoopshetty03'
        >
          <FaLinkedin size={20} />
        </a>
        <a
          className='flex justify-center items-center w-[60px] h-[60px] text-gray-300 bg-[#333333] rounded-full hover:bg-[#444444] duration-300'
          href='https://github.com/anoopshetty03'
        >
          <FaGithub size={20} />
        </a>
        <a
          className='flex justify-center items-center w-[60px] h-[60px] text-gray-300 bg-red-500 rounded-full hover:bg-red-400 duration-300'
          href='mailto:shettyanoop2003@gmail.com'
        >
          <HiOutlineMail size={20} />
        </a>
        <a
          className='flex justify-center items-center w-[60px] h-[60px] text-gray-300 bg-[#15c356] rounded-full hover:bg-[#25d366] duration-300'
          href='https://wa.me/919482071575'
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://linkedin.com/in/anoopshetty03'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/anoopshetty03'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:shettyanoop2003@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#25d366]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://wa.me/919482071575'
            >
              9482071575 <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
