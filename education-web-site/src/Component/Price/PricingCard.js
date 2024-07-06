import React from 'react';
import { price } from '../Commen/dummydata';

const PricingCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
      {price.map((val, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md ">
          <h4 className="items-center mb-2 text-lg font-semibold text-center">{val.name}</h4>
          <h1 className="ml-14 flex  mb-4 text-4xl font-bold text-[#5f5fe3] ]">
            <span className="mr-2 text-3xl">$</span>{val.price}
          </h1>
          <p className="mb-6 text-center text-gray-600  hover:text-[#c6c5f5]">{val.desc}</p>
          <button className=' w-full items-center font-medium border-2 px-6 py-2 border-[#5f5fe3] bg-white hover:bg-[#5f5fe3] hover:text-white transition rounded text-[#5f5fe3]'>
            GET STARTED
          </button>
        </div>
      ))}
    </div>
  )
}

export default PricingCard;
