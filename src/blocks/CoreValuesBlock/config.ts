import { Block} from "payload";
import React from "react";

export const CoreValuesBlock: Block = {
  slug: "coreValuesBlock",
  labels: {
    singular: "Core Values Block", 
    plural: "Core Values Blocks",},
  interfaceName: "CoreValuesBlock",
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
      name: "values",
      type: "array",
      label: "Core Values",
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
      ],
    },
  ],
}