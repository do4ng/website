/* eslint-disable no-use-before-define */

import React from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';

import './style.scss';

import config from '@/blog/config';
import { compileMdx } from '@/mdx/compile';
import { Content } from '@/mdx/content';

export async function generateStaticParams() {
  const pages = [];

  pages.push(config.map(({ date }) => ({ slug: date })));

  return pages;
}

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  let target = null;

  config.forEach((post) => {
    if (post.date === params.slug) {
      target = post;
    }
  });

  let raw: string = '';

  /*
  const raw = readFileSync(
    join(
      process.cwd(),
      'docs',
      (targetcategory || '').toLowerCase(),
      `${Object.keys(target as any)[0]}.mdx`,
    ),
  );
  */

  if (process.env.NODE_ENV === 'development') {
    raw = readFileSync(join(process.cwd(), 'blog', `${target.date}.mdx`)).toString();
  } else {
    const res = await fetch(
      `https://raw.githubusercontent.com/zely-js/website/main/frontend/blog/${target.date}.mdx`,
      { cache: 'force-cache' },
    );
    raw = await res.text();
  }

  const compiled = await compileMdx(raw);

  return (
    <>
      <title>{`${target.title} - zely`}</title>

      <div className="blog">
        <div className="intro">
          <h1>{target.title}</h1>
          <span>do4ng - {target.date}</span>
        </div>
        <div className="content-container">
          <Content content={compiled}></Content>
        </div>
      </div>
    </>
  );
}
