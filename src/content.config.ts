import { defineCollection, z } from 'astro:content'

const activitiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['deportivo', 'evento', 'cultural']),
    subcategory: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
})

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      tags: z.array(z.string()),
    }),
  }),
  actividades: activitiesCollection,
}