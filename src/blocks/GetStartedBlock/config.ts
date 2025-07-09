import { Block } from "payload";

export const GetStartedBlock: Block = {
  slug: "getStartedBlock",
  labels: {
    singular: "Get Started Block",
    plural: "Get Started Blocks",
  },
  interfaceName: "GetStartedBlock",
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
      name: "buttonText",
      type: "text",
      label: "Get Started Now",
    },
  ],
};