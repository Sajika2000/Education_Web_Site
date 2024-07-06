import React from 'react';
import PricingCard from './PricingCard';
import Faq from './Faq';

const Pricing = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='px-4 mx-auto max-w-7xl'>
        <h1 className='mt-6 mb-2 text-2xl font-medium tracking-wide text-center text-black'>OUR PRICES</h1>
        <h2 className='mt-4 mb-6 text-5xl font-bold text-center'>
          Choose the right plan.
        </h2>
        <PricingCard />
        <Faq/>
      </div>
    </section>
  );
}

export default Pricing;
