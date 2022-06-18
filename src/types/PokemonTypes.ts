export interface PokemonType {
  name: string;
  id: number;
}

export const pokemonTypes: PokemonType[] = [
  { name: "Normal", id: 1 },
  { name: "Fighting", id: 2 },
  { name: "Flying", id: 3 },
  { name: "Poison", id: 4 },
  { name: "Ground", id: 5 },
  { name: "Rock", id: 6 },
  { name: "Bug", id: 7 },
  { name: "Ghost", id: 8 },
  { name: "Steel", id: 9 },
  { name: "Fire", id: 10 },
  { name: "Water", id: 11 },
  { name: "Grass", id: 12 },
  { name: "Electric", id: 13 },
  { name: "Psychic", id: 14 },
  { name: "Ice", id: 15 },
  { name: "Dragon", id: 16 },
  { name: "Dark", id: 17 },
  { name: "Fairy", id: 18 },
];

export interface PokemonRepo {
  name: string;
  sprite: string;
  types: { name: string; id: number }[];
}
