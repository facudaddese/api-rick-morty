import { useState } from "react";

export const useInput = (
  setPage: React.Dispatch<React.SetStateAction<number>>,
) => {
  const [input, setInput] = useState("");

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
    setPage(1);
  };

  return { input, handleInput };
};
