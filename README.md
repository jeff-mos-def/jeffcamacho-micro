# Oh, hey. It's my new site.

# jeffcamacho.com, where I come to brain dump and talk about stuff.

**Railhead** is the theme behind jeffcamacho.com: a personal site, portfolio, and blog built with Astro. Writing, projects, work history, and credentials all live in Markdown and MDX content collections, and the whole site builds to static files.

---

## 🚀 Features

### Pages
- **Home:** a transit-style career line built from the Work collection, latest writing, a topic list, recent projects, credentials, and contact links
- **Blog:** posts grouped by year and month, with an archive sidebar and a topic filter
- **Posts and projects:** a table of contents sidebar and Giscus comments, with links to the newer and older post at the end of each blog post
- **Topics:** a page for every tag, plus a topic directory at `/tags`
- **Projects:** grouped by status (To Do, Doing, Done, OBE, Backlog) with a status filter
- **Work:** a timeline of work, entrepreneurial, and volunteer experience
- **Education:** degrees, certifications, and certificates, with expired certifications labeled

### Site-wide
- [Pagefind](https://pagefind.app) search, opened from the header, the `/` key, or Ctrl+K
- Light, dark, and system themes
- RSS feed at `/rss.xml` and an automatic sitemap
- Canonical URLs plus Open Graph and Twitter card meta tags
- Client-side page transitions with Astro's `ClientRouter`
- Image lightbox on posts and projects
- Mermaid diagrams rendered to SVG at build time
- Copy buttons on code blocks

### Interactive components
MDX posts can embed the components in `src/components`, including roadmap timelines and boards, WSJF calculators, an LPM portfolio board, Chart.js charts, galleries, and slide decks. Data for several of them lives in `src/data`.

---

## 🧱 Stack

- [Astro](https://astro.build) 7, with MDX, React, and sitemap integrations
- [Tailwind CSS](https://tailwindcss.com) 4 with the typography plugin
- [Pagefind](https://pagefind.app) for static search
- [rehype-mermaid](https://github.com/remcohaszing/rehype-mermaid) with Playwright Chromium for diagrams
- Shiki syntax highlighting using the `css-variables` theme
- Fonts: Archivo (headings and interface), Source Serif 4 (reading text), Geist Mono (code)

---

## 🛠 Getting Started

Astro 7 requires Node.js 22.23.4 or newer.

1. Clone the repository
```bash
git clone https://github.com/jeff-mos-def/jeffcamacho-micro.git
cd jeffcamacho-micro
```

2. Install dependencies, plus the Chromium build that Mermaid rendering needs
```bash
npm install
npx playwright install chromium
```

3. Start the development server
```bash
npm run dev
```

4. Build for production (type check, Astro build, then the Pagefind index)
```bash
npm run build
```

5. Preview the production build
```bash
npm run preview
```

### Search during development
`npm run dev` serves search from `public/pagefind`. To search your real content locally, build once and write the index there:
```bash
npm run build
npx pagefind --site dist --output-path public/pagefind
```
Run it again whenever you want search to catch up. `public/pagefind/` is generated, so keep it out of git.

---

## 📁 Project Structure

```
src/
├── components/         UI and MDX components
├── content/
│   ├── blog/           one folder per post (index.md or index.mdx)
│   ├── projects/       one folder per project
│   ├── work/           one file per role
│   └── education/      one file per degree, certification, or certificate
├── data/               JSON used by interactive components
├── layouts/            page layout
├── lib/tags.ts         the blog's tag taxonomy
├── pages/              routes
├── styles/global.css   colors, type, and prose styles
├── consts.ts           site settings and social links
└── content.config.ts   content collection schemas
public/img/             images referenced by posts and projects
wrangler.jsonc          Cloudflare Workers deployment
netlify.toml            Netlify build settings
```

---

## ⚙️ Configuration

- **`src/consts.ts`:** site title, description, email, how many posts and projects show on the home page, page titles, and social links
- **`src/content.config.ts`:** front matter schemas for every collection
- **`src/lib/tags.ts`:** the allowed blog tags, with their labels and descriptions
- **`src/styles/global.css`:** light and dark color tokens, fonts, and prose styling
- **`astro.config.mjs`:** site URL, integrations, and the Markdown pipeline

---

## 🏷 Tags

Blog tags come from a fixed list in `src/lib/tags.ts`. The content schema only accepts those slugs, so a typo or an unlisted tag fails the build instead of creating a new tag page. To add a topic, add it to that list first.

| Slug | Label |
| --- | --- |
| `project-management` | Project Management |
| `agile` | Agile & SAFe |
| `product` | Product & Discovery |
| `systems` | Systems & Process |
| `career` | Career & Leadership |
| `pmp` | PMP Journey |
| `builds` | Builds & Gear |
| `site-updates` | Site Updates |
| `community` | Veterans & Community |
| `personal` | Personal |

---

## 📝 Content Creation

### Blog posts
`src/content/blog/<folder>/index.md` or `index.mdx`
```markdown
---
title: "Your Post Title"
description: "Post description"
date: "YYYY-MM-DD"
tags: ["project-management", "agile"]
linkedProject: "/projects/project-slug"  # optional
projectBoard: "https://github.com/..."    # optional
draft: false                              # optional
---
```

### Projects
`src/content/projects/<folder>/index.md` or `index.mdx`
```markdown
---
title: "Project Title"
description: "Project description"
date: "YYYY-MM-DD"                 # optional
startDate: "YYYY-MM-DD"
endDate: "YYYY-MM-DD"              # optional, or "TBD"
status: "Doing"                    # To Do, Doing, Done, OBE, or Backlog
demoURL: "https://demo-url"        # optional
repoURL: "https://repo-url"        # optional
draft: false                       # optional
---
```

### Work
`src/content/work/<name>.md`
```markdown
---
company: "Company Name"
role: "Role Title"
dateStart: YYYY-MM-DD
dateEnd: YYYY-MM-DD                # or Current
type: work                         # work, entrepreneurial, or volunteer
---
```

### Education and certifications
`src/content/education/<name>.md`
```markdown
---
institution: "Institution Name"
degree: "Degree or Certification Name"
field: "Field"
type: "certification"              # education, certification, or certificate
dateStart: YYYY                    # optional
dateEnd: YYYY                      # optional, or "Current"
priority: 1                        # optional, sort order for certifications
gpa: 4.0                           # optional
expired: true                      # optional, labels it on the Education page and hides it from the home page
---
```

---

## 🚢 Deployment

### Cloudflare Workers
`wrangler.jsonc` deploys the built `dist` folder as static assets under the Worker name `railhead`, and serves `404.html` for missing pages. The Worker name in the Cloudflare dashboard has to match the `name` in `wrangler.jsonc`.

- **Build command:** `npx playwright install chromium && npm run build`
- **Deploy command:** `npx wrangler deploy`

### Netlify
`netlify.toml` holds the Netlify build command, publish folder, and Node version.

---

## 📄 License

MIT. See [LICENSE](LICENSE).

---

## 🙏 Acknowledgments

- My patience for sweating through this.
