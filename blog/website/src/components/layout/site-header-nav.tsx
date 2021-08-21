import { Link } from "../link";

type SiteHeaderNavProps = {
  items: NavItem[];
};

export const SiteHeaderNav: React.FC<SiteHeaderNavProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex items-center h-12 space-x-4 text-xl text-indigo-700">
        {items.map(({ title, href }) => (
          <li key={href}>
            <Link
              className="hover:underline"
              activeClassName="underline"
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
