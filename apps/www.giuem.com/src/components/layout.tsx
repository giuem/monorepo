import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FaRss } from 'react-icons/fa';

import { DarkModeToggleButton } from './dark-mode-toggle';
import { Link } from './link';

type SiteHeaderProps = {
  isPost?: boolean;
};

const SiteHeader: React.FC<SiteHeaderProps> = ({ isPost = false }) => {
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
        <Link className="flex items-center mr-4" href="/">
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
            className="rounded-md md:hover:bg-indigo-50 md:hover:dark:bg-indigo-900 py-1 md:px-3 transition-colors"
            activeClassName="md:bg-indigo-50 md:dark:bg-indigo-900 md:no-underline underline"
            href={href}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-8 flex justify-between items-center">
      <section>GIUEM &copy; {year}</section>
      <section>
        <a
          href="/rss.xml"
          target="_blank"
          className="text-indigo-600 dark:text-indigo-300 flex items-center underline"
        >
          <FaRss />
          <span className="ml-1">RSS</span>
        </a>
      </section>
    </footer>
  );
};

export const Layout: React.FC<
  React.PropsWithChildren<{ isPost?: boolean }>
> = ({ children, isPost }) => {
  return (
    <>
      <Helmet>
        <html lang="zh-CN" />
        <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-100" />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 lg:px-0 flex flex-col min-h-screen">
        <SiteHeader isPost={isPost} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
};
