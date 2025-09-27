import { useRouter, router as ModuleRouter, useParams } from "$exta-router";

import { Link } from "exta/components";
import { useEffect, useState } from "react";
import config, { Category } from "@/config";

export function CategoryMenu({
  category,
  hidden,
  key,
}: {
  category: Category;
  hidden: boolean;
  key: Category;
}) {
  // eslint-disable-next-line no-unused-vars
  let targetcategory: string | null = null;
  const params = useParams();

  const target = config.find(({ title }) => title === params.category);

  target?.category?.forEach((category) => {
    category.posts.forEach((post) => {
      if (Object.keys(post)[0] === params?.slug) {
        targetcategory = category.name;
      }
    });
  });

  const [hide, setHide] = useState(hidden);

  const CategoryName = category.name.toLowerCase().replace(/ /g, "-");
  const router = useRouter();

  return (
    <div className={`category ${hide ? "hide" : ""}`} key={category.name}>
      <h4>
        <button
          onClick={async () => {
            if (
              category.posts.filter(
                (post) => CategoryName === Object.keys(post)[0].toLowerCase()
              ).length !== 0
            ) {
              setHide(false);
              const href = `/${params.category}/${CategoryName}`;
              await ModuleRouter.goto(href);
              router.push(href);
            } else {
              setHide(!hide);
            }
          }}
          className={`no-btn text-inter ${
            params?.slug === CategoryName ? "active" : ""
          }`}
        >
          {category.name}
        </button>
        <button
          className="no-btn"
          onClick={() => {
            setHide(!hide);
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
                className={`btn ${
                  params?.slug === Object.keys(post)[0] ? "active" : ""
                }`}
                prefetch={false}
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
