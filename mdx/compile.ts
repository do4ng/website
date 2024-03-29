import { compile, CompileOptions } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

import fs from 'fs';
import { join } from 'path';
import { getHighlighter } from 'shiki';

import Theme from 'shiki/themes/material-theme-palenight.json';

// import { plugin } from './plugins/anchor';

const touched = { current: false };

// https://github.com/memos-pub/memos.pub/blob/dd4933e511fd605ac4aaad38e4ea03ef151794ba/lib/mdx/plugins/code.ts

const getShikiPath = (): string => join(process.cwd(), 'shiki');

const touchShikiPath = (): void => {
  if (touched.current) return;
  fs.readdir(getShikiPath(), () => {});
  touched.current = true;
};

export async function highlighter() {
  touchShikiPath();
  const highlighter = await getHighlighter({
    paths: {
      themes:
        typeof window !== 'undefined'
          ? 'https://cdn.jsdelivr.net/npm/shiki@latest/themes/'
          : join(process.cwd(), 'shiki/themes'),
      languages:
        typeof window !== 'undefined'
          ? 'https://cdn.jsdelivr.net/npm/shiki@latest/languages/'
          : join(process.cwd(), 'shiki/languages'),
    },
  });

  return highlighter;
}

export const compileMdx = async (content: string): Promise<string> => {
  if (typeof window !== 'undefined') throw Error('compileMdx should run on server only');

  const options: CompileOptions = {
    format: 'mdx',
    outputFormat: 'function-body',
    remarkPlugins: [remarkGfm],
    development: false,
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: Theme,
          keepBackground: false,
          getHighlighter: async (options: any) => {
            touchShikiPath();
            const highlighter = await getHighlighter({
              ...options,

              paths: {
                themes:
                  typeof window !== 'undefined'
                    ? 'https://cdn.jsdelivr.net/npm/shiki@latest/themes/'
                    : join(process.cwd(), 'shiki/themes'),
                languages:
                  typeof window !== 'undefined'
                    ? 'https://cdn.jsdelivr.net/npm/shiki@latest/languages/'
                    : join(process.cwd(), 'shiki/languages'),
              },
            });

            return highlighter;
          },
        },
      ],
      // raw,
    ],
  };

  const code = await compile(content, options);

  const text = String(code);

  return text;
};
