import { PageProps, graphql } from 'gatsby';
import { sortBy } from 'lodash-es';

import { Layout } from '../components/Layout';
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
      <ul className="flex flex-wrap">
        {links.map((link) => (
          <li
            key={link.href}
            className="w-1/2 sm:w-1/3 md:w-1/4 text-center p-3 my-4"
          >
            <LinkItem {...link} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default LinksPage;
