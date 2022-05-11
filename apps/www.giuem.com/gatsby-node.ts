import { resolve } from 'path';

import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const createPages: GatsbyNode['createPages'] = ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const postTemplate = resolve(`./src/templates/post-template.tsx`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                href
                legacyHref
                type
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    // @ts-ignore TODO: fix later
    const posts: any[] = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      if (post.node.fields.type === 'posts') {
        actions.createRedirect({
          fromPath: post.node.fields.legacyHref,
          toPath: post.node.fields.href,
          isPermanent: true,
        });
      }

      createPage({
        path: post.node.fields.href,
        component: postTemplate,
        context: {
          id: post.node.id,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    if (!node.parent) {
      throw new Error('node.parent is null');
    }
    const parent = getNode(node.parent);
    if (!parent) {
      throw new Error('parent is null');
    }

    // remove year
    const slug = value.replace(/^\/\d+\//, '').replace(/\//g, '');
    const type = parent.sourceInstanceName;
    const legacyHref = `/${slug}`;
    const href = type === 'posts' ? `/blog/${slug}` : legacyHref;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    createNodeField({
      name: `href`,
      node,
      value: href,
    });

    createNodeField({
      name: `legacyHref`,
      node,
      value: legacyHref,
    });

    createNodeField({
      name: 'type',
      node,
      value: type,
    });
  }
};
