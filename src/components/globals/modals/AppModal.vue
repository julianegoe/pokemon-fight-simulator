<script lang="ts" setup>
defineProps<{
  dialogTitle?: string;
  theme?: "atari" | "snes" | "nb-red" | "nb-blue" | "nb-green" | "nb-yellow";
  size?: "sm" | "md" | "lg";
}>();

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<template>
  <div
    class="flex flex-col w-full bg-white border-2 border-black rounded-md m-auto text-black shadow-retro"
    :class="{
      'w-1/4': size === 'sm',
      'w-2/4': size === 'md',
      'w-3/4': size === 'lg',
      'font-press-start bg-snes-light-gray border-snes-black shadow-snes-black border-4':
        theme === 'snes',
      'font-press-start bg-atari-black border-atari-white shadow-atari-white border-4':
        theme === 'atari',
    }"
    role="dialog"
    id="dialog1"
    aria-labelledby="dialogTitle"
    aria-modal="true"
  >
    <!--HEADER-->
    <div
      id="dialogTitle"
      class="flex justify-between items-baseline rounded-t-sm text-xs px-2 py-2"
      :class="{
        'border-b-4 border-black bg-snes-gray text-white border-snes-gray':
          theme === 'snes',
        'border-b-4 border-atari-brown bg-atari-brown text-white':
          theme === 'atari',
        'bg-nb-red': theme === 'nb-red',
        'bg-nb-blue': theme === 'nb-blue',
        'bg-nb-light-green': theme === 'nb-green',
        'bg-nb-yellow': theme === 'nb-yellow',
      }"
    >
      <div class="truncate pr-2 uppercase">{{ dialogTitle || "" }}</div>
      <div @click="closeModal" class="cursor-pointer">x</div>
    </div>
    <div class="px-8 py-2" id="dialogContent">
      <slot name="dialog-content" />
    </div>
    <div class="px-4 py-2 text-md text-right" id="dialogFooter">
      <slot name="dialog-footer" />
    </div>
  </div>
</template>
