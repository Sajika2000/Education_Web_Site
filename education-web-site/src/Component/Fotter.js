import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='py-6 text-white bg-[#5f5fe3]'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='items-center mb-4 md:mb-0'>
            <h2 className='text-xl font-bold text-center'>SDCording</h2>
            <p className='font-light text-white'>© 2024 All rights reserved.</p>
          </div>
          <div className='flex flex-col items-center gap-8 space-x-4 text-lg font-medium md:flex-row'>
            <nav className='flex flex-wrap gap-4'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                HOME
              </Link>
              <Link
                to='about'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                ABOUT US
              </Link>
              <Link
                to='course'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                COURSES
              </Link>
              <Link
                to='team'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                TEAM
              </Link>
              <Link
                to='price'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                PRICING
              </Link>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className='relative inline-block cursor-pointer group '
              >
                CONTACT
              </Link>
            </nav>
          </div>
          <div className='flex justify-center gap-6 pt-6 space-x-4'>
            <h3 className='mt-2 text-lg font-semibold'>Follow Us:</h3>
            <i className='fab fa-facebook-f p-3 text-xl text-[#fff] hover:bg-[#fff] hover:text-[#5f5fe3]  rounded-md transition'></i>
            <i className='fab fa-instagram p-2 text-xl text-[#fff] hover:bg-[#fff] hover:text-[#5f5fe3]  rounded-md transition'></i>
            <i className='fab fa-twitter p-2 text-xl text-[#fff] hover:bg-[#fff]  hover:text-[#5f5fe3]  rounded-md transition'></i>
            <i className='fab fa-linkedin p-2 text-xl text-[#fff] hover:bg-[#fff] hover:text-[#5f5fe3]  rounded-md transition'></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
