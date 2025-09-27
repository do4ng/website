/* eslint-disable import/no-named-default */
/* eslint-disable no-use-before-define */

import React from "react";
import { Head, Link } from "exta/components";
import { readFileSync } from "fs";
import { join } from "path";

import { Category, default as parents } from "@/config";
import { compileMdx } from "@/mdx/compile";
import ScrollTop from "@/lib/scrolltotop";
import { capitalizeFirstLetter } from "@/lib/up";
import { Content } from "@/mdx/content";
import { TableOfContents } from "../../../components/tableofcontents";
import { router } from "$exta-router";

export async function getStaticParams() {
  const pages = [];

  for (const parent of parents) {
    for (const category of parent.category) {
      for (const post of category.posts) {
        pages.push({ slug: Object.keys(post)[0], category: parent.title });
      }
    }
  }

  return pages;
}

export async function getStaticProps({ params }) {
  let target = null;
  let targetcategory = null;
  let targetcategoryobject = null;
  const posts = [];
  const categoryPosts = [];

  const config: { category: Category[]; directory: string } = {
    category: [],
    directory: "",
  };

  parents.forEach((parent) => {
    if (parent.title === params.category) {
      config.category = parent.category;
      config.directory = parent.directory || parent.title.toLowerCase();
    }
  });

  config.category.forEach((category) => {
    category.posts.forEach((post) => {
      posts.push(post);

      if (Object.keys(post)[0] === params.slug) {
        target = post;
        targetcategory = category.name;
        targetcategoryobject = category;
      }
    });
  });

  if (!target) {
    return <>Page not found</>;
  }

  let raw: string = "";

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

  raw = readFileSync(
    join(
      process.cwd(),
      config.directory,
      (targetcategory || "").toLowerCase(),
      `${Object.keys(target as any)[0]}.mdx`
    )
  ).toString();

  const compiled = await compileMdx(raw);

  return {
    compiled,
    posts,
    target,
    targetcategory,
    config,

    targetcategoryobject,
  };
}

export default function Page({
  params,
  props: {
    compiled,
    posts,
    target,
    targetcategory,
    config,
    targetcategoryobject,
  },
}: {
  params: { slug: string; category: string };
  props: {
    compiled: any;
    posts: any[];
    target: any;
    targetcategory: any;
    targetcategoryobject: { posts?: Record<string, string>[] };
    config;
  };
}) {
  const postIndex = posts.findIndex((v) => Object.keys(v)[0] === params.slug);

  const previousPage = {
    url: Object.keys(posts[postIndex - 1] || {})[0],
    title: Object.values(posts[postIndex - 1] || {})[0],
  };

  const nextPage = {
    url: Object.keys(posts[postIndex + 1] || {})[0],
    title: Object.values(posts[postIndex + 1] || {})[0],
  };

  const postName: string = Object.values(target as any)[0] as any;

  const directory = [params.category, (targetcategory || "").toLowerCase()];

  if (directory[1] !== postName.toLowerCase()) {
    directory.push(postName);
  }

  if (targetcategoryobject?.posts) {
    for (const preloadPost of targetcategoryobject.posts) {
      router.prefetch(
        `/${config.directory}/${Object.keys(preloadPost)[0]}`.toLowerCase()
      );
    }
  }

  return (
    <>
      <ScrollTop></ScrollTop>
      <Head>
        <title>{`${Object.values(target as any)[0]} - zely`}</title>
      </Head>

      <div className="content-flex">
        <div className="post">
          <div className="directory">
            {directory
              .map((dir) => (
                <>
                  <div className="directory-path">
                    {capitalizeFirstLetter(dir)}
                  </div>
                </>
              ))
              .reduce(
                (prev, curr) =>
                  [
                    prev,
                    <>
                      <i className="ri-arrow-right-s-line"></i>
                    </>,
                    curr,
                  ] as any
              )}
          </div>
          <div className="intro">
            <h1>{Object.values(target as any)[0] as string}</h1>
          </div>
          <div className="content-container">
            <main>
              <Content content={compiled}></Content>
            </main>
          </div>
          <div className="prenext">
            {previousPage.title ? (
              <Link
                className="no-a"
                href={`/${config.directory}/${previousPage.url}`}
              >
                <h4>Previous Page</h4>

                <p>{previousPage.title as any}</p>
              </Link>
            ) : (
              <div></div>
            )}
            {nextPage.title ? (
              <Link
                className="no-a"
                href={`/${config.directory}/${nextPage.url}`}
              >
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
