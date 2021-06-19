import { graphql, Link, PageProps } from "gatsby";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLayout } from "../components/SiteLayout";
import { Post } from "../types/post";

type IndexQueryProps = {
  allMdx: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        slug
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
        {/* <section>
          {posts.map((post, index) => (
            <div key={index}>
              <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
            </div>
          ))}
        </section> */}
      </main>
    </SiteLayout>
  );
};

export default IndexPage;
