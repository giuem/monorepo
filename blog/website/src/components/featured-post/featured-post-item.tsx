import { Post } from '../../types/post';
import { getPostUrl } from '../../utils/get-post-url';
import { Link } from '../link';

export type FeaturedPostItemProps = {
  post: Post;
};

// @TODO: optional excerpt

export const FeaturedPostItem: React.FC<FeaturedPostItemProps> = ({ post }) => {
  return (
    <article className="mt-16 mb-12">
      <h2 className="md:text-2xl text-xl font-semibold">
        <Link
          className="md:border-b-2 md:hover:border-indigo-400 hover:bg-indigo-50"
          href={getPostUrl(post.fields.slug)}
        >
          {post.frontmatter.title}
        </Link>
      </h2>
      {post.excerpt && (
        <h3 className="md:text-lg md:mt-4 text-base mt-2">{post.excerpt}</h3>
      )}
    </article>
  );
};
