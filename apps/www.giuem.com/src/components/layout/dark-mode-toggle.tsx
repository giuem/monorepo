import { useTheme } from '@giuem/gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';

export const DarkModeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  if (theme === undefined) {
    return null;
  }

  return (
    <button
      className="
      bg-gray-100 hover:bg-indigo-50 
      dark:bg-gray-800 dark:hover:bg-indigo-900 
      p-2 rounded-md transition-colors"
      aria-label="深浅色主题切换按钮"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};
