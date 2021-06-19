export type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="font-semibold text-3xl my-6 sm:text-5xl sm:my-11 ">
      {title}
    </h1>
  );
};
