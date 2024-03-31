export interface Change {
  version: string;
  target: string;
}

export default [
  {
    version: '3.0.0-alpha.14',
    target: 'March 31, 2024',
  },
  {
    version: '3.0.0-alpha.8',
    target: 'February 27, 2024',
  },
  {
    version: '2.0.0',
    target: 'December 15, 2023',
  },
] satisfies Change[];
