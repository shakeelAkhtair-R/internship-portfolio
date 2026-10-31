import { useState, useEffect } from 'react';

type UsePhotoResult = {
  hasPhoto: boolean;
};

export function usePhoto(photoPath: string): UsePhotoResult {
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    fetch(photoPath, { method: 'HEAD' })
      .then((res) => setHasPhoto(res.ok))
      .catch(() => setHasPhoto(false));
  }, [photoPath]);

  return { hasPhoto };
}
