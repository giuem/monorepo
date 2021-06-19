import { Post } from "../types/post";
import { FeaturedPostHeader } from "./FeaturedPostHeader";
import { FeaturedPostItem } from "./FeaturedPostItem";

export const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="my-12">
      <FeaturedPostHeader />
      <section>
        {posts.map((post, index) => (
          <FeaturedPostItem key={index} post={post} />
        ))}
      </section>
    </div>
  );
};
