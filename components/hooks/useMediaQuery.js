import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [breakPoint, setBreakPoint] = useState();

  useEffect(() => {
    setBreakPoint(window.innerWidth <= 992);
  }, []);

  return breakPoint;
};

export default useMediaQuery;
