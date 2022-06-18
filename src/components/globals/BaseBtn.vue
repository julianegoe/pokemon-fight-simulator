<script lang="ts" setup>
defineProps<{
  theme?:
    | "snes-red"
    | "snes-blue"
    | "snes-green"
    | "snes-yellow"
    | "atari"
    | "nb-red"
    | "nb-blue"
    | "nb-green"
    | "nb-yellow";
}>();
</script>
<template>
  <button
    type="submit"
    class="bg-white text-black p-0.5 border-2 border-black"
    :class="{
      'font-press-start bg-snes-red text-black hover:opacity-80':
        theme === 'snes-red',
      'font-press-start bg-snes-blue text-black hover:opacity-80':
        theme === 'snes-blue',
      'font-press-start bg-snes-green text-black hover:opacity-80':
        theme === 'snes-green',
      'font-press-start bg-snes-yellow text-black hover:opacity-80':
        theme === 'snes-yellow',
      'font-press-start rounded-full bg-atari-red text-atari-white hover:opacity-80 border-atari-white':
        theme === 'atari',
      'bg-nb-red': theme === 'nb-red',
      'bg-nb-blue': theme === 'nb-blue',
      'bg-nb-light-green': theme === 'nb-green',
      'bg-nb-yellow': theme === 'nb-yellow',
    }"
  >
    <div
      class="px-2 py-1 border-2 border-black border-dashed"
      :class="{
        'border-none': theme === 'atari' || (theme && theme.startsWith('nb-')),
      }"
    >
      <slot />
    </div>
  </button>
</template>
