import { graphql, PageProps } from 'gatsby';

import { FeaturedPosts } from '../components/featured-post/featured-post';
import { SiteContent } from '../components/layout/site-content';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { SEO } from '../components/seo/seo';
import { Post } from '../types/post';

type IndexQueryProps = {
  allMdx: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data, path }) => {
  const posts = data.allMdx.nodes;

  return (
    <SiteLayout>
      <SEO pathname={path} />
      <SiteHeader />
      <SiteContent>
        <FeaturedPosts posts={posts} />
      </SiteContent>
      <SiteFooter />
    </SiteLayout>
  );
};

export default IndexPage;
