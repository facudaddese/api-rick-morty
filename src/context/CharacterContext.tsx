import { createContext } from "react";
import type { Character, Filters } from "../types/Character";

interface ContextInterface {
  data: Character | null;
  error: string;
  loading: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  input: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  debounce: string;
  filters: Filters;
  handleFilters: (key: keyof Filters, value: string) => void;
  clearFilters: () => void;
}

export const CharacterContext = createContext<ContextInterface | null>(null);
