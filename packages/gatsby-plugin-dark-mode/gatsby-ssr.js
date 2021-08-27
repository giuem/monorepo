exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-mode"
      dangerouslySetInnerHTML={{
        __html: `(function() {
            function getInitialColorMode() {
              var preferTheme
              try {
                preferTheme = window.localStorage.getItem('theme')
              } catch (e) {}

              if (preferTheme == 'dark' || preferTheme == 'light') {
                return preferTheme;
              }

              var mql = window.matchMedia('(prefers-color-scheme: dark)');
              if (typeof mql.matches === 'boolean') {
                return mql.matches ? 'dark' : 'light';
              }
              return 'light';
            }
            window.__currentTheme = getInitialColorMode()
            if (window.__currentTheme === 'dark') {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
      })()`,
      }}
    />,
  ]);
};
