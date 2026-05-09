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
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional()
  })
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};
