export type PostFrontmatter = {
  title: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  fields: { slug: string };
  body: string;
  excerpt?: string;
};
