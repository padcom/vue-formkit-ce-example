<template>
  <FormKit type="mask" mask="(##) ### ### ###" label="Mask input" />
</template>

<script setup>
import { FormKit } from '@formkit/vue'
</script>

<style lang="postcss">
/* @import "./formkit-theme-ce.css"; */

:host {
  @apply bg-yellow-400;
}

label {
  mask-clip: padding;
  @apply bg-green-100 rounded text-orange-800 mx-20;
}

.formkit-input {
  @apply text-blue-400;
}
</style>
