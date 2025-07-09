import React from 'react';

import { ctaSectionBlock as CtaSectionBlockProps } from '@/payload-types';

const CtaSection: React.FC<CtaSectionBlockProps> = ({ heading, description, button }) => {
  return (
    <div>
      <section className="bg-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          )}
          {description && (
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}
          {button && (
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {button}
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default CtaSection;
