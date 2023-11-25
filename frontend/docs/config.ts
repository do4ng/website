export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
}

export default [
  {
    name: 'Overview',
    posts: [{ 'why-zely': 'Why Zely' }, { 'getting-started': 'Getting Started' }],
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
    posts: [{ middleware: 'Middleware' }],
  },
  {
    name: 'Build',
    posts: [{ build: 'Build' }, { 'zely-builder': '@zely/builder' }],
  },
  {
    name: 'Community',
    posts: [{ contributing: 'Contributing' }, { playground: 'Playground' }],
  },
] satisfies Category[];
