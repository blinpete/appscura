<template>
  <button class="bg-light-400 rounded-md px-2 text-cool-gray-700 relative">
    <slot />

    <div v-if="counter || close" class="absolute -top-2 -right-1 bg-blue-100 text-dark-300 rounded-full z-10 w-4 h-4 text-xs align-middle text-center">
      <span v-if="counter !== undefined">{{ counter }}</span>
      <span v-if="close">&times;</span>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  counter?: number
  close?: boolean
}>()
</script>