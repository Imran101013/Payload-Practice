import { Block } from "payload";

export const OurTeamBlock: Block = {
  slug: "ourTeamBlock",
  labels: {
    singular: "Our Team Block",
    plural: "Our Team Blocks",
  },
  interfaceName: "OurTeamBlock",
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
      name: "teamMembers",
      type: "array",
      label: "Team Members",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image",
        },
        {
          name: "name",
          type: "text",
          label: "Name",
        },
        {
          name: "role",
          type: "text",
          label: "Role",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
        {
          name: "tags",
          type: "array",
          label: "Tags",
          fields: [
            {
              name: "tag",
              type: "text",
              label: "Tag",
            },
          ],
        },
      ],
    },
  ],
};
