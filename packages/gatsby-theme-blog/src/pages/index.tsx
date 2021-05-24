import { graphql, Link, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import { Post } from "../types/post";

type IndexQueryProps = {
  allMdx: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    allMdx {
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
    <Layout>
      <main className="p-4">
        <h1 className="text-xl">
          Hello Gatsby with <span className="font-bold">Tailwind</span>
        </h1>
        <section>
          {posts.map((post, index) => (
            <div key={index}>
              <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
