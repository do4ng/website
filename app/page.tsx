/* eslint-disable react/no-unescaped-entities */

import Index from '@/components';
import Link from 'next/link';
import './style.scss';
import docs from '@/docs';

export default function Product() {
  return (
    <>
      <div className="product-container">
        <div className="title">
          <Link className="update" href="/blog/24-12-01">
            <span className="circle"></span>
            <span className="update-content">4.0 is coming!</span>
          </Link>
          <h1 dangerouslySetInnerHTML={{ __html: docs.description }}></h1>

          <div className="title-example">
            <div className="code-example">
              <div className="code-block-example">
                <p className="code-line">
                  <span className="code-line-highlight">npx</span> zely-cli init
                </p>
              </div>
            </div>
          </div>
          <div className="actions">
            <Link href="/docs/getting-started">
              <button className="btn text">Getting Started</button>
            </Link>
            <Link href="/docs/why-zely">
              <button className="btn text">Why Zely</button>
            </Link>
          </div>
        </div>
      </div>
      <Index></Index>
    </>
  );
}
