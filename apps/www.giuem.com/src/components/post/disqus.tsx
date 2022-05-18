import { DisqusJS } from 'disqusjs/react';
import { useStaticQuery, graphql } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';

import 'disqusjs/react/styles/disqusjs.css';

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

  const [shouldLoad, setShouldLoad] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!shouldLoad && intersection?.isIntersecting) {
      setShouldLoad(true);
    }
  }, [shouldLoad, intersection]);

  return (
    <div className="mt-16 py-12" ref={intersectionRef}>
      <style id="disqus_thread_style">
        {/* {css} */}
        {`
        .dark #dsqjs .dsqjs-post-body { color: #eee; }
        .dark #dsqjs .dsqjs-no-comment { color: #ccc; }
        .dark #dsqjs .dsqjs-order-label { background-color: #343434; }
        .dark #dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-meta { color: #ccc; }
        .dark #dsqjs .dsqjs-nav-tab { color: #ccc; }
        .dark #dsqjs .dsqjs-tab-active { color: #eee; }
        `}
      </style>
      {shouldLoad && (
        <DisqusJS
          shortname="giuem"
          siteName={siteTitle}
          identifier={slug}
          url={siteUrl + `/${url}/`.replace(/\/\//g, '/')}
          title={title}
          api="https://disqus.giuem.com/"
          apikey="aQpOK5Wj0ZjWy8bAPxcC5se1OhNhuVjmSDp0h50D2JmtcPoSaBCLXTeasNZYUuxU"
          admin="giuem"
          adminLabel="Mod"
          nocomment="还没有评论哦"
        />
      )}
    </div>
  );
};
