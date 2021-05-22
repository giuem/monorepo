import { Helmet } from "react-helmet";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <body className="bg-white text-gray-900" />
      </Helmet>
      {children}
    </div>
  );
};
