import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = { blog };
