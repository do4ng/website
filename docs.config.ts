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
      type: "link",
      href: "/docs/overview",
    },
    {
      title: "Apis",
      type: "link",
      href: "/apis/javascript-api",
    },
    {
      title: "Contribute",
      type: "link",
      href: "/docs/contributing",
    },
    {
      title: "Plugin",
      type: "link",
      href: "/plugins/overview",
    },
    {
      title: "Loader",
      type: "link",
      href: "/plugins/create-loader",
    },
    {
      title: "Serpack",
      type: "link",
      href: "/serpack/introduction",
    },
    {
      title: "Senta",
      type: "link",
      href: "https://github.com/zely-js/senta",
    },
    {
      title: "v3",
      type: "link",
      href: "https://github.com/zely-js/zely/tree/zely3",
    },
    {
      title: "v2",
      type: "link",
      href: "https://zely2.netlify.app/",
    },
    {
      title: "v1",
      type: "link",
      href: "https://zely.netlify.app/",
    },
    {
      title: "Changelog",
      type: "link",
      href: "https://github.com/zely-js/zely/blob/zely3/CHANGELOG.md",
    },
    {
      title: "Blog",
      type: "link",
      href: "/blog",
    },
  ],
};

export default docs;
