import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const $title = document.getElementsByTagName('title')[0];
      $title.innerText = title;
    }
  }, [title]);
}