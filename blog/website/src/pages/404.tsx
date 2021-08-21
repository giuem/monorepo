import { Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import { SiteContent } from '../components/layout/site-content';
import { SiteFooter } from '../components/layout/site-footer';
import { SiteHeader } from '../components/layout/site-header';
import { SiteLayout } from '../components/layout/site-layout';

// markup
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <SiteHeader />
      <SiteContent>
        <h2 className="text-4xl font-semibold">404 Not Found</h2>
        <p className="mt-6 text-lg">
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{' '}
          哦豁，您要访问的页面似乎不在了，
          <Link className="text-indigo-600 underline" to="/">
            回首页看看吧
          </Link>
        </p>
      </SiteContent>
      <SiteFooter />
    </SiteLayout>
  );
};

export default NotFoundPage;
