export interface DocsMenuItem {
  title: string;
  href: string;
  icon: string;
  description?: string;
}

export interface DocsPopover {
  type: "popover";
  title: string;
  children: DocsMenuItem[];
}

export interface DocsLink {
  type: "link";
  title: string;
  href: string;
}

export type DocsHeaderItem = DocsPopover | DocsLink;

export interface Docs {
  index: {
    content: string;
    href: string;
  }[];

  header: DocsHeaderItem[];
}

const docs: Docs = {
  index: [
    {
      content: "Getting Started",
      href: "/docs/getting-started",
    },
    {
      content: "Why Zely?",
      href: "/docs/why-zely",
    },
  ],

  header: [
    {
      title: "Docs",
      type: "popover",
      children: [
        {
          title: "Docs",
          href: "/docs/overview",
          description: "Learn about Zely and its core concepts.",
          icon: "ri-book-open-line",
        },
        {
          title: "Apis",
          href: "/apis/javascript-api",
          description: "Explore the Zely JavaScript API.",
          icon: "ri-book-open-line",
        },
        {
          title: "Contribute",
          href: "/docs/contributing",
          description: "Learn how to contribute to Zely.",
          icon: "ri-sticky-note-line",
        },
      ],
    },
    {
      title: "Plugins",
      type: "popover",
      children: [
        {
          title: "Plugin",
          href: "/plugins/overview",
          description: "Learn about the Zely plugin system.",
          icon: "ri-puzzle-line",
        },
        {
          title: "Loader",
          href: "/plugins/create-loader",
          description: "Learn how to create a custom loader.",
          icon: "ri-loader-2-line",
        },
      ],
    },
    {
      title: "Ecosystem",
      type: "popover",
      children: [
        {
          title: "Serpack",
          href: "/serpack/introduction",
          description: "TypeScript/JavaScript Compiler",
          icon: "ri-instance-line",
        },
        {
          title: "Senta",
          href: "https://github.com/zely-js/senta",
          description: "HTTP server engine",
          icon: "ri-instance-line",
        },
      ],
    },
    {
      title: "Versions",
      type: "popover",
      children: [
        {
          title: "v3",
          href: "https://github.com/zely-js/zely/tree/zely3",
          description: "Zely v3 documentation (deprecated).",
          icon: "ri-sticky-note-line",
        },
        {
          title: "v2",
          href: "https://zely2.netlify.app/",
          description: "Zely v2 documentation.",
          icon: "ri-sticky-note-line",
        },
        {
          title: "v1",
          href: "https://zely.netlify.app/",
          description: "Zely v1 documentation.",
          icon: "ri-sticky-note-line",
        },
        {
          title: "Changelog",
          href: "https://github.com/zely-js/zely/blob/zely3/CHANGELOG.md",
          description: "Changelog of Zely.",
          icon: "ri-book-open-line",
        },
      ],
    },
    {
      title: "Blog",
      type: "link",
      href: "/blog",
    },
  ],
};

export default docs;
