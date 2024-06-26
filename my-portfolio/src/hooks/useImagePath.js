import { useEffect, useState } from 'react';

/**
 * Hook to detect if i'm in dev env or prod 
 * */ 

function useImagePath(imagePath) {
  const [resolvedPath, setResolvedPath] = useState('');

  useEffect(() => {
    const isLocalEnvironment = process.env.NODE_ENV === 'development';
    const path = isLocalEnvironment ? process.env.PUBLIC_URL + imagePath : '/porfolio' + imagePath;
    setResolvedPath(path);
  }, [imagePath]);

  return resolvedPath;
}

export default useImagePath;