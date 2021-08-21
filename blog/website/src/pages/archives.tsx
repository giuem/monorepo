import { graphql, PageProps } from "gatsby";

import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";
import { SiteLayout } from "../components/layout/site-layout";
import { Link } from "../components/link";
import { Post } from "../types/post";
import { getPostUrl } from "../utils/get-post-url";

type ArchivesQueryProps = {
  allMdx: {
    nodes: Post[];
  };
};

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
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
        {posts.map((post) => (
          <h2 className="text-xl" key={post.fields.slug}>
            <Link
              className="hover:bg-indigo-50 border-b-2 hover:border-indigo-400"
              href={getPostUrl(post.fields.slug)}
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
