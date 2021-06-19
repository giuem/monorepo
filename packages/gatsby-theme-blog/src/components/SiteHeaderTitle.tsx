export type SiteHeaderTitleProps = {
  title: string;
};

export const SiteHeaderTitle: React.FC<SiteHeaderTitleProps> = ({ title }) => {
  return (
    <h1 className="font-semibold text-3xl my-6 sm:text-5xl sm:my-10 ">
      {title}
    </h1>
  );
};
