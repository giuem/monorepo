import { FaRss } from 'react-icons/fa';

export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-8 flex justify-between">
      <section>&copy; {year} GIUEM</section>
      <section>
        <a
          href="/rss.xml"
          target="_blank"
          className="text-indigo-700 flex items-center"
        >
          <FaRss />
          <span className="ml-1">RSS</span>
        </a>
      </section>
    </footer>
  );
};
