import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),  // Changed to handle date coercion
    dateEnd: z.union([z.coerce.date(), z.literal('Current'), z.literal('Now'), z.literal('Present')]),  // Handle both dates and "Current"
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    dateStart: z.number().optional(),
    dateEnd: z.union([z.number(), z.literal('Current'), z.literal('Expected 2024')]).optional(),
    type: z.enum(['education', 'certification']),
    gpa: z.number().optional(),
    priority: z.number().optional(),  // Add this line
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    status: z.enum(['To Do', 'Doing', 'Done', 'OBE']).default('To Do'), // Added status field
  }),
});

export const collections = { work, blog, projects, education };
