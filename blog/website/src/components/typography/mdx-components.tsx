import { MDXProviderComponents } from '@mdx-js/react';

import { Link } from '../link';

import Codeblock from './codeblock';

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => (
    <section
      className="prose md:prose-lg xl:prose-xl prose-indigo max-w-none"
      {...props}
    />
  ),
  a: (props) => <Link className="hover:bg-indigo-100" {...props} />,
  pre: (props) => <div {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img {...props} decoding="async" />,
  code: Codeblock,
};
