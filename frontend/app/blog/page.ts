import { redirect } from 'next/navigation';
import config from '@/blog/config';

export default function Blog() {
  redirect(`/blog/${config[0].date}`);
}
