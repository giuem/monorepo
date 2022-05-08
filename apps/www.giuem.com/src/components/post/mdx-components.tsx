import { MDXProviderComponents } from '@mdx-js/react';
import Zoom from 'react-medium-image-zoom';

import { Link } from '../link';

import Codeblock from './codeblock';
import { PROSE } from './prose';
import 'react-medium-image-zoom/dist/styles.css';

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
  img: (props) => <img {...props} decoding="async" alt={props.alt} />,
  picture: (props) => (
    <Zoom
      wrapElement="span"
      wrapStyle={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      overlayBgColorStart="rgba(0,0,0,0)"
      overlayBgColorEnd="rgba(0,0,0,0.95)"
    >
      <picture {...props} />
    </Zoom>
  ),
  del: (props) => (
    <del
      {...props}
      className="bg-gray-700 dark:bg-gray-300 hover:bg-transparent dark:hover:bg-transparent text-transparent hover:text-current no-underline cursor-pointer"
      title="被你发现了"
      aria-label={props.children}
    />
  ),
  code: Codeblock,
  undefined: (props) => <>{props.children}</>,
};
