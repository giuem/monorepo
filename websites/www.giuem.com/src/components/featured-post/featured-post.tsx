import { Post } from '../../types/post';
import { Link } from '../link';

import { FeaturedPostItem } from './featured-post-item';

export const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      {/* <FeaturedPostHeader /> */}
      <section>
        {posts.map((post, index) => (
          <FeaturedPostItem key={index} post={post} />
        ))}
      </section>
      <footer className="my-16">
        <Link
          className="px-5 py-3 rounded-md bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 text-indigo-800 dark:text-indigo-100 sm:text-lg"
          href="/archives"
        >
          更多文章
        </Link>
      </footer>
    </div>
  );
};
