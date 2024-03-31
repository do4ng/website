import { compile, CompileOptions } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

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
          theme: {
            dark: 'material-theme-palenight',
            light: 'material-theme-lighter',
          },
          keepBackground: false,
        } as import('rehype-pretty-code').Options,
      ],
      // raw,
    ],
  };

  const code = await compile(content, options);

  const text = String(code);

  return text;
};
