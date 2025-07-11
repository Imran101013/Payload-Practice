import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { CreativeFlow } from './CreativeFlowBlock/Component'
import TestimonialBlock from './TestimonialBlock/Conponent'
import LatestInsights from './LatestInsightsBlock/Component'
import CtaSection from './CtaSectionBlock/Component'
import AboutCreative from './AboutCreativeBlock/Component'
import { OurMission } from './OurMissionBlock/Component'
import { CoreValues } from './CoreValuesBlock/Component'
import { OurJourney } from './OurJourneyBlock/Component'
import { OurTeam } from './OurTeamBlock/Components'
import { OurOffer } from './OurOfferBlock/Component'
import { OurProccess } from './OurProccessBlock/Component'
import { OurPackages } from './OurPackagesBlock/Component'
import { OurFaqs } from './OurFaqsBlock/Component'
import { GetStarted } from './GetStartedBlock/Component'
import { ContactInfoBlock } from './ContactInfoBlock/Component'
import { OurLocations } from './OurLocationsBlock/Component'
import { FindUsBlock } from './FindUsBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  creativeFlowBlock: CreativeFlow,
  testimonialBlock: TestimonialBlock,
  latestInsightsBlock: LatestInsights,
  ctaSectionBlock: CtaSection,
  aboutCreativeBlock: AboutCreative,
  ourMissionBlock: OurMission,
  coreValuesBlock: CoreValues,
  ourJourneyBlock: OurJourney,
  ourTeamBlock: OurTeam,
  ourOfferBlock: OurOffer,
  ourProccessBlock: OurProccess,
  ourPackagesBlock: OurPackages,
  ourFaqsBlock: OurFaqs,
  getStartedBlock: GetStarted,
  contactInfoBlock: ContactInfoBlock,
  ourLocationsBlock:OurLocations,
  findUsBlock: FindUsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
