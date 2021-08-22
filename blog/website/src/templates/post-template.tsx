import loadable from '@loadable/component';
import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { SiteContent } from '../components/layout/site-content';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { mdxComponents } from '../components/post/mdx-components';
import { SEO } from '../components/seo/seo';
import { Post } from '../types/post';

const LoadableDisqus = loadable(
  () => import(/* webpackChunkName: "disqus" */ '../components/post/disqus'),
  {
    resolveComponent: (components) => components.Disqus,
  }
);

type PostTemplateQueryProps = {
  post: Post;
};

export const pageQuery = graphql`
  query ($id: String!) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
      body
      excerpt
    }
  }
`;

const PostTemplate: React.FC<PageProps<PostTemplateQueryProps>> = ({
  data,
  path,
}) => {
  const { post } = data;

  return (
    <SiteLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        pathname={path}
      />
      <SiteHeader isPostPage />
      <SiteContent>
        <article>
          <header className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {post.frontmatter.title}
            </h1>
          </header>
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          <footer>
            <LoadableDisqus
              title={post.frontmatter.title}
              slug={post.fields.slug}
              url={path}
            />
          </footer>
        </article>
      </SiteContent>
      <SiteFooter />
    </SiteLayout>
  );
};

export default PostTemplate;
