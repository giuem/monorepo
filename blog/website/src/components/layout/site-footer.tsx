import { FaRss } from 'react-icons/fa';

export const SiteFooter: React.FC = () => {
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
