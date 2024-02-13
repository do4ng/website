export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
  hidden?: boolean;
}

export interface Config {
  title: string;
  category: Category[];
  directory?: string;
}

export default [
  {
    title: 'docs',
    category: [
      {
        name: 'Overview',
        posts: [
          { overview: 'Overview' },
          { 'why-zely': 'Why Zely' },
          { 'getting-started': 'Getting Started' },
          { v3: 'v3.0' },
        ],
      },
      {
        name: 'Routing',
        posts: [
          { routing: 'Routing' },
          { methods: 'Methods' },
          { context: 'Context' },
          { 'page-data': 'Page Data' },
          {
            'customizing-response': 'Customizing Response',
          },
          {
            'data-fetching': 'Data Fetching',
          },
        ],
      },
      {
        name: 'Middleware',
        posts: [{ middleware: 'Middleware' }, { auto: 'Auto Mode' }],
      },
      {
        name: 'Migration',
        posts: [{ migration: 'Migration' }, { 'migration-2x': 'Migration from 2.x' }],
      },
      {
        name: 'Community',
        posts: [
          { community: 'Community' },
          { contributing: 'Contributing' },
          { playground: 'Playground' },
        ],
      },

      {
        name: 'Build',
        hidden: true,
        posts: [
          { build: 'Build' },
          { 'zely-build': 'zely/build' },
          { 'zely-builder': '@zely/builder' },
        ],
      },
    ],
  },
  {
    title: 'plugins',
    category: [
      {
        name: 'Overview',
        posts: [{ overview: 'Overview' }, { installation: 'Installation' }],
      },
      {
        name: 'Plugins',
        posts: [{ cors: '@zely/plugin-cors' }],
      },
      {
        name: 'Custom',
        posts: [{ 'create-plugin': 'Create Plugin' }],
      },
    ],
  },
] as Config[];
