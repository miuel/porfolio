// hook to scroll to top of page

import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default useScrollToTop;