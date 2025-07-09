import React from 'react'
import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({  richText }) => {
  return (
    <div className="relative  flex items-center justify-center text-white bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mb-8 z-10 relative flex items-center justify-center p-[100px]">
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}


      </div>
    </div>
  )
}
