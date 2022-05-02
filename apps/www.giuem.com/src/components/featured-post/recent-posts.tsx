import { Post } from '../../types/post';
import { ArchivesPostItem } from '../archives/post-item';
import { Link } from '../link';

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
          <ArchivesPostItem key={post.fields.slug} post={post} />
        ))}
      </section>
      <footer className="flex">
        <Link
          className="
          text-sm rounded-md transition-colors font-semibold
          bg-gray-100 hover:bg-indigo-50
          dark:bg-gray-800 hover:dark:bg-indigo-900
          px-4 -mx-2 py-2"
          href="/archives"
        >
          更多文章
        </Link>
      </footer>
    </section>
  );
};
