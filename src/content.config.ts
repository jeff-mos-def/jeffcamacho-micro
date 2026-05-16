import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.number(), z.literal('Current')]),
    type: z.enum(['work', 'entrepreneurial', 'volunteer']),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/education" }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    dateStart: z.number().optional(),
    dateEnd: z.union([z.number(), z.literal('Current'), z.literal('Expected 2024')]).optional(),
    type: z.enum(['education', 'certification', 'certificate']),
    gpa: z.number().optional(),
    priority: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    linkedProject: z.string().optional(),
    projectBoard: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().default(new Date()),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.literal('TBD')]).optional(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    status: z.enum(['To Do', 'Doing', 'Done', 'OBE', 'Backlog']).default('To Do'),
  }),
});

export const collections = { work, blog, projects, education };