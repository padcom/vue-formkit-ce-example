<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { optionsSymbol, defaultConfig } from '@formkit/vue'
import { createProPlugin, mask } from '@formkit/pro'

const config = defaultConfig({
  plugins: [
    createProPlugin(import.meta.env.VITE_APP_FORMKIT_LICENSE, { mask }),
  ],
})

provide(optionsSymbol, config)
</script>
