import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jeffcamacho.com", // Your actual website URL
  integrations: [
    tailwind(),
    sitemap(), // Generates your sitemap automatically
    mdx(),
    pagefind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
