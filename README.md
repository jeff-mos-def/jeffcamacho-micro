# Oh, hey. It's my new site.

# jeffcamacho.com, where I come to brain dump and talk about stuff.

A minimalist personal website template built with Astro. Forked from [Mark Horn's](https://github.com/markhorn-dev) [Astro Nano](https://astro-nano-demo.vercel.app/) theme, enhanced with additional features while maintaining its lightweight core.

---

## 🚀 Features

### Core Features (from Nano)
- Full TypeScript support
- Automatic sitemap generation
- RSS feed
- Markdown & MDX support
- TailwindCSS styling
- System, light, and dark theme support

### Enhanced Features
- [Pagefind](https://pagefind.app) integration for site search
- [Giscus](https://giscus.app) comments system
- Lightbox for images
- Dynamic status badges for project tracking
- Comprehensive content management system

---

## 📦 Content Management

The site uses a structured configuration system (`config.ts`) to manage:
- Work experience
- Educational background
- Blog posts
- Project portfolios

Each content type supports various metadata fields and optional features like:
- Draft status
- Project linking
- Timeline tracking
- Status indicators

---

## 💻 Development Features

### Status Badges
- Color-coded status indicators
- Automatic light/dark mode adjustment
- Status options: "To Do," "Doing," "Done," "OBE" (Overcome by Events)

### Image Handling
- Built-in lightbox for image galleries
- Shield.io badge support
- Responsive image optimization

---

## 🛠 Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

---

## ⚙️ Configuration

1. Update site settings in `src/consts.ts`
2. Configure content types in `src/config.ts`
3. Customize themes in `tailwind.config.cjs`

---

## 📝 Content Creation

### Blog Posts
```markdown
---
title: "Your Post Title"
description: "Post description"
date: "YYYY-MM-DD"
linkedProject: "/projects/project-slug"  # optional
draft: false
---
```

### Projects
```markdown
---
title: "Project Title"
description: "Project description"
startDate: "YYYY-MM-DD"
endDate: "YYYY-MM-DD"
demoURL: "https://demo-url"  # optional
repoURL: "https://repo-url"  # optional
draft: false
---
```

---

## 🎨 Styling

The template uses TailwindCSS for styling with:
- Responsive design
- Dark/light mode support
- Custom component themes
- Accessible color schemes

---

## 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts
- Optimized for all screen sizes

---

## 🔍 SEO

- Automated meta tags
- Sitemap generation
- RSS feed
- Structured data

---

## 📄 License

MIT License - feel free to modify and reuse this template for your own projects.

---

## 🙏 Acknowledgments

- Based on [Astro Nano](https://astro-nano-demo.vercel.app/) by [Mark Horn](https://github.com/markhorn-dev)
- Enhanced with additional features while maintaining the original minimalist approach
- My patience for sweating through this.