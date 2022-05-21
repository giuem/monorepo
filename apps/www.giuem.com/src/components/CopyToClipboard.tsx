import { useState, useEffect, useCallback } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useCopyToClipboard } from 'react-use';

type CopyToClipboardProps = {
  text: string;

  duration?: number;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  duration = 2000,
}) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (state.value && !state.error) {
      setCopied(true);
    }
  }, [state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCopied) {
        setCopied(false);
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [isCopied, duration]);

  const handleCopy = useCallback(() => {
    copyToClipboard(text);
  }, [text, copyToClipboard]);

  return (
    <button
      className="p-2 border rounded-md border-slate-500 hover:bg-slate-700 hover:border-slate-400"
      name="copy to clipboard"
      onClick={handleCopy}
    >
      {isCopied ? <FiCheck className="text-green-600" /> : <FiCopy />}
    </button>
  );
};
