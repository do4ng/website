'use client';

/* eslint-disable import/no-cycle */
import { toggleTheme } from '@/app/layout';
import { useEffect, useState } from 'react';
import { TextLabel } from './label';

export function ThemeSelector() {
  const [defaultValue, setDefaultValue] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(localStorage.getItem('theme') as any);
      setDefaultValue((localStorage.getItem('theme') as any) || 'dark');
    }
  }, []);

  return (
    <>
      <TextLabel text="Toggle Theme">
        <button
          onClick={() => {
            console.log(defaultValue);
            if (defaultValue === 'dark') {
              toggleTheme('white');
              localStorage.setItem('theme', 'white');
              setDefaultValue('white');
            } else {
              toggleTheme('dark');
              localStorage.setItem('theme', 'dark');
              setDefaultValue('dark');
            }
          }}
        >
          {defaultValue === 'dark' ? (
            <>
              <i className="ri-moon-line"></i>
            </>
          ) : (
            <>
              <i className="ri-sun-line"></i>
            </>
          )}
        </button>
      </TextLabel>
    </>
  );
}
