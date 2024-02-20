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
        type: 'popover';
        title: string;
        children: Array<{
          title: string;
          href: string;
          icon: string;
          description?: string;
        }>;
      }
    | { title: string; href: string; type: 'link' }
  >;
}

export default {
  name: 'zelyjs',
  description: 'Build Productive,<br>Convenient, Fast Backend',
  index: [
    {
      content: 'Getting Started',
      href: '/docs/getting-started',
    },
    {
      content: 'Why Zely?',
      href: '/docs/why-zely',
    },
  ],
  header: [
    {
      title: 'Docs',
      type: 'popover',
      children: [
        {
          title: 'Installation',
          href: '/docs/getting-started',
          description: 'Start your fist app.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-guide-line',
        },
        {
          title: 'Docs',
          href: '/docs/overview',
          description: 'Learn all of information of package.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-book-open-line',
        },
      ],
    },

    {
      title: 'Plugins',
      type: 'popover',
      children: [
        {
          title: 'Plugin',
          href: '/plugins/overview',
          description: 'Learn about plugins.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-puzzle-line',
        },
        {
          title: 'Loader',
          href: '/plugins/create-loader',
          description: 'Learn how to create a loader.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-loader-2-line',
        },
      ],
    },

    {
      title: 'Community',
      type: 'popover',
      children: [
        {
          title: 'Contribute',
          href: '/docs/contributing',
          description: 'thank you for your contribution.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-sticky-note-line',
        },
        {
          title: 'Blog',
          href: '/blog',
          description: 'Our development blog',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-book-open-line',
        },
      ],
    },
    {
      title: 'v3',
      type: 'popover',
      children: [
        {
          title: 'v2',
          href: 'https://zely2.netlify.app/',
          description: 'zely v2 documentation.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-sticky-note-line',
        },
        {
          title: 'v1',
          href: 'https://zely.netlify.app/',
          description: 'zely v1 documentation.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-sticky-note-line',
        },
        {
          title: 'Changelog',
          href: 'https://github.com/zely-js/zely/blob/zely3/packages/zely/CHANGELOG.md',
          description: 'Changelog of zely v3.',
          // https://remixicon.com/icon/book-open-line
          icon: 'ri-book-open-line',
        },
      ],
    },
  ],
} as Docs;
