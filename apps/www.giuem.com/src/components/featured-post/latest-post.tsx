// import { navigate } from 'gatsby';

import { Post } from '../../types/post';
import { getPostUrl } from '../../utils/get-post-url';
import { Link } from '../link';

export type FeaturedPostItemProps = {
  post: Post;
};

export const LatestPost: React.FC<FeaturedPostItemProps> = ({ post }) => {
  const href = getPostUrl(post.fields.slug);
  // const handleClick = () => {
  //   navigate(href);
  // };

  return (
    <article className="mb-16">
      <h2 className="text-2xl font-semibold">
        <Link
          className="
          border-b-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600
          hover:bg-indigo-50 dark:hover:bg-indigo-900 
          transition-colors"
          href={href}
        >
          {post.frontmatter.title}
        </Link>
      </h2>
      {post.excerpt && (
        <>
          <h3 className="text-lg mt-4 text-gray-600 dark:text-gray-300 text-justify line-clamp-4 sm:line-clamp-none">
            {post.excerpt}
          </h3>
          <div className="flex mt-4 ">
            <Link
              className="text-sm rounded-md transition-colors font-semibold
            bg-gray-100 hover:bg-indigo-50
            dark:bg-gray-800 hover:dark:bg-indigo-900
            px-4 -mx-2 py-2"
              href={href}
            >
              继续阅读
            </Link>
          </div>
        </>
      )}
    </article>
  );
};
