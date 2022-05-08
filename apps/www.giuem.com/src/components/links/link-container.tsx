export const LinkContainer: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <ul className="flex flex-wrap">{children}</ul>;
};
