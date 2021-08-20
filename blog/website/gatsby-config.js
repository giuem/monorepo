const path = require("path");

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
        title: "Archives",
        href: "/archives",
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
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./contents/posts`,
      },
    },

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: {
          tailwindcss: {},
        },
      },
    },
    'gatsby-plugin-pnpm',
    '@giuem/gatsby-plugin-webpack-bundle-analyzer'
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
  },
};
