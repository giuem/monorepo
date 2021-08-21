import { Post } from "../../types/post";
// import { FeaturedPostHeader } from "./FeaturedPostHeader";
import { FeaturedPostItem } from "./featured-post-item";
import { Link } from "../link";

export const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="my-12">
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
          View all
        </Link>
      </footer>
    </div>
  );
};
