export type BlogCategory =
  | "Architecture"
  | "Release"
  | "Engineering"
  | "Tutorial";

export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  category: BlogCategory;
  date: string;

  /** Optional explicit slug. Blog pages currently use `date` as the slug. */
  slug?: string;
  tags?: string[];
  author?: BlogAuthor;
  readTime?: string;
  pinned?: boolean;
  featured?: boolean;
}

export type Post = BlogPost;

const blogPosts: BlogPost[] = [
  {
    title: "Introduce new framework",
    date: "25-10-30",
    description:
      "Introducing a new framework designed to simplify modern web development.",
    category: "Engineering",
  },
  {
    title: "Why file-based routing?",
    date: "25-09-15",
    description:
      "Exploring the benefits of file-based routing and how it improves developer experience.",
    category: "Architecture",
  },
  {
    title: "Introducing 4.0!",
    date: "25-06-22",
    description:
      "A new major release with improved features, performance, and developer experience.",
    category: "Release",
  },
  {
    title: "Serpack v0.1.31",
    date: "25-06-07",
    description: "Introducing new improvements and updates in Serpack v0.1.31.",
    category: "Release",
  },
  {
    title: "New Compiler",
    date: "25-01-13",
    description:
      "Introducing a new compiler architecture for faster and more efficient code transformation.",
    category: "Engineering",
  },
  {
    title: "Breaking Change: zely@4!",
    date: "24-12-01",
    description:
      "A major update to Zely 4, bringing significant changes to its API and internal architecture.",
    category: "Release",
  },
  {
    title: "Introducing 3.0!",
    date: "24-02-27",
    description:
      "Zely 3.0 is here with new features, improvements, and a refreshed development experience.",
    category: "Release",
  },
  {
    title: "Introducing 2.0!",
    date: "23-12-15",
    description:
      "Introducing Zely 2.0 with a redesigned architecture and new capabilities.",
    category: "Release",
  },
];

export default blogPosts;
