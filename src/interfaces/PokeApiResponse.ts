export interface PokeAPIResponse {
  count: number;
  next: string;
  previous: string | null | undefined;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: any;
  types: any;
  moves: any;
}
