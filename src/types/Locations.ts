import type { Info, GenericResults } from "./Character";

export interface Results extends GenericResults {
  type: string;
  dimension: string;
  residents: string[];
}

export interface Location {
  info: Info;
  results: Results[];
}
