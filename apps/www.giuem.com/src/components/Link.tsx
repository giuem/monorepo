import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { BiLink } from 'react-icons/bi';

type LinkProps<TState> = GatsbyLinkProps<TState>;

export const Link = <TState,>({
  to,
  children,
  ...props
}: React.PropsWithoutRef<LinkProps<TState>>) => {
  const isInternalLink = /^\/(?!\/)/.test(to) && props.target !== '_blank';
  const isHash = /^#/.test(to);

  if (isInternalLink) {
    return (
      <GatsbyLink<TState> to={to} activeClassName="active" {...props}>
        {children}
      </GatsbyLink>
    );
  }

  if (isHash) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      <BiLink className="inline" />
      {children}
    </a>
  );
};
