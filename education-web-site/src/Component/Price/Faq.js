import React, { useState } from 'react';
import { faq } from '../Commen/dummydata';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-black">FAQS</h1>
          <h3 className="mt-2 text-xl font-semibold text-gray-600">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faq.map((val, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full font-medium text-left text-[#5f5fe3] border-2 border-[#5f5fe3] px-6 py-2 bg-white hover:bg-[#5f5fe3] hover:text-white transition rounded"
              >
                <h2>{val.title}</h2>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  ➤
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p>{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
