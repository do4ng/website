export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
  hidden?: boolean;
}

export interface Config {
  title: string;
  icon?: string;
  category: Category[];
  directory?: string;
  target: string;
}

export default [
  {
    title: 'docs',
    icon: 'book-open-line',
    target: 'overview',
    category: [
      {
        name: 'Overview',
        posts: [
          { overview: 'Overview' },
          { 'why-zely': 'Why Zely' },
          { 'getting-started': 'Getting Started' },
          { config: 'Config References' },
        ],
      },
      {
        name: 'Routing',
        posts: [
          { routing: 'Routing' },
          { handler: 'Handler' },
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
        posts: [
          { middleware: 'Middleware' },
          { auto: 'Auto Importing' },
          { 'provided-middlewares': 'Provided Middlewares' },
        ],
      },

      {
        hidden: true,
        name: 'Frontend',
        posts: [{ frontend: 'Frontend' }, { html: 'HTML' }],
      },
      {
        hidden: true,
        name: 'Devtools',
        posts: [{ devtools: 'Devtools' }, { 'setup-devtools': 'Setup Devtools' }],
      },
      {
        name: 'Migration',
        hidden: true,
        posts: [
          { migration: 'Migration' },
          { 'migration-3x': 'Migration from 3.x' },
          { 'migration-2x': 'Migration from 2.x' },
        ],
      },
      {
        name: 'Community',
        hidden: true,
        posts: [
          { community: 'Community' },
          { contributing: 'Contributing' },
          { playground: 'Playground' },
        ],
      },
    ],
  },

  /*
  {
    title: 'guide',
    target: 'overview',

    icon: 'folder-line',
    category: [
      {
        name: 'Overview',
        posts: [{ overview: 'Overview' }, { 'create-app': 'Create App' }],
      },
      {
        name: 'Examples',
        posts: [{ examples: 'Examples' }, { 'hello-world': 'Hello, World!' }],
      },
    ],
  },
 */
  {
    title: 'apis',
    target: 'javascript-api',

    icon: 'route-line',
    category: [
      {
        name: 'CLI',
        posts: [
          { cli: 'cli' },
          { dev: 'Developement Mode' },
          { build: 'Build Server' },
          { init: 'Init Project' },
          { start: 'Production Mode' },
          { request: 'Fetch Pages' },
        ],
      },
      {
        name: 'Javascript API',
        posts: [
          { 'javascript-api': 'Javascript API' },
          { config: 'Config' },
          { 'create-server': 'Create Server' },
          { 'build-server': 'Build Server' },
          { 'virtual-page': 'Virtual Pages' },
        ],
      },

      {
        name: 'Structure',
        posts: [{ structure: 'Structure' }, { cache: 'Cache' }],
      },
      {
        name: 'Packages',
        posts: [
          { packages: 'Packages' },
          { senta: 'Senta' },
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
    target: 'overview',

    icon: 'puzzle-line',
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

  {
    title: 'serpack',
    target: 'introduction',
    icon: 'route-line',
    category: [
      {
        name: 'Overview',
        posts: [
          { introduction: 'Introduction' },
          { comparison: 'Comparison' },
          { serpackrc: '.serpackrc.js' },
        ],
      },
      {
        name: 'APIs',
        posts: [
          { compile: 'Compile' },
          { options: 'Compiler Options' },
          { runtime: 'serpack/runtime' },
          { sourcemap: 'Sourcemap' },
          { externals: 'Exclude node_modules' },
          { extension: 'Supported Extensions' },
        ],
      },
      {
        name: 'Plugin API',
        posts: [
          { 'plugin-guide': 'Plugin Guide' },
          { 'generate-d-ts': 'Generate .d.ts' },
        ],
      },
    ],
  },
] as Config[];
