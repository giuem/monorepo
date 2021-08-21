import { Link } from '../link';

type SiteHeaderNavProps = {
  items: NavItem[];
};

export const SiteHeaderNav: React.FC<SiteHeaderNavProps> = ({ items }) => {
  return (
    <nav className="mt-8 -ml-3">
      <ul className="flex items-center space-x-2 text-xl text-indigo-700">
        {items.map(({ title, href }) => (
          <li key={href}>
            <Link
              className="rounded md:hover:bg-indigo-50 py-3 px-4 transition-all duration-100"
              activeClassName="md:bg-indigo-50 underline md:no-underline"
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
