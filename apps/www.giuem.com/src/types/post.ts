export type PostFrontmatter = {
  title: string;
  lead?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  fields: { slug: string };
  body: string;
  excerpt?: string;
};
