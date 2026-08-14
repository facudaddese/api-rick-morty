import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

const useAppContext = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error(
      "useCharacterContext debe usarse dentro de CharacterProvider",
    );
  }

  return context;
};

export default useAppContext;
