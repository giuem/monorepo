import { Helmet } from 'react-helmet';

import { SEO } from '../seo/seo';

export const SiteLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <SEO />
      <Helmet>
        <body className="bg-white text-gray-900" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </div>
  );
};
