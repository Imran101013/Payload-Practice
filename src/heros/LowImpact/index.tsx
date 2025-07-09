import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
   <div className="relative  flex items-center justify-center text-white bg-gradient-to-br from-blue-900 to-purple-900">
         <div className="container mb-8 z-10 relative flex items-center justify-center p-[100px]">
           {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
         </div>
       </div>
  )
}
