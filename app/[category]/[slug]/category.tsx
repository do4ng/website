'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { useState } from 'react';
import config, { Category } from '@/config';

export function CategoryMenu({
  category,
  hidden,
}: {
  category: Category;
  hidden: boolean;
}) {
  const params = useParams();

  let targetcategory: string | null = null;

  const target = config.find(({ title }) => title === params.category);

  target?.category?.forEach((category) => {
    category.posts.forEach((post) => {
      if (Object.keys(post)[0] === params?.slug) {
        targetcategory = category.name;
      }
    });
  });

  const [hide, setHide] = useState(hidden);

  const router = useRouter();
  const CategoryName = category.name.toLowerCase().replace(/ /g, '-');

  router.prefetch(`/${params.category}/${CategoryName}`);

  return (
    <div className={`category ${hide ? 'hide' : ''}`} key={category.name}>
      <h4>
        <button
          onClick={() => {
            if (
              category.posts.filter(
                (post) => CategoryName === Object.keys(post)[0].toLowerCase(),
              ).length !== 0
            ) {
              setHide(false);
              router.push(`/${params.category}/${CategoryName}`);
            } else {
              setHide(!hide);
            }
          }}
          className={`no-btn text-inter ${params?.slug === CategoryName ? 'active' : ''}`}
        >
          {category.name}
        </button>
        <button
          className="no-btn"
          onClick={() => {
            if (targetcategory !== category.name) {
              setHide(!hide);
            }
          }}
        >
          <i className="ri-arrow-down-s-line"></i>
        </button>
      </h4>

      <div className="posts">
        {category.posts.map((post) => (
          <div key={Object.keys(post)[0]}>
            {Object.keys(post)[0].toLowerCase() === CategoryName ? (
              <></>
            ) : (
              <Link
                href={`/${params.category}/${Object.keys(post)[0]}`}
                className={`btn ${params?.slug === Object.keys(post)[0] ? 'active' : ''}`}
              >
                {Object.values(post)[0]}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
