import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Post } from "../types/post";
import { mdxComponents } from "../components/mdxComponents";
import { SiteLayout } from "../components/SiteLayout";
import { SiteHeader } from "../components/SiteHeader";

type PostTemplateQueryProps = {
  post: Post;
};

export const pageQuery = graphql`
  query($id: String!) {
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
      <SiteHeader withoutTitle />
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {post.frontmatter.title}
          </h1>
        </header>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </article>
    </SiteLayout>
  );
};

export default PostTemplate;
