<script setup lang="ts">
import { type PokemonType, pokemonTypes } from "@/types/PokemonTypes";
import PokemonWidget from "@/components/PokemonWidget.vue";
import { usePokemonStore } from "@/stores/pokemon";
import { onMounted } from "vue";
import ScatterPlot from "@/components/globals/ScatterPlot.vue";

const store = usePokemonStore();

const pokeType: PokemonType[] = pokemonTypes;

async function getTypeInfo(typeName: string) {
  store.typeName = typeName;
  await store.getTypeInfo(typeName);
}

onMounted(() => {
  store.getAllPokemon();
});
</script>

<template>
  <main class="grid grid-cols-12">
    <header class="col-span-full grid grid-cols-12 border-b border-black">
      <div class="col-span-2 row-span-1 border-r border-black">
        <div class="p-2 font-bold bg-nb-light-green">PokéTypes</div>
      </div>
      <div class="col-start-3 col-span-full row-span-1">
        <img
          class="absolute w-5 mt-2.5 ml-2"
          src="../assets/icons/search.svg"
          alt="search-icon"
        />
        <input
          class="py-2 pl-9 pr-16 w-full"
          type="text"
          placeholder="search for Pokemon or types"
        />
        <button class="absolute bg-nb-blue p-2 right-0">
          <img class="w-6" src="../assets/icons/search.svg" alt="search-icon" />
        </button>
      </div>
    </header>
    <nav class="col-span-1 border-r border-black">
      <ul>
        <li
          v-for="type in pokeType"
          :key="type.id"
          @click="getTypeInfo(type.name)"
          class="text-center w-full text-sm py-2 px-4 border-b border-black hover:bg-nb-blue cursor-pointer"
        >
          {{ type.name }}
        </li>
      </ul>
    </nav>
    <div class="col-start-2 col-span-5 border-r border-black">
      <PokemonWidget
        v-if="!store.isLoading"
        :pokemon-list="store.getPokemonFilteredByType"
      />
      <div
        v-else
        class="grid grid-cols-1 gap-4 p-4 h-[30rem] overflow-y-scroll"
      >
        <div
          v-for="n in 10"
          :key="n"
          class="w-full bg-nb-blue h-20 animate-pulse"
        ></div>
      </div>
    </div>

    <div class="col-start-7 col-span-full border border-r-black">
      <ScatterPlot />
    </div>
  </main>
</template>
