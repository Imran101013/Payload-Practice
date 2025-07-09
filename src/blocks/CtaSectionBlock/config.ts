import { Block } from "payload";
import React from "react";

export const CtaSectionBlock: Block = {
  slug: "ctaSectionBlock",
  labels: {
    singular: "CTA Section Block",
    plural: "CTA Section Blocks",
  },
  interfaceName: "CtaSectionBlock",
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
      name: "button",
      type: "text",
      label: "Start Your Project",
    },
  ],
};