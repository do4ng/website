'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import config, { Category } from '@/docs/config';

export function CategoryMenu({ category }: { category: Category }) {
  const params = useParams();

  let targetcategory: string | null = null;

  config.forEach((category) => {
    category.posts.forEach((post) => {
      if (Object.keys(post)[0] === params?.slug) {
        targetcategory = category.name;
      }
    });
  });

  const [hide, setHide] = useState(false);

  return (
    <div className={`category ${hide ? 'hide' : ''}`} key={category.name}>
      <button
        className="no-btn text-inter"
        onClick={() => {
          if (targetcategory !== category.name) {
            setHide(!hide);
          }
        }}
      >
        <h4>
          {category.name} <i className="ri-arrow-down-s-line"></i>
        </h4>
      </button>
      <div className="posts">
        {category.posts.map((post) => (
          <div key={Object.keys(post)[0]}>
            <Link
              href={`/docs/${Object.keys(post)[0]}`}
              className={`btn ${params?.slug === Object.keys(post)[0] ? 'active' : ''}`}
            >
              {Object.values(post)[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
