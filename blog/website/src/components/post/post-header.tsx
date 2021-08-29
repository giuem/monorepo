import { Post } from '../../types/post';

import { PROSE } from './prose';

export const PostHeader: React.FC<{ post: Post }> = ({ post }) => (
  <header className={`mb-8 sm:mb-10 md:mb-12 ${PROSE}`}>
    <h1>{post.frontmatter.title}</h1>
    {post.frontmatter.lead && <p className="lead">{post.frontmatter.lead}</p>}
  </header>
);
