import { Post } from '../../types/post';
import { getPostUrl } from '../../utils/get-post-url';
import { Link } from '../link';

export const ArchivesPostItem: React.FC<{
  post: Post;
}> = ({ post }) => {
  return (
    <Link
      className="rounded-md hover:bg-indigo-50 dark:hover:bg-slate-800 -mx-2 px-2 py-0.5 text-lg transition-all"
      href={getPostUrl(post.fields.slug)}
    >
      <article>
        <h2>{post.frontmatter.title}</h2>
      </article>
    </Link>
  );
};
