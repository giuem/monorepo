import { Link } from "./Link";

type SiteHeaderNavProps = {
  items: NavItem[];
};

export const SiteHeaderNav: React.FC<SiteHeaderNavProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex gap-4 text-xl text-indigo-700">
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
