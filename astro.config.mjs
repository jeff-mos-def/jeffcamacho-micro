import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jeffcamacho.com",
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    pagefind(),
    react(),
  ],
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
    shikiConfig: {
      theme: "css-variables",
    },
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg" }]],
  },
  vite: {
    optimizeDeps: {
      exclude: ["astro:content-layer-deferred-module"]
    }
  },
  build: {
    rollupOptions: {
      external: ["astro:content-layer-deferred-module"]
    }
  }
});