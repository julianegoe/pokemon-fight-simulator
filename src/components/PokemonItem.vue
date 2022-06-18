<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PokeAPI } from "pokeapi-types";
import { usePokemonStore } from "@/stores/pokemon";

const props = defineProps<{
  pokemonUrl: string;
  pokemonName: string;
  pokemonTypes: PokeAPI.PokemonType[];
}>();

const capitalizedName = computed(() => {
  return props.pokemonName[0].toUpperCase() + props.pokemonName.slice(1);
});
const isLoading = ref(false);
</script>
<template>
  <div class="flex items-center border border-black" v-if="!isLoading">
    <div
      class="border border-black rounded-full p-2 my-2 ml-2 mr-4"
    >
      <img class="w-16" :src="pokemonUrl" alt="pokemon" />
    </div>
    <div class="text-lg font-bold pr-8">{{ capitalizedName }}</div>
    <div
      class="text-xs pb-0.5 px-2 mr-2 rounded-2xl bg-nb-light-green"
      v-for="type in pokemonTypes"
      :key="type.id"
    >
      {{ type.type.name }}
    </div>
  </div>
</template>
