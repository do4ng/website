import visit from 'unist-util-visit';
import type * as mdast from 'mdast';
import type * as unified from 'unified';
import toString from 'mdast-util-to-string';

export const plugin: unified.Plugin<[], mdast.Root> = () => (tree) => {
  visit(tree as any, 'heading', (node) => {
    const text = toString(node);

    console.log(text);

    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]/g, '');

    (node as any).type = 'html';
    (node as any).children = undefined;
    (node as any).value = `<h${
      (node as any).depth
    } id="${id}"><a href="#${id}">#</a>${text}</h${(node as any).depth}>`;
  });
};
