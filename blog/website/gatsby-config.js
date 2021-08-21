module.exports = {
  siteMetadata: {
    title: "Soul Evolution",
    titleTemplate: "%s | Blog @ GIUEM",
    description: "描述",
    canonicalUrl: "https://www.giuem.com/",
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
    links: require("./data/links.json"),
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
    "gatsby-plugin-pnpm",
    "@giuem/gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              canonicalUrl
              site_url: canonicalUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                const url = `${site.siteMetadata.canonicalUrl}${edge.node.fields.slug}/`;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "RSS Feed for GIUEM",
          },
        ],
      },
    },
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
  },
};
