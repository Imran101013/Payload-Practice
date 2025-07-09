import React from 'react'
import { CreativeFlowBlock as CreativeFlowBlockProps } from '@/payload-types'
import { Star, Users, Award, TrendingUp } from 'lucide-react'

const features = [Star, Users, Award, TrendingUp]

export const CreativeFlow: React.FC<CreativeFlowBlockProps> = ({ heading, description, cards }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity with technical expertise to deliver exceptional digital
              solutions
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards?.map((card, index) => {
            const Icon = features[index % features.length] // loop through icons if more cards than icons
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
