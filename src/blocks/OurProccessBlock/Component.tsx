import React from 'react';
import { OurProccessBlock } from '@/payload-types';

export const OurProccess: React.FC<OurProccessBlock> = ({ title, description, offerItems}) => {
  return (
    <section className='bg-gray-200'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">{title}</h2>
      <p className="text-lg text-center text-gray-600 mb-10">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {offerItems?.map((item, index) => (
            <div key={index} className="">
              <h3 className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{item.number}</h3>
              <h4 className="text-lg text-center font-semibold mt-2">{item.itemTitle}</h4>
              {item.itemDescription && (
                <p className="text-gray-600 text-center mt-1">{item.itemDescription}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


