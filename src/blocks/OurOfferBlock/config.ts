import { Block } from "payload";

export const OurOfferBlock: Block = {
  slug: "ourOfferBlock",
  labels: {
    singular: "Our Offer Block",
    plural: "Our Offer Blocks",
  },
  interfaceName: "OurOfferBlock",
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
          name: "itemTitle",
          type: "text",
          label: "Item Title",
        },
        {
          name: "itemDescription",
          type: "textarea",
          label: "Item Description",
        },
        {
          name: "itemPrice",
          type: "text",
          label: "Item Price",
        },
        {
          name: "features",
          type: "array",
          label: "Features",
          fields: [
            {
              name: "featureTitle",
              type: "text",
              label: "Feature Title",
            },
          ],
        },
         {
      name: "button",
      type: "text",
      label: "Get Started",
    },
      ],
    },
  ],
}