import React, { useEffect, useState } from "react";

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    console.log(window);
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.scrollHeight - document.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useReadingProgress;
