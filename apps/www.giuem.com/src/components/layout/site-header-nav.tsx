import { Link } from '../link';

type SiteHeaderNavProps = {
  items: NavItem[];
};

export const SiteHeaderNav: React.FC<SiteHeaderNavProps> = ({ items }) => {
  return (
    <nav className="mt-8 -ml-3">
      <ul className="flex items-center space-x-2 text-xl text-indigo-700 dark:text-indigo-200">
        {items.map(({ title, href }) => (
          <li key={href}>
            <Link
              className="rounded md:hover:bg-indigo-50 md:dark:hover:bg-indigo-900 py-3 px-4 transition-colors"
              activeClassName="md:bg-indigo-50 md:dark:bg-indigo-900 underline md:no-underline"
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
