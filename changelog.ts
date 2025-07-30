export interface Change {
  version: string;
  target: string;
}

export default [
  { version: '4.0.0', target: ' July 31, 2025' },
  { version: '4.0.0-next.23', target: ' June 16, 2025' },
  {
    version: '4.0.0-next.9',
    target: 'January 20, 2025',
  },
  {
    version: '3.0.1',
    target: 'July 1, 2024',
  },
  {
    version: '3.0.0',
    target: 'March 31, 2024',
  },
  {
    version: '3.0.0-alpha.14',
    target: 'March 14, 2024',
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
