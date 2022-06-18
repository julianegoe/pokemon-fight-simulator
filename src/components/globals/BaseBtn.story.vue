<script lang="ts" setup>
import { hstEvent } from "histoire/client";
import BaseBtn from "./BaseBtn.vue";
import { ref } from "vue";

const btnText = ref("Yes");
</script>
<template>
  <Story title="BaseBtn" :layout="{ type: 'grid', width: 200 }">
    <Variant title="default">
      <BaseBtn @click="hstEvent('click', $event)" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <Variant title="Snes Red">
      <BaseBtn @click="hstEvent('click', $event)" theme="snes-red" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <Variant title="Snes Blue">
      <BaseBtn @click="hstEvent('click', $event)" theme="snes-blue" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <Variant title="Snes Green">
      <BaseBtn @click="hstEvent('click', $event)" theme="snes-green" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <Variant title="Snes Yellow">
      <BaseBtn @click="hstEvent('click', $event)" theme="snes-yellow" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <Variant title="Atari">
      <BaseBtn @click="hstEvent('click', $event)" theme="atari" btn-text="Yes">
        {{ btnText }}
      </BaseBtn>
    </Variant>
    <template #controls>
      <HstText title="Button Text" v-model="btnText" />
    </template>
  </Story>
</template>
