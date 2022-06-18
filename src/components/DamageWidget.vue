<script lang="ts" setup>
import { computed } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import type { PokeAPI } from "pokeapi-types";
import TypeBox from "@/components/TypeBox.vue";

const store = usePokemonStore();

const typeInfo = computed<PokeAPI.Type | null>(() => {
  return store.typeInfo;
});
</script>

<template>
  <div class="flex flex-col" v-if="typeInfo">
    <div class="flex items-center">
      <div class="m-4 transform -rotate-6">
        <TypeBox color="yellow" :type-name="typeInfo.name" />
      </div>
      <div class="text-3xl self-center">⏫️ ⏫️</div>
      <div
        v-for="name in typeInfo.damage_relations.double_damage_to"
        :key="name.name"
        class="text-md"
      >
        <div class="px-2 mx-2 text-white bg-nb-blue rounded-2xl">
          {{ name.name }}
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="m-4 transform -rotate-6">
        <TypeBox color="yellow" :type-name="typeInfo.name" />
      </div>
      <div class="text-3xl self-center">⏬</div>
      <div
        v-for="name in typeInfo.damage_relations.half_damage_to"
        :key="name.name"
        class="text-md"
      >
        <div class="px-2 mx-2 text-white bg-nb-blue rounded-2xl">
          {{ name.name }}
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="m-4 transform -rotate-6">
        <TypeBox color="yellow" :type-name="typeInfo.name" />
      </div>
      <div class="text-3xl self-center">🚫</div>
      <div
        v-for="name in typeInfo.damage_relations.no_damage_to"
        :key="name.name"
        class="text-md"
      >
        <div class="px-2 mx-2 text-white bg-nb-blue rounded-2xl">
          {{ name.name }}
        </div>
      </div>
    </div>
  </div>
</template>
