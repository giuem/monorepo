import { graphql, useStaticQuery } from "gatsby";
import { SiteHeaderNav } from "./SiteHeaderNav";
import { SiteHeaderTitle } from "./SiteHeaderTitle";

type SiteHeaderProps = {
  withoutTitle?: boolean;
};

export const SiteHeader: React.FC<SiteHeaderProps> = ({ withoutTitle }) => {
  const {
    site: {
      siteMetadata: { title, nav: navItems },
    },
  } = useStaticQuery<{
    site: { siteMetadata: Pick<SiteMetadata, "nav" | "title"> };
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
    <header className="my-6">
      {withoutTitle ? null : <SiteHeaderTitle title={title} />}
      <SiteHeaderNav items={navItems} />
    </header>
  );
};
