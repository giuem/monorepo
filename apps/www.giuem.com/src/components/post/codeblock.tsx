import Highlight, { Prism, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

import { CopyToClipboard } from '../CopyToClipboard';

type CodeblockProps = {
  children: string;
  className: string;
};

const Codeblock: React.FC<CodeblockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, '') as Language;
  const code = children.trim();

  return (
    <Highlight Prism={Prism} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} relative group`}
          style={{ ...style, padding: '1em' }}
        >
          <div className="absolute right-4 top-4 group-hover:opacity-100 opacity-0 transition-opacity">
            <CopyToClipboard text={code} />
          </div>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Codeblock;
