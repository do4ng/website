import { Category } from '@/docs/config';

export default [
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
] satisfies Category[];
