'use client';

import { usePathname } from 'next/navigation';

import '@/styles/global.scss';
import config from '@/docs/config';
import configPlugins from '@/plugins/config';
import './style.scss';
import './docs/[slug]/post.scss';
import './docs/[slug]/style.scss';
import { Header } from './header';
import { CategoryMenu } from './docs/[slug]/category';
import { CategoryMenu as CategoryMenuPlugins } from './plugins/[slug]/category';

function toggleTheme(to: 'dark' | 'white' = 'dark') {
  if (typeof window === 'undefined') return;
  document.querySelector('html').setAttribute('class', to);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname().split('/')[1];
  const isDocs = path === 'docs' || path === 'plugins';
  const isPlugin = path === 'plugins';

  if (typeof window !== 'undefined') {
    toggleTheme((localStorage.getItem('theme') as any) || 'white');
  }

  return (
    <html lang="en">
      <body>
        <script src="/theme.js" async></script>
        <div className="app">
          <Header></Header>

          {isDocs ? (
            <>
              <div className="documentation">
                <div className="menu">
                  <div className="menu-layout">
                    {!isPlugin
                      ? config.map((category) => (
                          <CategoryMenu
                            category={category as any}
                            key={category.name}
                          ></CategoryMenu>
                        ))
                      : configPlugins.map((category) => (
                          <CategoryMenuPlugins
                            category={category as any}
                            key={category.name}
                          ></CategoryMenuPlugins>
                        ))}
                  </div>
                  <div className="menu-bottom">
                    <i className="ri-sun-line"></i>
                    <select
                      onChange={(e) => {
                        localStorage.setItem('theme', e.target.value);
                        toggleTheme(e.target.value as any);
                      }}
                    >
                      <option key="dark" value="dark">
                        Dark
                      </option>
                      <option key="white" value="white">
                        White
                      </option>
                    </select>
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
