import { useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | undefined;

declare global {
  interface Window {
    __currentTheme: Theme;
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTheme = () => {
  const [theme, setTheme] = useState(
    typeof window === 'undefined' ? undefined : window.__currentTheme
  );

  const toggleTheme = useCallback(() => {
    window.__currentTheme =
      window.__currentTheme === 'light' ? 'dark' : 'light';

    setTheme(window.__currentTheme);

    const doc = document.documentElement;
    // const onTransitionDone = () => {
    //   doc.classList.remove('toggle-theme');
    //   doc.removeEventListener('transitionend', onTransitionDone);
    // };
    // doc.addEventListener('transitionend', onTransitionDone);
    // if (!doc.classList.contains('toggle-theme')) {
    //   doc.classList.add('toggle-theme');
    // }

    if (window.__currentTheme === 'dark') {
      doc.classList.add('dark');
    } else {
      doc.classList.remove('dark');
    }

    window.localStorage.setItem('theme', window.__currentTheme);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
