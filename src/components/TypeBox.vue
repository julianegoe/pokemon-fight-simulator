<script lang="ts" setup>
defineProps<{
  typeName: string;
  color: string;
}>();
</script>
<template>
  <div
    class="p-4 text-md font-bold text-black border border-black shadow-retro"
    :class="{
      'bg-nb-yellow': color === 'yellow',
      'bg-nb-blue': color === 'blue',
    }"
  >
    {{ typeName.toUpperCase() }}
  </div>
</template>
