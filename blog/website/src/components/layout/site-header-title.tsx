import { Link } from "../link";

export type SiteHeaderTitleProps = {
  title: string;
  isPostPage: boolean;
};

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = ({
  title,
  isPostPage,
}) => {
  return (
    <Link className="h-12 flex items-center mr-4" href="/">
      {isPostPage ? (
        <h3 className="font-bold text-3xl">{title}</h3>
      ) : (
        <h1 className="font-semibold text-4xl">{title}</h1>
      )}
    </Link>
  );
};
