export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: 'Introducing 3.0!',
    date: '24-02-27',
  },
  {
    title: 'Introducing 2.0!',
    date: '23-12-15',
  },
] satisfies Post[];
