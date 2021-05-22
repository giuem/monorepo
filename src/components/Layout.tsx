import { Helmet } from "react-helmet";
import { SEO } from "./SEO";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto">
      <SEO />
      <Helmet>
        <body className="bg-white text-gray-900" />
      </Helmet>
      {children}
    </div>
  );
};
