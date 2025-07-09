import { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonialBlock',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  interfaceName: 'TestimonialBlock',
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
      name: 'testimonials',
      type: 'array',
      label: 'Add Testimonials',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
        },
        {
          name: 'authorName',
          type: 'text',
          label: 'Author Name',
        },
        {
          name: 'authorTitle',
          type: 'text',
          label: 'Author Title',
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating',
          required: true,
          min: 1,
          max: 5,
          step: 0.1,
          admin: {
            description: 'Rating from 1 to 5, with decimal support (e.g., 4.5)',
          },
        },
      ],
    },
  ],
}

export default TestimonialBlock
