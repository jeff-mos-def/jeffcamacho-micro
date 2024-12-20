import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),  // Allows coercion for full dates
    dateEnd: z.union([z.coerce.date(), z.number(), z.literal('Current')]),  // Supports dates, years, and "Current"
    type: z.enum(['work', 'entrepreneurial', 'volunteer']),  // Categorization field
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
    type: z.enum(['education', 'certification', 'certificate']), // Added 'certificate'
    gpa: z.number().optional(),
    priority: z.number().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    linkedProject: z.string().optional(), // Optional field to link a blog post to a project
    projectBoard: z.string().optional(), // Optional field to link a blog post to a GitHub Project Board
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.literal('TBD')]).optional(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    status: z.enum(['To Do', 'Doing', 'Done', 'OBE', 'Backlog']).default('To Do'),
  }),
});

export const collections = { work, blog, projects, education };
