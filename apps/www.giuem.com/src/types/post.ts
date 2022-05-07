export type PostFrontmatter = {
  title: string;
  lead?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  fields: { slug: string; href: string };
  body: string;
  excerpt?: string;
};
