import React from "react";
import Aboutimg from '../Component/Assets/about.webp';

const About = () => {
  return (
    <>
      <section className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='container flex flex-col items-center mx-auto md:flex-row'>
          <div className='w-full p-4 md:w-1/2'>
            <img src={Aboutimg} alt='About' className='w-full rounded-lg shadow-lg' />
          </div>
          <div className='w-full p-4 text-left md:w-1/2'>
            <h2 className="mt-20 text-2xl font-medium tracking-wide text-black ">LEARN ANYTHING</h2>
            <h1 className="mt-4 mb-6 text-5xl font-bold">Benefits About Online Learning Expertise</h1>
            <div className='flex items-start p-4  mb-4 bg-white hover:bg-[#a3a2f4] transition-transform '>
              <div className='flex-shrink-0 mr-4'>
                <img src='https://img.icons8.com/dotty/80/000000/storytelling.png' alt='Online Courses' className='w-20 h-20' />
              </div>
              <div className="p-2 ">
                <h2 className="text-2xl font-semibold hover:text-[#fff]">Online Courses</h2>
                <p className="mt-2 text-black ">Discover a variety of expert-led online courses designed to enhance your coding and software development skills, anytime and anywhere.</p>
              </div>
            </div>
            <div className='flex items-start p-4 mb-4 bg-white hover:bg-[#c6c5f5] transition-transform '>
              <div className='flex-shrink-0 mr-4'>
                <img src='https://img.icons8.com/ios/80/000000/diploma.png' alt='Online Courses' className='w-20 h-20' />
              </div>
              <div  className="p-2">
                <h2 className="text-2xl font-semibold hover:text-[#fff]">Earn A Certificates</h2>
                <p className="mt-2 text-black ">
                Earn certificates through our expert-led online courses, enhancing your credentials and showcasing your skills in coding and software development.</p>
              </div>
            </div>
            <div className='flex items-start p-4 mb-4 bg-white hover:bg-[#c6c5f5] transition-transform '>
              <div className='flex-shrink-0 mr-4'>
                <img src='https://img.icons8.com/ios/80/000000/athlete.png' alt='Online Courses' className='w-20 h-20' />
              </div>
              <div className="p-2" >
                <h2 className="text-2xl font-semibold hover:text-[#fff]">Lern With Expert</h2>
                <p className="mt-2 text-black ">Learn with industry experts through our online courses, gaining valuable insights and hands-on experience in coding and software development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
