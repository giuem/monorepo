import { graphql, useStaticQuery } from 'gatsby';

import { DarkModeToggleButton } from './DarkModeToggle';
import { Link } from './Link';

type SiteHeaderProps = {
  isPost?: boolean;
};

export const SiteHeader: React.FC<SiteHeaderProps> = ({ isPost = false }) => {
  const {
    site: {
      siteMetadata: { title, nav: navItems },
    },
  } = useStaticQuery<{
    site: { siteMetadata: Pick<SiteMetadata, 'nav' | 'title'> };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          nav {
            href
            title
          }
        }
      }
    }
  `);

  const Title = isPost ? 'h3' : 'h1';

  return (
    <header className="flex flex-col mt-10 mb-20">
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center mr-4 umami--click--site-title"
          to="/"
        >
          <Title
            className="font-semibold text-3xl from-indigo-600 to-rose-600 bg-gradient-to-r bg-clip-text text-transparent"
            style={{ lineHeight: '48px' }}
          >
            {title}
          </Title>
        </Link>
        <DarkModeToggleButton />
      </div>
      <nav
        className="
        mt-4 md:-mx-3
        flex items-center md:space-x-2 space-x-4 text-lg text-indigo-700 dark:text-indigo-200
        "
      >
        {navItems.map(({ title, href }) => (
          <Link
            key={href}
            className={`
              rounded-md md:hover:bg-indigo-50 md:hover:dark:bg-indigo-900 py-1 md:px-3 transition-colors
              umami--click--nav-item-${title}`}
            activeClassName="md:bg-indigo-50 md:dark:bg-indigo-900 md:no-underline underline"
            to={href}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
