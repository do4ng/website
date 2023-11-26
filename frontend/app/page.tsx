'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('class', 'dark');
  });

  return (
    <div className="title">
      <h1>
        Build Productive,<br></br>
        Convenient, Fast Backend
      </h1>
      <div className="actions">
        <Link href="/docs/getting-started">
          <button className="btn text">Getting Started</button>
        </Link>
        <Link href="/docs/why-zely">
          <button className="btn text">Why zely?</button>
        </Link>
      </div>
    </div>
  );
}
