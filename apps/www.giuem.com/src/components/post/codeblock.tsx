import Highlight, { Prism, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

type CodeblockProps = {
  children: string;
  className: string;
};

const Codeblock: React.FC<CodeblockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, '') as Language;

  return (
    <Highlight
      Prism={Prism}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '1em' }}>
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
