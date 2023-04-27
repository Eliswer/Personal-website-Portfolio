import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [breakPoint, setBreakPoint] = useState(false);

  useEffect(() => {
    setBreakPoint(window.innerWidth <= 700);
  }, []);

  return breakPoint;
};

export default useMediaQuery;
