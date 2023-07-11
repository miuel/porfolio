import { useEffect, useState } from 'react';

function useImagePath(imagePath) {
  const [resolvedPath, setResolvedPath] = useState('');

  useEffect(() => {
    const isLocalEnvironment = process.env.NODE_ENV === 'development';
    const path = isLocalEnvironment ? process.env.PUBLIC_URL + imagePath : imagePath;
    setResolvedPath(path);
  }, [imagePath]);

  return resolvedPath;
}

export default useImagePath;