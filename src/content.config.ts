import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/data/projects', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(), // Using z.date() directly if coerce was causing hints
    image: image().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
