import { defineStore } from "pinia";
import type { PokeAPI } from "pokeapi-types";
import { getAllPokemon, getPokemon, getType } from "@/services/RequestService";
import { filterByType } from "@/services/FilterService";
import { usePokemon } from "@/components/composables/usePokemon";

interface PokeState {
  typeName: string;
  typeInfo: PokeAPI.Type | null;
  pokemonList: PokeAPI.Pokemon[];
  isLoading: boolean;
}

export const usePokemonStore = defineStore({
  id: "pokemon",
  state: (): PokeState => ({
    typeName: "Normal",
    typeInfo: null,
    pokemonList: [],
    isLoading: true,
  }),
  getters: {
    getPokemonFilteredByType: (state: PokeState): PokeAPI.Pokemon[] => {
      return filterByType(state.pokemonList, state.typeName);
    },
  },
  actions: {
    async getAllPokemon() {
      const pokeRepo: PokeAPI.Pokemon[] = [];
      const allPokemon = await getAllPokemon();
      for (const pokemon of allPokemon) {
        const pokemonItem = await getPokemon(pokemon.url);
        pokeRepo.push(pokemonItem);
      }
      this.pokemonList = pokeRepo;
      this.isLoading = false
    },
    async getTypeInfo(typeName: string) {
      this.typeInfo = await getType(typeName);
    },
  },
});
