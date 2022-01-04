import { MDXProviderComponents } from '@mdx-js/react';

import { Link } from '../link';

import Codeblock from './codeblock';
import { PROSE } from './prose';

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => (
    <section className={`${PROSE} text-justify`} {...props} />
  ),
  a: (props) => (
    <Link
      className="hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors break-all"
      {...props}
    />
  ),
  pre: (props) => <div {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img {...props} decoding="async" />,
  del: (props) => (
    <del
      {...props}
      className="bg-gray-700 dark:bg-gray-300 hover:bg-transparent dark:hover:bg-transparent text-transparent hover:text-current no-underline cursor-pointer"
      title="被你发现了"
      aria-label={props.children}
    />
  ),
  code: Codeblock,
};
