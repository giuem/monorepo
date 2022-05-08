import { Helmet } from 'react-helmet';
import { FaRss } from 'react-icons/fa';

import { SiteHeader } from './SiteHeader';

const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-8 flex justify-between items-center">
      <section>GIUEM &copy; {year}</section>
      <section>
        <a
          href="/rss.xml"
          target="_blank"
          className="text-indigo-600 dark:text-indigo-300 flex items-center underline"
        >
          <FaRss />
          <span className="ml-1">RSS</span>
        </a>
      </section>
    </footer>
  );
};

export const Layout: React.FC<
  React.PropsWithChildren<{ isPost?: boolean }>
> = ({ children, isPost }) => {
  return (
    <>
      <Helmet>
        <html lang="zh-CN" />
        <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-100" />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 lg:px-0 flex flex-col min-h-screen">
        <SiteHeader isPost={isPost} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
};
