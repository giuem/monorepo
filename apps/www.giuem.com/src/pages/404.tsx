import { Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Layout } from '../components/Layout';

// markup
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <h2 className="text-4xl font-semibold">404 Not Found</h2>
      <p className="mt-6 text-lg">
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        哦豁，您要访问的页面似乎不在了，
        <Link className="text-indigo-600 dark:text-indigo-300 underline" to="/">
          回首页看看吧
        </Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
