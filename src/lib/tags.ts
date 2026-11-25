// The blog's tag taxonomy. Every post's `tags` must use slugs from this list;
// content.config.ts enforces it, so a typo or a one-off tag fails the build
// instead of quietly adding another tag page.

export const TAGS = [
  {
    slug: "project-management",
    label: "Project Management",
    description: "Budgets, governance, tooling, risk, and the craft of delivering projects.",
  },
  {
    slug: "agile",
    label: "Agile & SAFe",
    description: "Scrum, Kanban, scaled agile, and the roles that make them work.",
  },
  {
    slug: "product",
    label: "Product & Discovery",
    description: "Requirements, roadmaps, prioritization, and figuring out what to build.",
  },
  {
    slug: "systems",
    label: "Systems & Process",
    description: "Incentives, flow, automation, and why the system shapes the outcome.",
  },
  {
    slug: "career",
    label: "Career & Leadership",
    description: "Growth, mentorship, leading people, and navigating the job market.",
  },
  {
    slug: "pmp",
    label: "PMP Journey",
    description: "Studying for, passing, and maintaining the PMP certification.",
  },
  {
    slug: "builds",
    label: "Builds & Gear",
    description: "Side projects, hardware builds, and the tools on the desk.",
  },
  {
    slug: "site-updates",
    label: "Site Updates",
    description: "Changelogs and build notes for this site.",
  },
  {
    slug: "community",
    label: "Veterans & Community",
    description: "Volunteering with veterans, service members, and military spouses.",
  },
  {
    slug: "personal",
    label: "Personal",
    description: "Family, reflections, and life outside of work.",
  },
] as const;

export type TagSlug = (typeof TAGS)[number]["slug"];

export const TAG_SLUGS = TAGS.map((t) => t.slug) as [TagSlug, ...TagSlug[]];

const BY_SLUG = new Map<string, (typeof TAGS)[number]>(TAGS.map((t) => [t.slug, t]));

export function tagLabel(slug: string): string {
  return BY_SLUG.get(slug)?.label ?? slug;
}

export function tagDescription(slug: string): string {
  return BY_SLUG.get(slug)?.description ?? "";
}

// Position in the taxonomy, used to keep tag lists in a stable order.
export function tagOrder(slug: string): number {
  const i = TAGS.findIndex((t) => t.slug === slug);
  return i === -1 ? TAGS.length : i;
}
