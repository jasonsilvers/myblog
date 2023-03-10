import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d228a5de-f11f-4abe-b112-f588b8225f6a", // Get this from tina.io
  token: "be3457ab7e5552868379b26dd993f58e04371083", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/contents",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "datetime",
            name: "datetime",
            label: "DateTime",
            ui: {
              component: 'date',
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm'
            },
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            name: "tags",
            type: 'string',
            list: true,
            description: 'test',
            label: "Tags",
            ui: {
              component: 'tags'
            },
            required: true,
          },
          {
            type: "image",
            name: "ogImage",
            label: "ogImage",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ]
      },
    ],
  },
});
