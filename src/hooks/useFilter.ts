import { useState } from "react";
import type { Filters } from "../types/Character";

export const useFilter = (
  setPage: React.Dispatch<React.SetStateAction<number>>,
  initialState: Filters,
) => {
  const [filters, setFilters] = useState(initialState);

  const handleFilters = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const clearFilters = () => setFilters(initialState);

  return { filters, handleFilters, clearFilters };
};
