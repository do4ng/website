export interface Post {
  title: string;
  date: string;
}

export default [
  {
    title: "Introduce new framework",
    date: "25-10-30",
  },
  {
    title: "Why file-based routing?",
    date: "25-09-15",
  },
  {
    title: "Introducing 4.0!",
    date: "25-06-22",
  },
  {
    title: "Serpack v0.1.31",
    date: "25-06-07",
  },
  {
    title: "New Compiler",
    date: "25-01-13",
  },
  {
    title: "Breaking Change: zely@4!",
    date: "24-12-01",
  },
  {
    title: "Introducing 3.0!",
    date: "24-02-27",
  },
  {
    title: "Introducing 2.0!",
    date: "23-12-15",
  },
] satisfies Post[];
