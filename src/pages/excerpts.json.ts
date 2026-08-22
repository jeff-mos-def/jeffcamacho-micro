import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const projects = (await getCollection("projects")).filter(
    (p) => !p.data.draft
  );

  const out = Object.fromEntries(
    projects.map((p) => [
      `/projects/${p.id}`,
      {
        title: p.data.title,
        excerpt: (p.body ?? "")
          .replace(/^---[\s\S]*?---/, "")
          .replace(/```[\s\S]*?```/g, "")
          .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, "$2$1")
          .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
          .replace(/[#>*_`]/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 200),
      },
    ])
  );

  return new Response(JSON.stringify(out), {
    headers: { "Content-Type": "application/json" },
  });
};