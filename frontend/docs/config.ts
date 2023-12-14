export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
}

export default [
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
] satisfies Category[];
