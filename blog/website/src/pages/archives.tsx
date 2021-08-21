import { graphql, PageProps } from 'gatsby';

import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { Link } from '../components/link';
import { SEO } from '../components/seo/seo';
import { Post } from '../types/post';
import { getPostUrl } from '../utils/get-post-url';

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

const ArchivesPage: React.FC<PageProps<ArchivesQueryProps>> = ({
  data,
  path,
}) => {
  const posts = data.allMdx.nodes;
  return (
    <SiteLayout>
      <SEO title="所有文章" pathname={path} />
      <SiteHeader isPostPage></SiteHeader>
      <main className="flex-1 flex flex-col space-y-5">
        <h1 className="text-2xl font-semibold mb-4">所有文章</h1>
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
      </main>
      <SiteFooter />
    </SiteLayout>
  );
};

export default ArchivesPage;
