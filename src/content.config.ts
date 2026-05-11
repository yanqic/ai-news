import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string().default('Anonymous'),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.enum(['news', 'github']).default('news'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  posts: postsCollection,
};
