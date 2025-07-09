import React from 'react'

type AboutCreativeBlockProps = {
  cards?: { number?: number | null; title?: string | null; id?: string | null }[] | null
  id?: string | null
  blockName?: string | null
  blockType: 'aboutCreativeBlock'
  title?: string | null
}

const AboutCreative: React.FC<AboutCreativeBlockProps> = ({ cards, title }) => {
  return (
    <div className="about-creative-block">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards?.map((card, index) => (
          <div key={index} className="p-4">
            <p className="text-blue-700 text-5xl  font-extrabold  text-center flex
              items-center justify-center">
              {card.number}
              {(index === 0 || index === 1) && (
                <span className="text-lg text-blue-700 text-4xl font-extrabold">+</span>
              )}
            </p>
            <h3 className="text-xl font-semibold text-center mb-2">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutCreative
