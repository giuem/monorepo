module.exports = {
  siteMetadata: {
    title: "Soul Evolution",
    titleTemplate: "%s | Blog @ GIUEM",
    description: "描述",
    canonicalUrl: "https://www.giuem.com",
    image: "",
    author: {
      name: "giuem",
    },
    social: {
      twitter: "@giuemcom",
      github: "@giuem",
    },
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Links",
        href: "/links",
      },
      {
        title: "About",
        href: "/about",
      },
    ],
  },
  plugins: ["gatsby-theme-blog"],
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
  },
};
