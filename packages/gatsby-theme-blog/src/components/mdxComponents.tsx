import { MDXProviderComponents } from "@mdx-js/react";

export const mdxComponents: MDXProviderComponents = {
  wrapper: (props) => (
    <section
      className="prose md:prose-lg xl:prose-xl prose-indigo max-w-none"
      {...props}
    />
  ),
};
