<template>
  <FormKit label="My input" validation="required|number|between:20,50" />
</template>

<script setup>
import { FormKit } from '@formkit/vue'
</script>

<style>
@import "./formkit-theme-ce.css";
</style>
