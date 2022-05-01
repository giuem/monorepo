import { Post } from '../../types/post';
import { getPostUrl } from '../../utils/get-post-url';
import { Link } from '../link';

export type FeaturedPostItemProps = {
  post: Post;
};

const RecentPost: React.FC<FeaturedPostItemProps> = ({ post }) => {
  return (
    <Link
      className="rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 -mx-2 px-2 py-0.5 text-lg transition-all"
      href={getPostUrl(post.fields.slug)}
    >
      <article>
        <h2>{post.frontmatter.title}</h2>
      </article>
    </Link>
  );
};

export const RecentPosts: React.FC<{
  posts: Post[];
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <section>
      <header>
        <h2 className="text-lg font-semibold">近期文章</h2>
      </header>
      <section className="flex flex-col gap-1 my-6">
        {posts.map((post) => (
          <RecentPost key={post.fields.slug} post={post} />
        ))}
      </section>
      <footer className="flex">
        <Link
          className="
          text-sm rounded-md transition-colors
          bg-gray-100 hover:bg-indigo-50
          dark:bg-gray-800 hover:dark:bg-indigo-900
          px-3 -mx-2 py-2"
          href="/archives"
        >
          更多文章…
        </Link>
      </footer>
    </section>
  );
};
