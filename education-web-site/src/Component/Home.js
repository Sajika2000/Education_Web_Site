import React from 'react'
import Button from "../Component/Layout/button";
import HomePng from './Assets/homeimg.png'


const Home = () => {
  return (
    <div>

<div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#c6c5f5] to-[#5f5fe3]'>
      <div className='space-y-4 wpfull lg:w-2/4 mt-14 lg:mt-0'>
        <h2 className='text-3xl font-semibold tracking-wide text-center text-white lg:text-start'>WELCOME TO SDCoding</h2>
        <h1 className='text-5xl font-semibold leading-tight text-center lg:text-start'>
            Best Online Education Expertise
            </h1>
        <p className='font-semibold '>
        "SDCording provides expert-led online courses in software development, empowering learners to master coding and advance their tech careers." </p>
        <br></br>
        <div className='flex flex-row gap-6 '>
           <Button title= "GET START NOW"/>
           <button className=' font-medium border-2 px-6 py-1 border-[#5f5fe3] bg-[#fff] hover:text-[#c6c5f5] transition rounded text-[#5f5fe3]'> VIEW COURSE</button>
        </div>
      </div>
      <div className='relative' >
        <img className='w-500 h-[600px] mt-[110px]' src={HomePng} alt='HeroPng'/>
        
     
      </div>
              
        
    </div>
      
    </div>
  )
}

export default Home
