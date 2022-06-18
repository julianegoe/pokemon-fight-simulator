<script lang="ts" setup>
import { hstEvent } from "histoire/client";
import AppModal from "./AppModal.vue";
import BaseBtn from "../BaseBtn.vue";
import { ref } from "vue";

// State
const contentText = ref("");
const footerText = ref("");

defineExpose({
  contentText,
  footerText,
});
</script>

<template>
  <Story title="AppModal">
    <Variant title="default">
      <AppModal @close="hstEvent('close', $event)">
        <template #dialog-content>
          {{ contentText }}
        </template>
        <template #dialog-footer>
          {{ footerText }}
        </template>
      </AppModal>
    </Variant>

    <Variant title="SNES">
      <AppModal
        size="lg"
        theme="snes"
        dialog-title="AGB akzeptieren?"
        @close="hstEvent('close', $event)"
      >
        <template #dialog-content>
          <div class="text-center text-ellipsis overflow-hidden">
            {{ contentText }}
          </div>
        </template>
        <template #dialog-footer>
          <div class="flex flex-wrap gap-4 justify-center">
            <BaseBtn theme="snes-green" @click="hstEvent('click', $event)"
              >A</BaseBtn
            >
            <BaseBtn theme="snes-red" @click="hstEvent('click', $event)"
              >B</BaseBtn
            >
            <BaseBtn theme="snes-blue" @click="hstEvent('click', $event)"
              >C</BaseBtn
            >
            <BaseBtn theme="snes-yellow" @click="hstEvent('click', $event)"
              >D</BaseBtn
            >
          </div>
        </template>
      </AppModal>
    </Variant>

    <Variant title="Atari">
      <AppModal
        size="lg"
        theme="atari"
        dialog-title="AGB akzeptieren?"
        @close="hstEvent('close', $event)"
      >
        <template #dialog-content>
          <div class="text-center text-ellipsis overflow-hidden">
            {{ contentText }}
          </div>
        </template>
        <template #dialog-footer>
          <div class="flex flex-wrap gap-4 justify-center">
            <BaseBtn theme="atari" @click="hstEvent('click', $event)"
              >Yes</BaseBtn
            >
            <BaseBtn theme="atari" @click="hstEvent('click', $event)"
              >No</BaseBtn
            >
          </div>
        </template>
      </AppModal>
    </Variant>
    <Variant title="Neu Brutalism">
      <AppModal
        size="lg"
        theme="nb-green"
        dialog-title="🔴 🟡 🟢"
        @close="hstEvent('close', $event)"
      >
        <template #dialog-content>
          <div class="text-center text-ellipsis overflow-hidden">
            {{ contentText }}
          </div>
        </template>
        <template #dialog-footer>
          <div class="flex flex-wrap gap-4 justify-center">
            <BaseBtn theme="nb-blue" @click="hstEvent('click', $event)"
              >👍</BaseBtn
            >
            <BaseBtn theme="nb-red" @click="hstEvent('click', $event)"
              >👎</BaseBtn
            >
          </div>
        </template>
      </AppModal>
    </Variant>
    <template #controls>
      <HstText title="Text Content" v-model="contentText"></HstText>
      <HstText title="Footer Content" v-model="footerText"></HstText>
    </template>
  </Story>
</template>
