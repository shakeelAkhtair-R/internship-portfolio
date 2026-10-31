import { useState, useEffect } from 'react';

type UseFileExistsResult = {
  exists: boolean;
  loading: boolean;
};

export function useFileExists(filePath: string): UseFileExistsResult {
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(filePath, { method: 'HEAD' })
      .then((res) => {
        setExists(res.ok);
        setLoading(false);
      })
      .catch(() => {
        setExists(false);
        setLoading(false);
      });
  }, [filePath]);

  return { exists, loading };
}
