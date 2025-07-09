import { Block } from "payload";

export const OurPackagesBlock: Block = {
  slug: "ourPackagesBlock",
  labels: {
    singular: "Our Packages Block",
    plural: "Our Packages Blocks",
  },
  interfaceName: "OurPackagesBlock",
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
      name: "packages",
      type: "array",
      label: "Packages",
      fields: [
        {
          name: "packageName",
          type: "text",
          label: "Package Name",
        },
        {
          name: "packagePrice",
          type: "text",
          label: "Package Price",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
        {
          name: "packageFeatures",
          type: "array",
          label: "Package Features",
          fields: [
            {
              name: "featureDescription",
              type: "text",
              label: "Feature Description",
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