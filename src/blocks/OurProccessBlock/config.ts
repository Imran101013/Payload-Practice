import { Block } from "payload";

export const OurProccessBlock: Block = {
  slug: "ourProccessBlock",
  labels: {
    singular: "Our Process Block",
    plural: "Our Proccess Blocks",
  },
  interfaceName: "OurProccessBlock",
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
      name: "offerItems",
      type: "array",
      label: "Offer Items",
      fields: [
        {
          name: "number",
          type: "number",
          label: "Number",
        },
        {
          name: "itemTitle",
          type: "text",
          label: "Item Title",
        },
        {
          name: "itemDescription",
          type: "textarea",
          label: "Item Description",
        },
      ],
    },
  ],
};