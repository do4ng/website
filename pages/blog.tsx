import blog from "@/blog.config";
import { Link } from "exta/components";

import "../styles/style.scss";

export default function Blog() {
  return (
    <>
      <div className="blog-container">
        <div className="blog-info">
          <h1>Blog</h1>
          <div>
            <span className="blog-count">{blog.length}</span> posts
          </div>
        </div>

        {blog.map((page) => (
          <>
            <Link href={`/blog/${page.date}`} prefetch={false}>
              <div className="blog-title">
                <h2>{page.title}</h2>
              </div>
              <p className="blog-description">
                do4ng - {page.date.replace(/-/g, ".")}
              </p>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
