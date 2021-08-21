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
      <footer className="my-12">
        <Link
          className="px-5 py-3 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-800 md:text-lg"
          href="/archives"
        >
          更多文章
        </Link>
      </footer>
    </div>
  );
};