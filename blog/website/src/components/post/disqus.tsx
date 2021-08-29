import DisqusJS from 'disqusjs';
import { useStaticQuery, graphql } from 'gatsby';
import { useEffect } from 'react';

// eslint-disable-next-line import/no-unresolved
import css from '!!raw-loader!disqusjs/dist/disqusjs.css';

type DisqusProps = {
  title: string;
  slug: string;
  url: string;
};

export const Disqus: React.FC<DisqusProps> = ({ title, slug, url }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle: title
          siteUrl
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setTimeout(() => {
      new DisqusJS({
        shortname: 'giuem',
        siteName: siteTitle,
        identifier: slug,
        url: siteUrl + `/${url}/`.replace(/\/\//g, '/'),
        title: title,
        api: 'https://disqus.giuem.com/',
        apikey:
          'aQpOK5Wj0ZjWy8bAPxcC5se1OhNhuVjmSDp0h50D2JmtcPoSaBCLXTeasNZYUuxU',
        admin: 'giuem',
        adminLabel: 'Mod',
      });
    }, 1000);
  }, [siteTitle, siteUrl, slug, title, url]);

  return (
    <div className="mt-16 py-12">
      <style id="disqus_thread_style">{css}</style>
      <div id="disqus_thread"></div>
    </div>
  );
};
