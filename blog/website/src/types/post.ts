export type PostFrontmatter = {
  title: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  slug: string;
  body: string;
  excerpt?: string;
};
