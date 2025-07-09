import React from 'react'
import type { OurOfferBlock } from '@/payload-types'
import { Code, Palette, Search, Smartphone, ShoppingCart, BarChart } from 'lucide-react'

const iconMap = [Code, Palette, Search, Smartphone, ShoppingCart, BarChart] as const

export const OurOffer: React.FC<OurOfferBlock> = ({ title, description, offerItems }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {title && <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">{title}</h2>}
        {description && <p className="text-lg text-center text-gray-600 mb-10">{description}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerItems?.map((offerItem, itemIndex) => {
            const Icon = iconMap[itemIndex % iconMap.length] // loop through icons if more items
            return (
              <div
                key={itemIndex}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${itemIndex === 1 ? 'border border-blue-500 scale-105 bg-blue-50 shadow-lg' : ''}`}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">
                  {offerItem.itemTitle}
                </h3>
                <p className="text-gray-600 text-center">{offerItem.itemDescription}</p>
                <p className="text-center font-extrabold text-blue-800 text-xl mt-4">{offerItem.itemPrice}</p>
                {offerItem?.features && offerItem.features.length > 0 && (
                  <ul className="list-disc pl-5 mt-4">
                    {offerItem.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 mb-2">
                        {feature.featureTitle}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex justify-center">
                  <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4 w-full">
                    {offerItem.button}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
