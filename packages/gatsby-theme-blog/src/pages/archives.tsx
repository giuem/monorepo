import { graphql, PageProps } from "gatsby";
import { SiteLayout } from "../components/SiteLayout";
import { SiteHeader } from "../components/SiteHeader";
import { Post } from "../types/post";
import { Link } from "../components/Link";
import { SiteFooter } from "../components/SiteFooter";

type ArchivesQueryProps = {
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

const ArchivesPage: React.FC<PageProps<ArchivesQueryProps>> = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <SiteLayout>
      <SiteHeader></SiteHeader>
      <section className="flex flex-col space-y-5">
        {posts.map((post, index) => (
          <h2 className="text-xl" key={post.slug}>
            <Link
              className="hover:bg-indigo-50 border-b-2 hover:border-indigo-400"
              href={`/${post.slug}`}
            >
              {post.frontmatter.title}
            </Link>
          </h2>
        ))}
      </section>
      <SiteFooter />
    </SiteLayout>
  );
};

export default ArchivesPage;
