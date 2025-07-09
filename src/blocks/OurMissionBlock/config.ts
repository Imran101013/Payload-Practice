import { Block } from "payload";
import React from "react";

export const OurMissionBlock: Block = {
  slug: "ourMissionBlock",
  labels: {
    singular: "Our Mission Block",
    plural: "Our Mission Blocks",
  },
  interfaceName: "OurMissionBlock",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "description",
      type: "text",
      label: "Description",
    },
    {
      name: "button",
      type: "text",
      label: "Learn More About Our Process",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    }
  ],
};