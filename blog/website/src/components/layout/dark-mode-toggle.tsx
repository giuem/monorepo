import nightwind from 'nightwind/helper';
import { useState, useCallback } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function getInitialColorMode() {
  try {
    const persistedColorPreference =
      window.localStorage.getItem('nightwind-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return 'light';
}

export const DarkModeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState(getInitialColorMode());

  const toggle = useCallback(() => {
    if (theme === 'light') {
      nightwind.enable(true);
      setTheme('dark');
    } else {
      nightwind.enable(false);
      setTheme('light');
    }
  }, [theme]);

  return (
    <button
      className="text-lg hover:bg-gray-100 active:bg-gray-100 focus:ring-2 bg-gray-50 p-2 rounded"
      onClick={toggle}
    >
      {theme === 'light' ? <FiSun /> : <FiMoon />}
    </button>
  );
};
