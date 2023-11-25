/* eslint-disable no-use-before-define */
import { readFileSync } from 'fs';
import { join } from 'path';
import React from 'react';
import Link from 'next/link';
import config from '@/plugins/config';
import { compileMdx } from '@/mdx/compile';
import { Content } from '@/mdx/content';
import { TableOfContents } from '@/app/docs/[slug]/tableofcontents';

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  let target = null;
  let targetcategory = null;
  const posts = [];

  config.forEach((category) => {
    category.posts.forEach((post) => {
      posts.push(post);

      if (Object.keys(post)[0] === params.slug) {
        target = post;
        targetcategory = category.name;
      }
    });
  });

  let raw: string = '';

  if (process.env.NODE_ENV === 'development') {
    raw = readFileSync(
      join(
        process.cwd(),
        'docs',
        (targetcategory || '').toLowerCase(),
        `${Object.keys(target as any)[0]}.mdx`,
      ),
    ).toString();
  } else {
    const res = await fetch(
      `https://raw.githubusercontent.com/zely-js/website/main/frontend/docs/${(
        targetcategory || ''
      ).toLowerCase()}/${Object.keys(target as any)[0]}.mdx`,
      { cache: 'force-cache' },
    );
    raw = await res.text();
  }

  const compiled = await compileMdx(raw.toString());

  const postIndex = posts.findIndex((v) => Object.keys(v)[0] === params.slug);

  const previousPage = {
    url: Object.keys(posts[postIndex - 1] || {})[0],
    title: Object.values(posts[postIndex - 1] || {})[0],
  };

  const nextPage = {
    url: Object.keys(posts[postIndex + 1] || {})[0],
    title: Object.values(posts[postIndex + 1] || {})[0],
  };

  return (
    <>
      <div className="content-flex">
        <div className="post">
          <div className="intro">
            <h1>{Object.values(target as any)[0] as string}</h1>
          </div>
          <div className="content-container">
            <Content content={compiled}></Content>
          </div>
          <div className="prenext">
            {previousPage.title ? (
              <Link className="no-a" href={`/docs/${previousPage.url}`}>
                <h4>Previous Page</h4>

                <p>{previousPage.title as any}</p>
              </Link>
            ) : (
              <div></div>
            )}
            {nextPage.title ? (
              <Link className="no-a" href={`/docs/${nextPage.url}`}>
                <h4>Next Page</h4>
                <p>{nextPage.title as any}</p>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <TableOfContents></TableOfContents>
      </div>
    </>
  );
}
