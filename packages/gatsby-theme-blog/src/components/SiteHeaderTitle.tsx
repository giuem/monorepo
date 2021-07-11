import { Link } from "./Link";

export type SiteHeaderTitleProps = {
  title: string;
  isPostPage: boolean;
};

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = ({
  title,
  isPostPage,
}) => {
  return (
    <Link href="/">
      {isPostPage ? (
        <h3 className="font-bold text-3xl text-indigo-800">{title}</h3>
      ) : (
        <h1 className="font-semibold text-4xl">{title}</h1>
      )}
    </Link>
  );
};
