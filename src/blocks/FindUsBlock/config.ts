import { Block } from "payload";
import React from "react";

export const FindUsBlock: Block = {
  slug: "findUsBlock",
  labels: {
    singular: "Find Us Block",
    plural: "Find Us Blocks",
  },
  interfaceName: "FindUsBlock",
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
      name: "map",
      type: "text",
      label: "Map URL",
    },
  ],
};
