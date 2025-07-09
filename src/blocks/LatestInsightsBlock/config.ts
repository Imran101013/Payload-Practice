import { Block } from "payload";

export const LatestInsightsBlock: Block = {
  slug: "latestInsightsBlock",
  labels: {
    singular: "Latest Insights Block",
    plural: "Latest Insights Blocks",
  },
  interfaceName: "LatestInsightsBlock",
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "insights",
      type: "array",
      label: "Add Insights",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image",
        },
        {
          name: "tag",
          type: "text",
          label: "Tag",
        },
        {
          name: "date",
          type: "date",
          label: "Date",
        },
        
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
          name: "link",
          type: "text",
          label: "Link",
          admin: {
            description: "URL to the full insight article or page.",
          },
        },
      ],
    },
  ],
};

