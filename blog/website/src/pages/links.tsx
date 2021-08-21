import { PageProps, graphql } from "gatsby";
import { sortBy } from "lodash-es";

import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";
import { SiteLayout } from "../components/layout/site-layout";
import { LinkContainer } from "../components/links/link-container";
import { LinkItem } from "../components/links/link-item";

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        links {
          title
          href
          avatar
          slogan
        }
      }
    }
  }
`;

type Link = {
  title: string;
  href: string;
  avatar: string;
  slogan: string;
};

const LinksPage: React.FC<
  PageProps<{ site: { siteMetadata: { links: Link[] } } }>
> = (props) => {
  const links = sortBy(props.data.site.siteMetadata.links, "title");

  return (
    <SiteLayout>
      <SiteHeader></SiteHeader>
      <section>
        <LinkContainer>
          {links.map((link) => (
            <LinkItem key={link.href} {...link} />
          ))}
        </LinkContainer>
      </section>
      <SiteFooter />
    </SiteLayout>
  );
};

export default LinksPage;
