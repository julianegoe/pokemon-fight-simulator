import type { PokeAPI } from "pokeapi-types";
import type { PokemonRepo } from "@/types/PokemonTypes";

export const getAllPokemon = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=386"
    );
    const allPokemon = await response.json();
    return allPokemon.results;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemon = async (url: string): Promise<PokeAPI.Pokemon> => {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
};

export const getType = async (typeName: string) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/type/" + typeName.toLowerCase()
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
