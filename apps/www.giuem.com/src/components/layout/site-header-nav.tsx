import { Link } from '../link';

type SiteHeaderNavProps = {
  items: NavItem[];
};

export const SiteHeaderNav: React.FC<SiteHeaderNavProps> = ({ items }) => {
  return (
    <nav className="mt-8 md:-mx-3">
      <ul className="flex items-center md:space-x-2 space-x-4 text-lg text-indigo-700 dark:text-indigo-200">
        {items.map(({ title, href }) => (
          <li key={href}>
            <Link
              className="rounded-md md:hover:bg-indigo-50 md:hover:dark:bg-indigo-900 py-2 md:px-3 transition-colors"
              activeClassName="md:bg-indigo-50 md:dark:bg-indigo-900 md:no-underline underline"
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
