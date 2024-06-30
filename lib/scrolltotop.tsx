/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useEffect } from 'react';
import { scrollTop } from './scrolltop';

export default function scrollToTop() {
  useEffect(() => {
    if (window.location.hash !== '') {
      document
        .querySelector('.content')
        .querySelector(`[id="${window.location.hash.slice(1)}"]`)
        ?.scrollIntoView();
    } else {
      scrollTop();
    }
  }, []);
  return null;
}
