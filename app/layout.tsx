'use client';

/* eslint-disable import/no-cycle */

import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/global.scss';
import config from '@/config';
import { capitalizeFirstLetter } from '@/lib/up';
import './style.scss';
import './[category]/[slug]/post.scss';
import './[category]/[slug]/style.scss';
import { Header } from './header';
import { CategoryMenu } from './[category]/[slug]/category';

export function toggleTheme(to: 'dark' | 'white' = 'dark') {
  if (typeof window === 'undefined') return;
  document.querySelector('html').setAttribute('class', to);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  /*
  if (typeof window !== 'undefined') {
    if (
      window.location.origin.startsWith('http') &&
      window.location.origin.startsWith('https://zely2.netlify.app')
    ) {
      window.location.href = window.location.href.replace(
        'https://zely2.netlify.app',
        'https://zely.vercel.app',
      );
    }
  }
  */

  const path = usePathname().split('/')[1];
  console.log(path);
  const isDocs =
    path === 'docs' ||
    path === 'plugins' ||
    path === 'apis' ||
    path === 'guide' ||
    path === 'serpack';

  if (typeof window !== 'undefined') {
    toggleTheme((localStorage.getItem('theme') as any) || 'dark');
  }

  const target = config.find((category) => category.title.toLowerCase() === path);

  return (
    <html lang="en">
      <body>
        <Analytics />
        <NextTopLoader showSpinner={false} height={2} color="#ca4f559f" />
        <script src="/theme.js" async></script>
        <div className="app">
          <Header></Header>

          {isDocs ? (
            <>
              <div className="documentation">
                <div className="menu">
                  <div className="menu-layout">
                    <div className="menu-categories">
                      {config
                        .filter(({ title }) => title.toLowerCase() !== 'serpack')
                        .map((c) => (
                          <div
                            key={c.title}
                            className={`category-button ${
                              path.toLocaleLowerCase() === c.title.toLocaleLowerCase()
                                ? 'category-active'
                                : ''
                            }`}
                          >
                            <Link href={`/${c.title.toLocaleLowerCase()}/${c.target}`}>
                              <div className="category-button-icon">
                                <i className={`ri-${c.icon}`}></i>
                              </div>
                              <div className="category-button-text">
                                <h4>{capitalizeFirstLetter(c.title)}</h4>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                    <div className="menu-content">
                      {target ? (
                        target.category.map((category) => (
                          <CategoryMenu
                            hidden={category.hidden || false}
                            category={category as any}
                            key={category.name}
                          ></CategoryMenu>
                        ))
                      ) : (
                        <>page not found</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="content">{children}</div>
              </div>
            </>
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  );
}
