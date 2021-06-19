import { graphql, useStaticQuery } from "gatsby";
import { SiteHeaderNav } from "./SiteHeaderNav";
import { SiteHeaderTitle } from "./SiteHeaderTitle";

export const SiteHeader: React.FC = () => {
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
    <header>
      <SiteHeaderTitle title={title} />
      <SiteHeaderNav items={navItems} />
    </header>
  );
};
