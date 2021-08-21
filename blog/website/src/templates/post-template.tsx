import { MDXProvider } from '@mdx-js/react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Disqus } from '../components/disqus';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';
import { mdxComponents } from '../components/typography/mdx-components';
import { Post } from '../types/post';

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
      body
    }
  }
`;

const PostTemplate: React.FC<PageProps<PostTemplateQueryProps>> = ({
  data,
}) => {
  const { post } = data;
  return (
    <SiteLayout>
      <SiteHeader isPostPage />
      <article>
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            {post.frontmatter.title}
          </h1>
        </header>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <footer>
          <Disqus />
        </footer>
      </article>
      <SiteFooter />
    </SiteLayout>
  );
};

export default PostTemplate;
