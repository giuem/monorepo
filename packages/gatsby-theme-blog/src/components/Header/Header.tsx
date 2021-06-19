import { graphql, useStaticQuery } from "gatsby";
import { Nav } from "./Nav";
import { Title } from "./Title";

export const Header: React.FC = () => {
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
      <Title title={title} />
      <Nav items={navItems} />
    </header>
  );
};
