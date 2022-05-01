import { Post } from '../../types/post';

import { LatestPost } from './latest-post';
import { RecentPosts } from './recent-posts';

export const FeaturedPosts: React.FC<{
  latestPost: Post;
  recentPosts: Post[];
}> = ({ latestPost, recentPosts }) => {
  return (
    <div>
      {latestPost && <LatestPost post={latestPost} />}
      <RecentPosts posts={recentPosts} />
    </div>
  );
};
