'use client';

/* eslint-disable import/no-cycle */

import 'remixicon/fonts/remixicon.css';

import Link from 'next/link';
import { Popover } from '@/components/popper';
import docs from '@/docs';
import { TextLabel } from '@/components/label';
import { ThemeSelector } from '@/components/theme-selector';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Header({ isDocs }: { isDocs: boolean }) {
  const path = usePathname().split('/')[1];

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.body.addEventListener('scroll', () => {
      const { scrollTop } = document.body;

      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`header-container text ${
          path.trim() !== '' ? '' : 'transparent-header'
        } ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="header">
          <Link className="item-1 logo" href="/">
            {docs.name} <span className="docs-icon">Docs</span>
          </Link>

          <div className="item-2">
            {docs.header.map((item) => {
              if (item.type === 'popover') {
                return (
                  <>
                    <Popover text={item.title} key={item.title}>
                      {item.children.map((child) => (
                        <>
                          <div className="menu-item text-inter">
                            <Link href={child.href} className="menu-container">
                              <div className="menu-icon">
                                <i className={child.icon}></i>
                              </div>
                              <div className="menu-content">
                                <h4>{child.title}</h4>
                                {child.description}
                              </div>
                            </Link>
                          </div>
                        </>
                      ))}
                    </Popover>
                  </>
                );
              }
              return (
                <Link href={item.href} className="btn focuser" key={item.title}>
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="item-3">
            <TextLabel text="What's new?">
              <Link href="/changelog">
                <p>
                  <i className="ri-receipt-line"></i>
                </p>
              </Link>
            </TextLabel>
            <ThemeSelector></ThemeSelector>
            <TextLabel text="github">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zely-js/zely"
                className="big-icon"
              >
                <i className="ri-github-fill"></i>
              </Link>
            </TextLabel>
          </div>
        </div>
      </header>
    </>
  );
}
