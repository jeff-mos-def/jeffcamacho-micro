import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import rehypeMermaid from "rehype-mermaid";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jeffcamacho.com",
  integrations: [
    sitemap(),
    mdx(),
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
    processor: unified(),
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});