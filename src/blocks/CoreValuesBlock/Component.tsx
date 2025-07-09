import React from 'react';
import type { CoreValuesBlock as CoreValuesBlock } from '@/payload-types';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    description: 'We embrace creativity and innovation to solve problems.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: 'We work together to achieve common goals.',
    icon: Lightbulb,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity in all our actions.',
    icon: Users,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    icon: Award,
  },
];

export const CoreValues = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Our core values guide us in everything we do, ensuring we deliver exceptional results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
