import { MDXProviderComponents } from '@mdx-js/react';

import { Link } from '../link';

import Codeblock from './codeblock';

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => (
    <section
      className="prose sm:prose-lg xl:prose-xl prose-indigo dark:prose-dark max-w-none text-justify"
      {...props}
    />
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
  code: Codeblock,
};
