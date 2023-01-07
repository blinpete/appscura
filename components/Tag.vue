<template>
  <button class="tag bg-light-400 rounded-md px-2 text-cool-gray-600 relative">
    <slot />

    <div v-if="counter || close" class="tag__dot absolute -top-2 -right-1.8 text-dark-300 rounded-full z-10 w-4 h-4 text-xs align-middle text-center">
      <span v-if="close">&times;</span>
      <span v-else-if="counter !== undefined">{{ counter }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  counter?: number
  close?: boolean
}>()
</script>

<style>
.tag:hover {
  transform: scale(1.1);
  transition: all 0.1s ease-out;
}
.tag__dot {
  background-color: inherit;
}
</style>