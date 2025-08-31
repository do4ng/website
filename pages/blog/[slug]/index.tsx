/* eslint-disable no-use-before-define */

import React from "react";
import { readFileSync } from "fs";
import { join } from "path";

import config from "@/blog.config";
import { compileMdx } from "@/mdx/compile";
import { Content } from "@/mdx/content";

export async function getStaticParams() {
  return config.map(({ date }) => ({ slug: date }));
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  let raw: string = "";
  let target = null;

  config.forEach((post) => {
    if (post.date === params.slug) {
      target = post;
    }
  });
  raw = readFileSync(
    join(process.cwd(), "blog", `${target.date}.mdx`)
  ).toString();

  const compiled = await compileMdx(raw);

  return { raw, target, compiled };
}

export default function Page({
  params,
  props: { raw, compiled, target },
}: {
  params: { slug: string };
  props: { raw: string; compiled: any; target: any };
}) {
  if (!target) return <></>;
  return (
    <>
      <title>{`${target.title} - zely`}</title>

      <div className="blog">
        <div className="content-container post">
          <div className="intro">
            <h1>{target.title}</h1>
            <span>do4ng - {target.date}</span>
          </div>
          <main>
            <Content content={compiled}></Content>
          </main>
        </div>
      </div>
    </>
  );
}
