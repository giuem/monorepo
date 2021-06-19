import { Link as GatsbyLink } from "gatsby";

type LinkProps = {
  href: string;
};

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const isInternalLink = /^\/(?!\/)/.test(href);

  if (isInternalLink) {
    return (
      <GatsbyLink to={href} activeClassName="active" {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};
