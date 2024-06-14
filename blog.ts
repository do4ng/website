export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: 'Future of zely',
    date: '24-06-13',
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
