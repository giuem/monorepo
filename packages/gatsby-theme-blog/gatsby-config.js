const path = require("path");

function resolveFile(file) {
  return path.join(__dirname, file);
}

module.exports = {
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
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "./contents/posts",
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
          tailwindcss: { config: resolveFile("./tailwind.config.js") },
        },
      },
    },
  ],
};
