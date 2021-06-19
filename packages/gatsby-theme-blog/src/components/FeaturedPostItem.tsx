import { Post } from "../types/post";
import { Link } from "./Link";

export type FeaturedPostItemProps = {
  post: Post;
};

// @TODO: optional excerpt

export const FeaturedPostItem: React.FC<FeaturedPostItemProps> = ({ post }) => {
  return (
    <article className="my-8">
      <h2 className="md:text-2xl text-xl">
        <Link
          className="md:border-b-2 md:hover:border-indigo-400 hover:bg-indigo-50"
          href={`/${post.slug}`}
        >
          {post.frontmatter.title}
        </Link>
      </h2>
    </article>
  );
};
