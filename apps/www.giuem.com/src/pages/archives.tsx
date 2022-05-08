import { graphql, PageProps } from 'gatsby';

import { Layout } from '../components/Layout';
import { ArchivesPostItem } from '../components/PostItem';
import { SEO } from '../components/SEO';
import { Post } from '../types/post';

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
          href
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
    <Layout isPost>
      <SEO title="所有文章" pathname={path} />
      <main className="flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">所有文章</h1>
        <section className="flex flex-col gap-2">
          {posts.map((post) => (
            <ArchivesPostItem key={post.fields.href} post={post} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default ArchivesPage;
