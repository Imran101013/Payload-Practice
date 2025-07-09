import { Block } from "payload";

export const OurFaqsBlock: Block = {
  slug: "ourFaqsBlock",
  labels: {
    singular: "Our Faqs Block",
    plural: "Our Faqs Blocks",
  },
  interfaceName: "OurFaqsBlock",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "faqs",
      type: "array",
      label: "Faqs",
      fields: [
        {
          name: "question",
          type: "text",
          label: "Question",
        },
        {
          name: "answer",
          type: "textarea",
          label: "Answer",
        },
      ],
    },
  ],
}