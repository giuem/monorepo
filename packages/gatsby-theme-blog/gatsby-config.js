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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: resolveFile("./src/pages/"),
      },
      __key: "pages",
    },
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
