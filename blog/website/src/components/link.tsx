import { Link as GatsbyLink } from "gatsby";
import { ExternalLink } from "../icons/external-link";

type LinkProps = {
  href: string;
  // @TODO: Fix types
  [key: string]: unknown;
};

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const isInternalLink = /^\/(?!\/)/.test(href);
  const isHash = /^#/.test(href);

  if (isInternalLink) {
    return (
      <GatsbyLink to={href} activeClassName="active" {...props}>
        {children}
      </GatsbyLink>
    );
  }

  if (isHash) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children} <ExternalLink />
    </a>
  );
};
