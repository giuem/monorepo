import { MDXProviderComponents } from "@mdx-js/react";
import { Link } from "../link";

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => (
    <section
      className="prose md:prose-lg xl:prose-xl prose-indigo max-w-none"
      {...props}
    />
  ),
  a: (props) => <Link className="hover:bg-indigo-100" {...props} />,
};
