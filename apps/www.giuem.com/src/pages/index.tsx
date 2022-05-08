import { graphql, PageProps } from 'gatsby';

import { FeaturedPosts } from '../components/featured-post/featured-posts';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Post } from '../types/post';

type IndexQueryProps = {
  latestPosts: {
    nodes: Post[];
  };
  recentPosts: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    latestPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
          href
        }
        excerpt(pruneLength: 240)
      }
    }
    recentPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: 2
      limit: 5
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
          href
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data, path }) => {
  const latestPost = data.latestPosts.nodes[0];
  const recentPosts = data.recentPosts.nodes;

  return (
    <Layout>
      <SEO pathname={path} />
      <FeaturedPosts latestPost={latestPost} recentPosts={recentPosts} />
    </Layout>
  );
};

export default IndexPage;
