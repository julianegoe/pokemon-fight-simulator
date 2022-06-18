<script lang="ts" setup>
import { computed, defineProps } from "vue";
import type { PokeAPI } from "pokeapi-types";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonItem from "@/components/PokemonItem.vue";

const store = usePokemonStore();

const currentType = computed(() => store.typeName)

defineProps<{
  pokemonList: PokeAPI.Pokemon[] | null;
}>();
</script>

<template>
  <div class="p-4 h-[30rem] overflow-y-scroll border-b border-black">
    <h1 class="text-xl font-bold">
      Pokemon of type: {{ currentType }}
    </h1>
    <ul class="grid grid-cols-1 gap-y-4">
      <li class="p-1" v-for="pokemon in pokemonList" :key="pokemon.id">
        <PokemonItem
          :pokemon-name="pokemon.name"
          :pokemon-url="pokemon.sprites.front_default"
          :pokemon-types="pokemon.types"
        />
      </li>
    </ul>
  </div>
</template>
