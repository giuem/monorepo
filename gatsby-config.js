module.exports = {
  siteMetadata: {
    title: "BLOG @ GIUEM",
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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    `gatsby-plugin-postcss`,
  ],
  flags: {},
};
