import { Link } from '../link';

export type SiteHeaderTitleProps = {
  title: string;
  isPostPage: boolean;
};

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = ({
  title,
  isPostPage,
}) => {
  return (
    <Link
      className="h-12 flex items-center mr-4 from-indigo-600 via-purple-600 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent "
      href="/"
    >
      {isPostPage ? (
        <h3 className="font-semibold text-4xl">{title}</h3>
      ) : (
        <h1 className="font-semibold text-4xl">{title}</h1>
      )}
    </Link>
  );
};
