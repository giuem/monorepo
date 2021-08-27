exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-mode"
      dangerouslySetInnerHTML={{
        __html: `(function() {window.__currentTheme=function(){var e;try{e=window.localStorage.getItem("theme")}catch(e){}if("dark"==e||"light"==e)return e;var t=window.matchMedia("(prefers-color-scheme: dark)");return"boolean"==typeof t.matches&&t.matches?"dark":"light"}(),"dark"===window.__currentTheme?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})()`,
      }}
    />,
  ]);
};
