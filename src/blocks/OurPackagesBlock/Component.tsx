import React from 'react';
import type { OurPackagesBlock } from '@/payload-types';  

export const OurPackages:React.FC<OurPackagesBlock> = ({ title, description, packages }) => {
  return (
   <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {title && <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">{title}</h2>}
        {description && <p className="text-lg text-center text-gray-600 mb-10">{description}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <div
  key={index}
  className={`bg-white p-6 rounded-lg shadow-md border ${
    index === 1
      ? 'border-blue-500 scale-105 bg-blue-50 shadow-lg'
      : 'border-gray-200'
  } transition-transform duration-300`}
>
  <h3 className="text-2xl text-center font-semibold text-gray-900 mb-2">
    {pkg.packageName}
  </h3>
  <p className="text-3xl text-center font-bold text-blue-600 mb-4">
    {pkg.packagePrice}
  </p>
  <p className="text-gray-700 text-center mb-4">{pkg.description}</p>

  <ul className="list-disc pl-5 mb-4">
    {pkg.packageFeatures?.map((feature, featureIndex) => (
      <li key={featureIndex} className="text-gray-600 pb-4">
        {feature.featureDescription}
      </li>
    ))}
  </ul>

  <div className="flex justify-center">
    {pkg.button && (
      <a
        href="/get-started"
        className={`inline-block font-semibold px-6 py-3 rounded-lg transition-colors ${
          index === 1
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-black hover:bg-blue-700'
        }`}
      >
        {pkg.button}
      </a>
    )}
  </div>
</div>

          ))}
        </div>
      </div>
   </section>
  );
}
