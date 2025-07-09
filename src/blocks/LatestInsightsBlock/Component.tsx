'use client'

import React from 'react'
import { LatestInsightsBlock as LatestInsightsBlockProps } from '@/payload-types'

const LatestInsights: React.FC<LatestInsightsBlockProps> = ({ heading, description, insights }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          )}
          {description && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights?.map((insight, index) => {
            let imageUrl: string | undefined = undefined
            if (typeof insight.image === 'string' || typeof insight.image === 'number') {
              imageUrl = String(insight.image)
            } else if (insight.image && typeof insight.image === 'object') {
              imageUrl = insight.image.url ?? undefined
            }
            const imageAlt =
              (insight.image && typeof insight.image === 'object' && insight.image.alt) ||
              insight.title ||
              'Insight image'
            const formattedDate = insight.date
              ? new Date(insight.date).toString() !== 'Invalid Date'
                ? new Date(insight.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })
                : null
              : null

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <div className="flex justify-between">
                  {insight.tag && (
                    <span className="text-sm text-blue-600 font-semibold mb-2 block">
                      {insight.tag}
                    </span>
                  )}
                  {formattedDate && (
                    <span className="text-xs text-gray-500 mb-2 block">{formattedDate}</span>
                  )}
                </div>
                {insight.title && (
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h3>
                )}
                {insight.description && <p className="text-gray-600 mb-4">{insight.description}</p>}
                {insight.link && (
                  <a
                    href={insight.link}
                    className="text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LatestInsights;