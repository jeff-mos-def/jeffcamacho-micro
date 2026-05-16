import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";
import rehypeMermaid from "rehype-mermaid";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jeffcamacho.com",
  integrations: [
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
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@vite/env": "/node_modules/vite/dist/client/env.mjs"
      }
    },
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