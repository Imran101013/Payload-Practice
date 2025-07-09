import { Block } from "payload";

export const AboutCreativeBlock: Block = {
  slug: "aboutCreativeBlock",
  fields:[
    {
          name: 'cards',
          type: 'array',
          label: 'Add Cards',
          fields: [
            {
              name: 'number',
              type: 'number',
              label: 'counter',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
          ],
        },
  ],
  labels: {
    singular: "About Creative Block",
    plural: "About Creative Blocks",
  },
};