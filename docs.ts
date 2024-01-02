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
  ],
} as Docs;
