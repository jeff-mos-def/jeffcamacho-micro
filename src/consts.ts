import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jeff Camacho",
  DESCRIPTION: "Personal writing space of Jeff Camacho. All ideas are both complete and incomplete.",
  EMAIL: "jeff@jeffcamacho.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal writing space of Jeff Camacho.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  
  {
    NAME: "GitHub",
    HREF: "https://github.com/jeff-mos-def",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jeff-camacho",
  },
  {
    NAME: "BlueSky",
    HREF: "https://bsky.app/profile/jeff-mos-def.bsky.social",
  },
];
