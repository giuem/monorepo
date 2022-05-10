module.exports = {
  siteMetadata: {
    title: 'Homology',
    titleTemplate: '%s | Blog @ GIUEM',
    description:
      'GIUEM(@giuemcom) 的博客，平常会简单开箱测评买到的科技数码产品，也会记录分享日常的折腾奇奇怪怪的东西，技术向的文章会偏前端、信息安全',
    siteUrl: 'https://www.giuem.com',
    image: '',
    author: {
      name: 'giuem',
    },
    social: {
      twitter: '@giuemcom',
      github: '@giuem',
    },
    nav: [
      {
        title: '🏠 Home',
        href: '/',
      },
      {
        title: '👨‍💻 Blog',
        href: '/archives',
      },
      {
        title: '👋 About',
        href: '/about',
      },
      {
        title: '🤺 Link',
        href: '/links',
      },
    ],
    links: require('./contents/links.json'),
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./contents/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              showCaptions: false,
              backgroundColor: 'none',
              quality: 50,
              withWebp: {
                nearLossless: true,
                quality: 50,
                reductionEffort: 6,
                smartSubsample: true,
              },
              // withAvif: { quality: 50, speed: 1 },
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          '@fec/remark-a11y-emoji/gatsby',
        ],
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-pnpm',
    // "@giuem/gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                const url = `${site.siteMetadata.siteUrl}${edge.node.fields.href}`;

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { fields: { type: { eq: "posts" } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { href }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: `Giuem Blog RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/logo.svg',
        cache_busting_mode: `name`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-102578664-1',
    //   },
    // },
    `@giuem/gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#4f46e5`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'c6b67d7c-b6ed-4ed3-9b76-287955224503',
        srcUrl: 'https://umami.giuem.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
      },
    },
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PARALLEL_SOURCING: false,
  },
  trailingSlash: 'never',
  jsxRuntime: 'automatic',
};
