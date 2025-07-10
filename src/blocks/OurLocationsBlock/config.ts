import { Block } from "payload";
export const OurLocations: Block = {
  slug: "ourLocationsBlock",
  labels: {
    singular: "Our Locations Block",
    plural: "Our Locations Blocks",
  },
  interfaceName: "OurLocationsBlock",
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
      name: "locations",
      type: "array",
      label: "Locations",
      fields: [
        {
          name: "locationTitle",
          type: "text",
          label: "Location Title",
        },
        {
          name: "address",
          type: "text",
          label: "Address",
        },
        {
          name: "phoneNumber",
          type: "text",
          label: "Phone Number",
        },
        {
          name: "email",
          type: "email",
          label: "Email Address",
        },
      ],
    },
  ],
}
