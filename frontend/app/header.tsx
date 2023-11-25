'use client';

import 'remixicon/fonts/remixicon.css';

import Link from 'next/link';
import { Popover } from '@/components/popper';

export function Header() {
  return (
    <>
      <div className="news">
        <Link href="https://github.com/zely-js/zely/issues/149">🚀 v2 is coming</Link>
      </div>
      <header className="header-container text">
        <div className="header">
          <Link className="item-1 logo" href="/">
            Zely
          </Link>

          <div className="item-2">
            <Popover text="Docs">
              <div className="menu-item text-inter">
                <Link href="/docs/getting-started" className="menu-container">
                  <div className="menu-icon">
                    <i className="ri-guide-line"></i>
                  </div>
                  <div className="menu-content">
                    <h4>Installation</h4>
                    Start your fist app.
                  </div>
                </Link>
              </div>
              <div className="menu-item text-inter">
                <Link href="/docs/why-zely" className="menu-container">
                  <div className="menu-icon">
                    <i className="ri-book-open-line"></i>
                  </div>
                  <div className="menu-content">
                    <h4>Docs</h4>
                    Learn all of information of package.
                  </div>
                </Link>
              </div>
            </Popover>

            <Link href="/plugins/plugins" className="btn focuser">
              Plugins
            </Link>

            <Popover text="Community">
              <div className="menu-item text-inter">
                <Link href="/docs/contributing" className="menu-container">
                  <div className="menu-icon">
                    <i className="ri-sticky-note-line"></i>
                  </div>
                  <div className="menu-content">
                    <h4>Contribute</h4>
                    thank you for your contribution.
                  </div>
                </Link>
              </div>
              <div className="menu-item text-inter">
                <Link href="/blog" className="menu-container">
                  <div className="menu-icon">
                    <i className="ri-book-open-line"></i>
                  </div>
                  <div className="menu-content">
                    <h4>Blog</h4>
                    Our development blog.
                  </div>
                </Link>
              </div>
            </Popover>
          </div>

          <div className="item-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zely-js/zely"
            >
              <i className="ri-github-fill"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
