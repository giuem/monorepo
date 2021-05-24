import { MDXProviderComponents } from "@mdx-js/react";

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => <section className="prose" {...props} />,
};
