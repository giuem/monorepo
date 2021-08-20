import { graphql, PageProps } from "gatsby";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLayout } from "../components/SiteLayout";
import { Post } from "../types/post";
import { FeaturedPosts } from "../components/FeaturedPost";
import { SiteFooter } from "../components/SiteFooter";

type IndexQueryProps = {
  allMdx: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
      nodes {
        frontmatter {
          title
        }
        slug
        excerpt
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<IndexQueryProps>> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <SiteLayout>
      <main>
        <SiteHeader />
        <FeaturedPosts posts={posts} />
        <SiteFooter />
      </main>
    </SiteLayout>
  );
};

export default IndexPage;
