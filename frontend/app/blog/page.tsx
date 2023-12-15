'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import config from '@/blog/config';

export default function Blog() {
  const router = useRouter();

  router.replace(`/blog/${config[0].date}`);

  return <></>;
}
