<template>
  <slot />
  <TestMe />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { optionsSymbol, defaultConfig } from '@formkit/vue'
import { createProPlugin, mask } from '@formkit/pro'

import TestMe from './TestMe.vue'

const config = defaultConfig({
  plugins: [
    createProPlugin(import.meta.env.VITE_APP_FORMKIT_LICENSE, { mask }),
  ]
})

provide(optionsSymbol, config)
</script>
