<template>
  <FormKit type="mask" mask="(##) ### ### ###" label="Mask input" />
</template>

<script setup>
import { FormKit } from '@formkit/vue'
</script>

<style>
@import "./formkit-theme-ce.css";

:host {
  -webkit-text-stroke: 0.5px rgba;
  -webkit-text-stroke: 0.5px green;
  mask-mode: luminance;
}
</style>
