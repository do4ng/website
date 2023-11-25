import { Category } from '@/docs/config';

export default [
  {
    name: 'Overview',
    posts: [{ plugins: 'Plugins' }, { installation: 'Installation' }],
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
