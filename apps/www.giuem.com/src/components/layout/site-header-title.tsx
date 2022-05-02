import { Link } from '../link';

export type SiteHeaderTitleProps = {
  title: string;
  isPostPage: boolean;
};

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = ({
  title,
  isPostPage,
}) => {
  const Title = isPostPage ? 'h3' : 'h1';

  return (
    <Link className="flex items-center mr-4" href="/">
      <Title
        className="font-semibold text-3xl from-indigo-600 to-rose-600 bg-gradient-to-r bg-clip-text text-transparent"
        style={{ lineHeight: '48px' }}
      >
        {title}
      </Title>
    </Link>
  );
};
