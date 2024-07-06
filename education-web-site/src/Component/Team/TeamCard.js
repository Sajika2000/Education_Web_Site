import React from 'react';
import { team } from '../Commen/dummydata';

const TeamCard = () => {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
      {team.map((val, index) => (
        <div key={index} className='bg-white rounded-lg shadow-md'>
          <div className='relative'>
            <img src={val.cover} alt={val.name} className='w-full rounded-t-lg h-74 ' />
            <div className='absolute top-0 right-0 m-2 space-x-2'>
              <i  className='fab fa-facebook-f hover:bg-[#5f5fe3] hover:text-[#fff] p-2 rounded-md'></i>
              <i className='fab fa-instagram icon hover:bg-[#5f5fe3] hover:text-[#fff] p-2 rounded-md'></i>
              <i className='fab fa-twitter icon hover:bg-[#5f5fe3] hover:text-[#fff] p-2 rounded-md'></i>
              <i className='fab fa-linkedin icon hover:bg-[#5f5fe3] hover:text-[#fff] p-2 rounded-md'></i>
            </div>
          </div>
          <div className='items-center p-4 hover:bg-[#5f5fe3] hover:text-[#fff] hover:cursor-pointer'>
            <h2 className='mb-2 text-xl font-bold text-center '>{val.name}</h2>
            <p className='text-center text-gray-600'>{val.work}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
