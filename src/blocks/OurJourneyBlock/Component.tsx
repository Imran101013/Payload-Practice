import React from 'react'
import { OurJourneyBlock as OurJourneyBlockProps } from '@/payload-types'

export const OurJourney: React.FC<OurJourneyBlockProps> = ({ title, description, milestones }) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {title && <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">{title}</h2>}
        {description && <p className="text-lg text-center text-gray-600 mb-10">{description}</p>}

        <div className="flex flex-col md:flex-row gap-8">
          {[0, 1].map((col) => (
            <div key={col} className="flex-1 space-y-8">
              {milestones
                ?.filter((_, idx) => idx % 2 === col)
                .map((milestone, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                  >
                    <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                    <p className="text-gray-800 font-semibold mt-1">{milestone.event}</p>
                    {milestone.description && (
                      <p className="text-gray-600 mt-1">{milestone.description}</p>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
