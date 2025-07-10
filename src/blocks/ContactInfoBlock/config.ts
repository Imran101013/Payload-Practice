// blocks/contactInfoBlock/config.ts
import { Block } from 'payload'

export const ContactInfoBlock: Block = {
  slug: 'contactInfoBlock',
  labels: {
    singular: 'Contact Info Block',
    plural: 'Contact Info Blocks',
  },
  interfaceName: 'ContactInfoBlock',
  fields: [
    {
      name: 'address',
      type: 'text',
      label: 'Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'businessHours',
      type: 'text',
      label: 'Business Hours',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      label: 'Form',
    },
    {
      name: 'responseTitle',
      type: 'text',
      label: 'Response Title',
    },
    {
      name: 'responseContent',
      type: 'text',
      label: 'Response Content',
    },
  ],
}
