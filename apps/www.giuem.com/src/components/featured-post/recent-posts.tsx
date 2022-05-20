import { Post } from '../../types/post';
import { Link } from '../Link';
import { ArchivesPostItem } from '../PostItem';

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
      <section className="flex flex-col gap-1 my-4">
        {posts.map((post) => (
          <ArchivesPostItem key={post.fields.href} post={post} />
        ))}
      </section>
      <footer className="flex">
        <Link
          className="
          text-sm rounded-md transition-colors font-semibold
          bg-gray-100 hover:bg-indigo-50
          dark:bg-gray-800 hover:dark:bg-indigo-900
          px-4 -mx-2 py-2 umami--click--recent-posts-more-button"
          to="/archives"
        >
          更多文章
        </Link>
      </footer>
    </section>
  );
};
