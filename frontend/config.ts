interface Config {
  name: string;
  description: string;

  buttons: { text: string; href: string; icon?: string }[];

  nav: {
    type: 'items' | 'button';
    text: string;
    href?: string;
    items?: { href: string; text: string; icon: string; description: string }[];
  }[];
}

export default {
  name: 'doc-template',
  description: 'Build your docs easily',
  buttons: [
    {
      text: ' Getting Started',
      href: '/docs/getting-started',
    },
    { text: 'Markdown', href: '/docs/markdown' },
  ],

  nav: [
    {
      type: 'items',
      text: 'Docs',
    },
  ],
} satisfies Config;
