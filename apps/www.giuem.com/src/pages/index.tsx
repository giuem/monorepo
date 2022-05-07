import { graphql, PageProps } from 'gatsby';

import { FeaturedPosts } from '../components/featured-post/featured-posts';
import { SiteContent } from '../components/layout/site-content';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { SEO } from '../components/seo/seo';
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
    <SiteLayout>
      <SEO pathname={path} />
      <SiteHeader />
      <SiteContent>
        <FeaturedPosts latestPost={latestPost} recentPosts={recentPosts} />
      </SiteContent>
      <SiteFooter />
    </SiteLayout>
  );
};

export default IndexPage;
