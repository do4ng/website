export interface Docs {
  name: string;
  description: string;

  github: string;

  index: {
    content: string;
    href: string;
  }[];

  header: Array<
    | {
        type: "popover";
        title: string;
        children: Array<{
          title: string;
          href: string;
          icon: string;
          description?: string;
        }>;
      }
    | { title: string; href: string; type: "link" }
  >;
}

export default {
  name: "Zely",
  description:
    'Build <span class="gra ">Productive,<br>Convenient, Fast</span> Backend',
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
          description: "Learn all of information of package.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-book-open-line",
        },
        {
          title: "Apis",
          href: "/apis/javascript-api",
          description: "Learn all of information of package.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-book-open-line",
        },

        {
          title: "Contribute",
          href: "/docs/contributing",
          description: "thank you for your contribution.",
          // https://remixicon.com/icon/book-open-line
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
          description: "Learn about plugins.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-puzzle-line",
        },
        {
          title: "Loader",
          href: "/plugins/create-loader",
          description: "Learn how to create a loader.",
          // https://remixicon.com/icon/book-open-line
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
          // https://remixicon.com/icon/book-open-line
          icon: "ri-instance-line",
        },
        {
          title: "Senta",
          href: "https://github.com/zely-js/senta",
          description: "HTTP server engine",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-instance-line",
        },
      ],
    },
    {
      title: "v4.0.0",
      type: "popover",
      children: [
        {
          title: "v3",
          href: "https://github.com/zely-js/zely/tree/zely3",
          description: "v3 documentation is deprecated.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-sticky-note-line",
        },
        {
          title: "v2",
          href: "https://zely2.netlify.app/",
          description: "zely v2 documentation.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-sticky-note-line",
        },
        {
          title: "v1",
          href: "https://zely.netlify.app/",
          description: "zely v1 documentation.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-sticky-note-line",
        },
        {
          title: "Changelog",
          href: "https://github.com/zely-js/zely/blob/zely3/CHANGELOG.md",
          description: "Changelog of zely v4.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-book-open-line",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Our development blog",
      // https://remixicon.com/icon/book-open-line
      icon: "ri-book-open-line",
    },
  ],
} as Docs;
