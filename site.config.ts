export interface SiteAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Brand name shown in the header and browser titles. */
  name: string;

  /** Small label displayed next to the brand name in the header. */
  badge?: string;

  /** Short description used by metadata generators such as llms.txt. */
  description: string;

  /** Canonical production URL, without a trailing slash. */
  url: string;

  /** Repository URL used by header links and documentation feedback links. */
  github?: string;

  /** Optional "What's new?" link shown in the header. */
  changelog?: {
    label: string;
    href: string;
  };

  /** Browser title configuration. */
  title: {
    /** Title used when a page does not provide its own title. */
    default: string;
    /** Template for page titles. `%s` is replaced with the page title. */
    template: string;
  };

  /** Home page hero copy and content source. */
  home: {
    /** Raw Markdown/MDX URL rendered below the hero. Omit to hide it. */
    readmeUrl?: string;
    badge?: string;
    /** Hero heading. HTML is allowed for highlighted words. */
    heading: string;
    description: string;
    actions: SiteLink[];
  };

  /** Copy used by the blog index. */
  blog: {
    title: string;
    badge: string;
    description: string;
    searchPlaceholder: string;
    /** Author used when a blog post does not define one. */
    defaultAuthor?: SiteAuthor;
  };

  /** Extra entries appended to the generated llms.txt "examples" section. */
  examples?: string[];
}

const site: SiteConfig = {
  name: "Zely",
  badge: "docs",
  description:
    "Zely is a lightweight TypeScript backend framework designed to build fast, scalable, and developer-friendly server applications.",
  url: "https://zely.netlify.app",
  github: "https://github.com/zely-js/zely",
  changelog: {
    label: "What's new?",
    href: "https://github.com/zely-js/zely/blob/zely3/CHANGELOG.md",
  },
  title: {
    default: "Zely",
    template: "%s - Zely",
  },
  home: {
    readmeUrl: "https://raw.githubusercontent.com/zely-js/zely/main/README.md",
    badge: "Modern TypeScript Backend",
    heading:
      'Build <br/><span class="gra">Fast, Flexible</span> <br/> Backend Applications',
    description:
      "Build modern backend applications with Zely, a lightweight TypeScript framework focused on performance, flexibility, and developer experience.",
    actions: [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Why Zely?", href: "/docs/why-zely" },
    ],
  },
  blog: {
    title: "Blog",
    badge: "Developer Blog",
    description:
      "Development updates, engineering insights, and release announcements from the Zely ecosystem.",
    searchPlaceholder: "Search articles...",
    defaultAuthor: { name: "do4ng", role: "Maintainer" },
  },
  examples: [
    "- [Zely repository](https://github.com/zely-js/zely): Explore the source code and development of Zely.",
    "- [Serpack](https://github.com/zely-js/serpack): A TypeScript/JavaScript compiler built for fast and flexible code transformation.",
    "- [Senta](https://github.com/zely-js/senta): An HTTP server engine for the Zely ecosystem.",
  ],
};

export default site;
