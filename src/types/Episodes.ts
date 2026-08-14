import type { GenericResults, Info } from "./Character";

export interface Results extends GenericResults {
  air_date: string;
  episode: string;
  characters: string[];
}

export interface Episode {
  info: Info;
  results: Results[];
}
