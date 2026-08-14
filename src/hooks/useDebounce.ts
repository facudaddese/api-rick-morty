import { useEffect, useState } from "react";

export const useDebounce = (input: string) => {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(input);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input]);

  return { debounce };
};
