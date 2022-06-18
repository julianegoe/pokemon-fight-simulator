import type { PokeAPI } from "pokeapi-types";

export const filterByType = (
  allPokemon: PokeAPI.Pokemon[],
  searchType: string
): PokeAPI.Pokemon[] => {
  return allPokemon.filter((pokemon: PokeAPI.Pokemon) => {
    return pokemon.types.some((typeEntry: PokeAPI.PokemonType) => {
      return typeEntry.type.name === searchType.toLowerCase();
    });
  });
};
