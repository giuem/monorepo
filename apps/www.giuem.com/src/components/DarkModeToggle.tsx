import { useTheme } from '@giuem/gatsby-plugin-dark-mode';
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useFirstMountState } from 'react-use';

export const DarkModeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isFirstMount = useFirstMountState();

  return (
    <button
      className="
      bg-gray-100 hover:bg-indigo-50 transition-colors
      dark:bg-gray-800 dark:hover:bg-indigo-900
      p-2 rounded-md umami--click--dark-mode-toggle-button"
      aria-label="深浅色主题切换按钮"
      onClick={toggleTheme}
    >
      {/* {theme === 'light' ? ( */}
      <DarkIcon animate={!isFirstMount && theme === 'light'} />
      {/*  ) : ( */}
      <LightIcon animate={!isFirstMount && theme === 'dark'} />
      {/* )} */}
    </button>
  );
};

function DarkIcon({ animate = false }) {
  const [style, api] = useSpring(() => ({
    rotate: '0',
    scale: 1,
  }));

  useEffect(() => {
    if (animate) {
      api.start({
        from: { rotate: '90deg', scale: 0.8 },
        to: { rotate: '0', scale: 1 },
      });
    }
  }, [animate, api]);

  return (
    <animated.div className="block dark:hidden" style={style}>
      <FiMoon />
    </animated.div>
  );
}

function LightIcon({ animate = false }) {
  const [style, api] = useSpring(() => ({
    rotate: '0',
  }));

  useEffect(() => {
    if (animate) {
      api.start({ from: { rotate: '45deg' }, to: { rotate: '0' } });
    }
  }, [animate, api]);

  return (
    <animated.div className="hidden dark:block" style={style}>
      <FiSun />
    </animated.div>
  );
}
