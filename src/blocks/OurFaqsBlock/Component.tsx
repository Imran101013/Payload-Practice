import React from 'react'
import { OurFaqsBlock } from '@/payload-types'

export const OurFaqs: React.FC<OurFaqsBlock> = ({ title, description, faqs }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>}
        {description && <p className="text-lg text-center text-gray-600 mb-10">{description}</p>}

        <div className="space-y-6">
          {faqs?.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
