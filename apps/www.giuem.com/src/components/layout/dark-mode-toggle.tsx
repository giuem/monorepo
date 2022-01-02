import { useTheme } from '@giuem/gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';

export const DarkModeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  if (theme === undefined) {
    return null;
  }

  return (
    <button
      className="text-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-100 bg-gray-50 dark:bg-gray-900 p-2 rounded"
      aria-label="深浅色主题切换按钮"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};
