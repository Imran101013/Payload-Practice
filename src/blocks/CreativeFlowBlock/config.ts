import { Block } from 'payload'

export const CreativeFlowBlock: Block = {
  slug: 'creativeFlowBlock',
  labels: {
    singular: 'Creative Flow Block',
    plural: 'Creative Flow Blocks',
  },
  interfaceName: 'CreativeFlowBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Add Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
  ],
}
