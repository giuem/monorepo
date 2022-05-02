import { graphql, PageProps } from 'gatsby';

import { ArchivesPostItem } from '../components/archives/post-item';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { SEO } from '../components/seo/seo';
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
      <main className="flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">所有文章</h1>
        <section className="flex flex-col gap-2">
          {posts.map((post) => (
            <ArchivesPostItem key={post.fields.slug} post={post} />
          ))}
        </section>
      </main>
      <SiteFooter />
    </SiteLayout>
  );
};

export default ArchivesPage;
