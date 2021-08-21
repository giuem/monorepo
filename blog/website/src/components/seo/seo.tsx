import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { BlogPosting, WebSite } from 'schema-dts';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;

  isArticle?: boolean;
};

type SEOQueryType = {
  site: {
    siteMetadata: {
      title: string;
      titleTemplate?: string;
      description: string;
      siteUrl: string;
      image: string;
      author: {
        name: string;
      };
      social?: {
        twitter?: string;
      };
    };
  };
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
        author {
          name
        }
        social {
          twitter
        }
      }
    }
  }
`;

type SchemaOrgProps = {
  url: string;
  title: string;
  isArticle: boolean;
};

// const SchemaOrg: React.FC<SchemaOrgProps> = ({ url, title, isArticle }) => {
//   const jsonLdScripts = [
//     helmetJsonLdProp<WebSite>({
//       "@context": "https://schema.org",
//       "@type": "WebSite",
//       url: url,
//       name: title,
//     }),
//     // @todo: need more fields
//     isArticle &&
//       helmetJsonLdProp<BlogPosting>({
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         url,
//         name: title,
//       }),
//   ].filter(Boolean);

//   return <Helmet script={jsonLdScripts} />;
// };

export const SEO: React.FC<SEOProps> = (props) => {
  const {
    site: { siteMetadata: seo },
  } = useStaticQuery<SEOQueryType>(query);

  const { image, isArticle = false, pathname = '/' } = props;
  const hasImage = Boolean(image);
  const url = `${seo.siteUrl}${pathname}`;
  const title = props.title ? props.title : seo.title;
  const description = props.description ? props.description : seo.description;

  return (
    <>
      <Helmet titleTemplate={seo.titleTemplate}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {hasImage && <meta name="image" content={image} />}

        {isArticle ? <meta property="og:type" content="article" /> : null}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {hasImage && <meta property="og:image" content={image} />}

        <meta name="twitter:card" content="summary_large_image" />
        {seo?.social?.twitter && (
          <meta name="twitter:creator" content={seo.social.twitter} />
        )}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {hasImage && <meta name="twitter:image" content={image} />}
      </Helmet>

      {/* <SchemaOrg url={url} title={title} isArticle={isArticle} /> */}
    </>
  );
};
