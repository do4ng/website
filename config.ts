export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
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
        name: 'Build',
        posts: [
          { build: 'Build' },
          { 'zely-build': 'zely/build' },
          { 'zely-builder': '@zely/builder' },
        ],
      },
      {
        name: 'Community',
        posts: [
          { community: 'Community' },
          { contributing: 'Contributing' },
          { playground: 'Playground' },
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
