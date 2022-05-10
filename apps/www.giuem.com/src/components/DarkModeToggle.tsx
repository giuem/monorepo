import { useTheme } from '@giuem/gatsby-plugin-dark-mode';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useSpring, animated } from 'react-spring';

export const DarkModeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  if (theme === undefined) {
    return null;
  }

  return (
    <button
      className="
      bg-gray-100 hover:bg-indigo-50 transition-colors 
      dark:bg-gray-800 dark:hover:bg-indigo-900 
      p-2 rounded-md umami--click--dark-mode-toggle-button"
      aria-label="深浅色主题切换按钮"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

function DarkIcon() {
  const props = useSpring({
    from: { rotate: '90deg', scale: 0.8 },
    to: { rotate: '0', scale: 1 },
  });

  return (
    <animated.div style={props}>
      <FiMoon />
    </animated.div>
  );
}

function LightIcon() {
  const props = useSpring({ from: { rotate: '45deg' }, to: { rotate: '0' } });
  return (
    <animated.div style={props}>
      <FiSun />
    </animated.div>
  );
}
