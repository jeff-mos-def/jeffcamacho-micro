---
title: "Starting things again, simple and compact."
description: "Setting the tone for the new space."
date: "2024-11-12"
#linkedProject: "/projects/liauto"
draft: false
---

I'm kicking this site off, yet again, under a much more simplified tone.

This site is undergoing yet another reboot, this time with a focus on simplicity and flexibility.

Previously, I was using [Quartz](https://quartz.jzhao.xyz/) to manage and publish my content. Quartz is a great tool, offering features like Markdown-based workflows, graph views, and Obsidian integration. It’s an excellent choice for anyone looking to create a knowledge repository or personal wiki. However, I’ve decided to shift to Astro for a few key reasons:

- **Ease of Use:** Astro provides a straightforward development experience while allowing me to customize as much or as little as I need.
- **Component Design Options:** With Astro, I can take advantage of a broader range of tools and integrations to create a more dynamic site.
- **Performance and Flexibility:** Astro’s server-first approach ensures faster load times and offers more control over how the site functions and evolves.
- **Overall Simplicity:** Quartz's format and use was too... complex for what I wanted. I ended up creating a web of knowledge and focused on that rather than my overall content.

As stated before, I had been hosting my personal site on [Google Sites](https://sites.google.com/), then to a [Jekyll](https://jekyllrb.com/) design, and next to Quartz. It worked for what I needed at the time, but I’ve decided to move to something that offers more flexibility and control. The new site is built with [Astro](https://astro.build/) and hosted on [Netlify](https://www.netlify.com/), providing the tools needed to support what I’m focusing on now.

This site is about building in public. I’ll be sharing updates on what I’m working on, how projects are progressing, and the steps I’m taking to bring ideas to life. By using Astro, I have more room to experiment and adapt as things change. Netlify ensures that the site remains reliable while accommodating the demands of an evolving project.

The posts here will highlight progress, process, and exploration. This approach allows me to document the work as it happens without trying to fit everything into a polished or finalized format.

So what does this mean? As part of the move to Astro, I’ve added a few components and configurations to make the site more functional and dynamic. These updates are designed to improve usability and create a more interactive experience.

- **Giscus: Embedded Comments**
  - One of the first features I’ve added is Giscus, an embedded comment system powered by GitHub Discussions. This allows visitors to leave comments or engage in discussions directly on specific pages of the site. It’s lightweight, integrates seamlessly, and matches the site’s overall design.

- **StatusBadge: Dynamic Status Labels**
  - To track and display the progress of tasks and projects, I’ve included the StatusBadge component. This badge dynamically updates to reflect the status of an item—whether it’s "To Do," "Doing," "Done," or "OBE" (Overcome by Events). Each status is color-coded for clarity and adjusts for light or dark mode automatically.

- **Configurations for Content Management**
  - The site also includes a well-structured configuration file, config.ts, to manage content efficiently. Here’s what it supports:

    - **Work Experience:** Tracks companies, roles, and timelines for professional experience.
    - **Education:** Organizes educational background, certifications, and priorities with optional fields like GPA and graduation dates.
    - **Blog Posts:** Handles metadata like titles, descriptions, and dates, while supporting features such as draft posts or linking posts to projects.
    - **Projects:** Keeps details like project descriptions, start and end dates, demo or repository links, and status.

This configuration ensures that every piece of content on the site is consistent and easy to update, making it simpler to manage over time.

Lots to take in! But, I’m looking forward to seeing how this develops over time. For those interested, feel free to follow along and see where it goes.

- Jeff