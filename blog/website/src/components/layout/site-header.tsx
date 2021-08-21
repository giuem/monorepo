import { graphql, useStaticQuery } from 'gatsby';

import { SiteHeaderNav } from './site-header-nav';
import { SiteHeaderTitle } from './site-header-title';

type SiteHeaderProps = {
  isPostPage?: boolean;
};

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  isPostPage = false,
}) => {
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

  return (
    <header className="flex flex-col mt-10 mb-20">
      <SiteHeaderTitle title={title} isPostPage={isPostPage} />
      <SiteHeaderNav items={navItems} />
    </header>
  );
};
