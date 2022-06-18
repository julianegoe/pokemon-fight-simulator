import { getAllPokemon } from "@/services/RequestService";
import { useQuery } from "vue-query";

export function usePokemon() {
  return useQuery("allPokemon", getAllPokemon);
}
