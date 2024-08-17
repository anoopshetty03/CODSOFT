import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link, scroller } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
    setNav(false);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link onClick={() => scrollToSection('home')}>Home</Link>
        </li>
        <li>
          <Link onClick={() => scrollToSection('about')}>About</Link>
        </li>
        <li>
          <Link onClick={() => scrollToSection('skills')}>Skills</Link>
        </li>
        <li>
          <Link onClick={() => scrollToSection('projects')}>Projects</Link>
        </li>
        <li>
          <Link onClick={() => scrollToSection('contact')}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={() => scrollToSection('home')}>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => scrollToSection('about')}>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => scrollToSection('skills')}>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => scrollToSection('projects')}>Projects</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => scrollToSection('contact')}>Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
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
              9482071575<FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
