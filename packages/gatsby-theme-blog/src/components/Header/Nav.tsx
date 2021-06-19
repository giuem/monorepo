import { Link } from "../Link";

type NavProps = {
  items: NavItem[];
};

export const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex gap-4 text-xl text-indigo-700">
        {items.map(({ title, href }) => (
          <li key={href} className="hover:underline">
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
