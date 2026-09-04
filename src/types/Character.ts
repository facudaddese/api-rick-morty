export type Status = "Alive" | "Dead" | "Unknown";

export type Species =
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Unknown"
  | "Robot"
  | "Planet"
  | "Animal"
  | "Disease"
  | "Cronenberg"
  | "Poopybutthole"
  | "Mythological";

export type Gender = "Female" | "Male" | "Genderless" | "Unknown";

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Character {
  info: Info;
  results: Results[];
}

export interface Filters {
  status: string;
  species: string;
  gender: string;
}

export type GenericResults = Omit<
  Results,
  | "status"
  | "species"
  | "type"
  | "gender"
  | "origin"
  | "location"
  | "image"
  | "episode"
>;

export interface ApiResponse<T> {
  info: Info;
  results: T[];
}

export type FetchResult<T> = T | T[];
