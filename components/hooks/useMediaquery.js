/* Check for browser width being 700 */

import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [breakPoint, setBreakPoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBreakPoint(window.innerWidth <= 700);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakPoint;
};
export default useMediaQuery;
