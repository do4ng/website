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
          { config: 'Config References' },
          { v3: 'v3.0' },
        ],
      },
      {
        name: 'Routing',
        posts: [
          { routing: 'Routing' },
          { methods: 'Methods' },
          {
            'send-data': 'Sending Data',
          },
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
        posts: [{ middleware: 'Middleware' }, { auto: 'Auto Importing' }],
      },

      {
        name: 'Migration',
        hidden: true,
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
    ],
  },

  {
    title: 'apis',
    category: [
      {
        name: 'CLI',
        posts: [{ cli: 'cli' }, { init: 'init' }, { start: 'start' }, { dev: 'dev' }],
      },

      {
        name: 'Javascript API',
        posts: [
          { 'javascript-api': 'Javascript API' },
          { config: 'Config' },
          { 'create-server': 'Create Server' },
          { 'virtual-page': 'Virtual Pages' },
        ],
      },
      {
        name: 'Packages',
        posts: [
          { packages: 'Packages' },
          { 'zely-js-cli': 'zely-cli' },
          { 'zely-js': '@zely-js/zely' },
          { 'zely-js-core': '@zely-js/core' },
          { 'zely-js-loader': '@zely-js/loader' },
          { 'zely-js-reporter': '@zely-js/reporter' },
          { 'zely-js-logger': '@zely-js/logger' },
          { 'zely-js-watch': '@zely-js/watch' },
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
        posts: [
          { 'create-plugin': 'Create Plugin' },
          { 'create-loader': 'Create Loader' },
        ],
      },
    ],
  },
] as Config[];
