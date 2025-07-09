import { Block } from "payload";
import React from "react";

export const OurJourneyBlock: Block = {
  slug: "ourJourneyBlock",
  labels: {
    singular: "Our Journey Block",
    plural: "Our Journey Blocks",
  },  
  interfaceName: "OurJourneyBlock",
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
      name: "milestones",
      type: "array",
      label: "Milestones",
      fields: [
        {
          name: "year",
          type: "number",
          label: "Year",
        },
        {
          name: "event",
          type: "text",
          label: "Event",
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