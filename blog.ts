export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: '@zely-js/optimizer for Static Data!',
    date: '25-04-28',
  },
  {
    title: 'Introducing 4.0!',
    date: '25-03-17',
  },
  {
    title: 'New Compiler',
    date: '25-01-13',
  },
  {
    title: 'Breaking Change: zely@4!',
    date: '24-12-01',
  },
  {
    title: 'Introducing 3.0!',
    date: '24-02-27',
  },
  {
    title: 'Introducing 2.0!',
    date: '23-12-15',
  },
] satisfies Post[];
