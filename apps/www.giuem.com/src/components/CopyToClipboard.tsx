import { CgClipboard } from 'react-icons/cg';
import { useCopyToClipboard } from 'react-use';

type CopyToClipboardProps = {
  text: string;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <button className="p-4">
      <CgClipboard />
    </button>
  );
};
