import { OurMissionBlock } from '@/payload-types'
import React from 'react'

export const OurMission: React.FC<OurMissionBlock> = ({ title, description, button, image }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-left">
          {title && <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>}
          {description && <p className="text-lg text-gray-600 mb-4">{description}</p>}
          {button && (
            <a
              href="/our-process"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {button}
            </a>
          )}
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          {image && typeof image === 'object' && 'url' in image ? (
            <img
              src={image.url ?? ''}
              alt={'alt' in image && image.alt ? image.alt : 'Our Mission Image'}
              className="w-full max-w-md rounded-lg h-[300px] object-cover"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
