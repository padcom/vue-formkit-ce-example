<template>
  <!--
    Please note the part="header" here.
    It is an extension point. Using parts one can then later on style, well, parts
    of the custom component like so:

    hello-world::part(header) {
      /* styles */
    }

    Please note the selector here uses component class. It also works with different
    selectors (class, id,...)
  -->
  <h1 part="header">Example h1 within custom component with no styling</h1>
  <FormKit type="mask" mask="(##) ### ### ###" label="Mask input" />
</template>

<script setup lang="ts">
import { FormKit } from '@formkit/vue'
</script>

<style lang="postcss">
@import "./formkit-theme-ce.css";

:host {
  @apply @container block w-auto;
}

@container (max-width: 600px) {
  .formkit-label {
    @apply bg-green-100 rounded text-orange-800;
    @apply p-2 mb-1;
  }
}
</style>
