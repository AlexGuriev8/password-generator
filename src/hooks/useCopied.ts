import { useState, useEffect } from 'react';
import useCopyToClipboard from './useCopyToClipboard';

function useCopied(copiedText = '') {
  const [copied, setCopied] = useState(false);

  const [, copy] = useCopyToClipboard();

  const onCopy = () => {
    if (!copiedText) return;
    copy(copiedText);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1300);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [copied]);

  return {
    copied,
    onCopy,
  };
}

export default useCopied;
