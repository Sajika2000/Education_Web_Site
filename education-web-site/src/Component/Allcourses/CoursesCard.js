import React, { useState } from 'react';
import { coursesCard } from '../Commen/dummydata';


const CoursesCard = () => {
  const [visibleRows, setVisibleRows] = useState(1);
  const cardsPerRow = 3; 

  const handleSeeMore = () => {
    setVisibleRows(prev => prev + 1);
  };

  const handlePrevious = () => {
    setVisibleRows(prev => Math.max(prev - 1, 1));
  };

  return (
    <section className='px-4 py-12'>
      <div className='grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3'>
        {coursesCard.slice(0, visibleRows * cardsPerRow).map((val, index) => (
          <div key={index} className='p-6 bg-white rounded-lg shadow-md'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 rounded bg-[#a3a2f4] p-2'>
                <img src={val.cover} alt={val.coursesName} className='object-cover w-full h-full rounded' />
              </div>
            </div>
            <div className='text-center'>
              <h1 className='mb-2 text-xl font-semibold'>{val.coursesName}</h1>
              <div className='flex justify-center items-center text-[#a3a2f4] mb-4'>
                <i className='mr-1 text-sm fa fa-star'></i>
                <i className='mr-1 text-sm fa fa-star'></i>
                <i className='mr-1 text-sm fa fa-star'></i>
                <i className='mr-1 text-sm fa fa-star'></i>
                <i className='mr-1 text-sm fa fa-star'></i>
                <label htmlFor='' className='ml-2'>(5.5)</label>
              </div>
              <div className='items-center text-left'>
                {val.courTeacher.map((details, idx) => (
                  <div key={idx} className='flex items-center mb-4 ml-14'>
                    <img src={details.dcover} alt={details.name} className='w-12 h-12 mr-3 rounded-full' />
                    <div className=''>
                      <h4 className='font-medium text-black'>{details.name}</h4>
                      <span className='text-[#878787] text-sm'>{details.totalTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-6 text-center'>
              <div className='mb-4 text-lg font-bold rounded bg-slate-200'>
                {val.priceAll} / {val.pricePer}
              </div>
              <button className='font-medium border-2 px-6 py-1 border-[#5f5fe3] bg-[#fff] hover:text-[#c6c5f5] transition rounded text-[#5f5fe3]'>
                ENROLL NOW!
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8 text-center'>
        {visibleRows > 1 && (
          <button
            onClick={handlePrevious}
            className='px-4 py-2 mr-4 text-white bg-[#5f5fe3] hover:text-[#c6c5f5] rounded'>
            &larr; 
          </button>
        )}
        {visibleRows * cardsPerRow < coursesCard.length && (
            
          <button
            onClick={handleSeeMore}
            className='px-4 py-2 text-white bg-[#5f5fe3] hover:text-[#c6c5f5] rounded'>
            See More &rarr;
          </button>
        )}
      </div>
    </section>
  );
};

export default CoursesCard;
