import './zen.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type LinkProps = {
  title: string;
  href: string;
  avatar: string;
  slogan: string;
};

export const LinkItem: React.FC<LinkProps> = ({
  title,
  href,
  avatar,
  slogan,
}) => {
  return (
    <li className="w-1/2 sm:w-1/3 md:w-1/4 text-center p-3 my-4 zen">
      <OutboundLink
        eventAction="click"
        eventCategory="friend-link"
        className="text-indigo-600 dark:text-indigo-300"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <div
          className="relative mx-auto"
          style={{ width: '90%', paddingBottom: '90%' }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover border-2 border-indigo-600 dark:border-indigo-300 transition-all duration-700"
            style={{
              borderRadius: 'var(--border-radius)',
              transform: 'var(--transform)',
            }}
            src={avatar}
            alt={`avatar ${title}`}
            decoding="async"
            loading="lazy"
          />
        </div>
        <p className="font-semibold text-lg mt-2">{title}</p>
      </OutboundLink>
      <p className="mt-2">{slogan}</p>
    </li>
  );
};
