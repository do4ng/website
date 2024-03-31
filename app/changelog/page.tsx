import React from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';

import './style.scss';
import '../[category]/[slug]/style.scss';

import config from '@/changelog';
import { compileMdx } from '@/mdx/compile';
import { ChangelogPost } from './post';

export default async function Page() {
  let raw: string[] = [];

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

  config.forEach((changelog) => {
    raw.push(
      readFileSync(
        join(process.cwd(), 'changelog', `${changelog.version}.mdx`),
      ).toString(),
    );
  });

  raw = await Promise.all(raw.map(async (changelog) => await compileMdx(changelog)));

  return (
    <>
      <title>{'changelog - zely'}</title>

      <div className="changelog-container">
        {raw.map((changelog, index) => (
          <>
            <div className="changelog">
              <div className="changelog-date">{config[index].target}</div>
              <ChangelogPost content={changelog} closed={index !== 0} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
