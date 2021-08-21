import { Helmet } from 'react-helmet';

// const FONT_LINK =
//   'https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap';

export const SiteLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 flex flex-col min-h-screen">
      <Helmet>
        <html lang="zh-CN" />
        <body className="bg-white text-gray-900" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link rel="preload" as="style" href={FONT_LINK} />
        <link
          href={FONT_LINK}
          rel="print"
          onLoad="if(media!='all')media='all'"
        />
        <noscript>{`<link rel="stylesheet" href="${FONT_LINK}" />`}</noscript> */}
      </Helmet>
      {children}
    </div>
  );
};
