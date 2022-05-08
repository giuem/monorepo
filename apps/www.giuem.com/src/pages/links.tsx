import { PageProps, graphql } from 'gatsby';
import { sortBy } from 'lodash-es';

import { Layout } from '../components/Layout';
import { LinkContainer } from '../components/links/link-container';
import { LinkItem } from '../components/links/link-item';
import { SEO } from '../components/SEO';

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
  const links = sortBy(props.data.site.siteMetadata.links, 'title');

  return (
    <Layout>
      <SEO title="链接" pathname={props.path} />
      <LinkContainer>
        {links.map((link) => (
          <LinkItem key={link.href} {...link} />
        ))}
      </LinkContainer>
    </Layout>
  );
};

export default LinksPage;
